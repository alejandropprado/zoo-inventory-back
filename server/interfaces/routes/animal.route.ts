import express from 'express'

import {
  createAnimal,
  findAnimals,
  deleteAnimal,
} from '../controller/Animal.controller'
import AnimalRepositoryDB from '../../infrastructure/config/service.repository'

const router = express.Router()

router.get('/', findAnimals(AnimalRepositoryDB))
router.post('/', createAnimal(AnimalRepositoryDB))
router.delete('/:id', deleteAnimal(AnimalRepositoryDB))

export default router
