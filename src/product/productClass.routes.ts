import { Router } from "express";
import {
  findAll, 
  findOne, 
  add, 
  update, 
  remove,
} from "./productClass.controler.js";

export const productClassRouter = Router()

productClassRouter.get('/', findAll)
productClassRouter.get('/:id',findOne)
productClassRouter.post('/', add)
productClassRouter.put('/:id', update)
productClassRouter.delete('/:id', remove)