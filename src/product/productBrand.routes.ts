import { Router } from "express";
import { findAll, findOne, add, update, remove } from "./productBrand.controler.js";

export const productBrandRouter = Router()

productBrandRouter.get('/', findAll)
productBrandRouter.get('/:id', findOne)
productBrandRouter.post('/',  add)
productBrandRouter.put('/:id',  update)
productBrandRouter.delete('/:id',  remove)