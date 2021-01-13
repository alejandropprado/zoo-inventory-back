import { Animal } from '../../domain/Animal';
import { AnimalRepository } from '../../domain/AnimalRepository'

export default async function (
  animalID: string,
  repository: AnimalRepository
): Promise<boolean> {
  const animals = await repository.delete(animalID)

  return animals
}