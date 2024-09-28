import { Router } from "express";
import { findAll, findOne, add, update, remove } from "./categoryType.controler.js";

export const categoryTypeRouter = Router()

categoryTypeRouter.get('/', findAll)
categoryTypeRouter.get('/:id', findOne)
categoryTypeRouter.post('/',  add)
categoryTypeRouter.put('/:id',  update)
categoryTypeRouter.delete('/:id',  remove)