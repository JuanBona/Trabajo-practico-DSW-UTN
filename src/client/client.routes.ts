import { Router } from "express";
import { findAll, findOne, add, update, remove } from "./client.controller";
export const clientRouter = Router();
clientRouter.get('/', findAll);
clientRouter.get('/:id', findOne);
clientRouter.post('/', add);
clientRouter.put('/:id', update);
clientRouter.delete('/:id', remove);
// Path: src/client/client.entity.ts