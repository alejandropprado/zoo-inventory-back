import dotenv from 'dotenv'

dotenv.config()

import env, { constants } from './env'

async function init() {
  if (env.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
    require('../orm/mongoose')
  }
}

export { init }
