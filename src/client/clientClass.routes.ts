import { Router } from 'express'
import {
  findAll,
  findOne,
  add,
  update,
  remove,
} from '../client/clientClass.controller.js'
export const clientClassRouter = Router()

clientClassRouter.get('/', findAll)
clientClassRouter.get('/:id', findOne)
clientClassRouter.post('/', add)
clientClassRouter.put('/:id', update)
clientClassRouter.delete('/:id', remove)