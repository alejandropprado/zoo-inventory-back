import { Animal } from '../../domain/Animal';
import { AnimalRepository } from '../../domain/AnimalRepository'

export default async function (repository: AnimalRepository): Promise<Animal[]> {
  const animals = await repository.find()

  return animals
}