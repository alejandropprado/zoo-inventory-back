import { Document } from 'mongoose'

import { Animal } from '../../domain/Animal';
import { AnimalRepository } from '../../domain/AnimalRepository'

import AnimalModel from '../orm/mongoose/schemas/Animal'

interface AnimalDocuments extends Document {
  id: string
  scientific_name: string
  common_name: string
  quantity: number
}

export default class implements AnimalRepository {
  async find(): Promise<Animal[]> {
    const animalDocs = await AnimalModel.find().lean() as AnimalDocuments[]

    return animalDocs.map(animal =>
      new Animal(animal._id, animal.scientific_name, animal.common_name, animal.quantity)
    )
  }
  async create(scientific_name: string, common_name: string, quantity: number): Promise<Animal> {
    const animal = new AnimalModel({ scientific_name, common_name, quantity }) as AnimalDocuments
    await animal.save()

    return new Animal(animal._id, animal.scientific_name, animal.common_name, animal.quantity)
  }
  async delete(id: string): Promise<boolean> {
    const response = await AnimalModel.findOneAndDelete({ _id: id })
    
    return Boolean(response?._id)
  }
}
