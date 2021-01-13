import { Animal } from '../../domain/Animal';
import { AnimalRepository } from '../../domain/AnimalRepository'

export default async function (
  scientific_name: string,
  common_name: string,
  quantity: number,
  repository: AnimalRepository,
): Promise<Animal> {
  const newAnimal = await repository.create(scientific_name, common_name, quantity)
  
  return newAnimal
}