import { Router } from "express";
import { sanitizeBrandInput, findAll, findOne, add, update, remove } from "./brand.controler.js";

export const brandRouter = Router()

brandRouter.get('/', findAll)
brandRouter.get('/:id', sanitizeBrandInput,findOne)
brandRouter.post('/', sanitizeBrandInput, add)
brandRouter.put('/:id', sanitizeBrandInput, update)
brandRouter.patch('/:id', sanitizeBrandInput, update)
brandRouter.delete('/:id', sanitizeBrandInput, remove)