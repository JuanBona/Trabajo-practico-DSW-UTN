import { Router } from 'express'
import {
  findAll,
  findOne,
  add,
  update,
  remove,
} from './client.controller.js'

export const ClientClassRouter = Router()

ClientClassRouter.get('/', findAll)
ClientClassRouter.get('/:id', findOne)
ClientClassRouter.post('/', add)
ClientClassRouter.put('/:id', update)
ClientClassRouter.delete('/:id', remove)