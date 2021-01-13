import env, { constants } from './env'

import AnimalRepositoryMongo from '../repository/AnimalRepositoryMongo'

function buildServiceRepository() {
  if (env.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
    return new AnimalRepositoryMongo()
  }


  throw new Error("Persist not support");
}

export default buildServiceRepository()