import { Request, Response } from 'express'

import { AnimalRepository } from '../../domain/AnimalRepository'
import CreateAnimalUseCase from '../../application/useCase/CreateAnimal'
import FindAnimalsUseCase from '../../application/useCase/FindAnimals'
import DeleteAnimalUseCase from '../../application/useCase/DeleteAnimal'

const createAnimal = (repository: AnimalRepository) =>
  async (req: Request, res: Response) => {
    try {
      const { scientific_name, common_name, quantity } = req.body
      const newAnimal = await CreateAnimalUseCase(scientific_name, common_name, quantity, repository)

      return res.status(200).send(newAnimal)
    } catch (error) {
      return res.sendStatus(500)
    }
  }

const findAnimals = (repository: AnimalRepository) =>
  async (req: Request, res: Response) => {
    try {
      const animals = await FindAnimalsUseCase(repository)

      return res.status(200).send(animals)
    } catch (error) {
      return res.sendStatus(500)
    }
  }

const deleteAnimal = (repository: AnimalRepository) =>
  async (req: Request, res: Response,) => {
    try {
      const { id } = req.params

      const isDeleted = await DeleteAnimalUseCase(id, repository)

      return res.status(200).send({ isDeleted })
    } catch (error) {
      return res.sendStatus(500)
    }
  }

export {
  findAnimals,
  createAnimal,
  deleteAnimal,
}
