import { Animal } from './Animal'

export interface AnimalRepository {
  find(): Promise<Animal[]>
  create(scientific_name: string, common_name: string, quantity: number): Promise<Animal>
  delete(id: string): Promise<boolean>
}