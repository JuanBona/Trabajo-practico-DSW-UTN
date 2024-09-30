import { Router } from "express";
import { findAll, findOne, add, update, remove, sanitizeClientInput } from "./client.controller.js";
export const clientRouter = Router();
clientRouter.get('/', findAll);
clientRouter.get('/:id',sanitizeClientInput, findOne);
clientRouter.post('/',sanitizeClientInput, add);
clientRouter.put('/:id',sanitizeClientInput, update);
clientRouter.delete('/:id', sanitizeClientInput, remove)// Path: src/client/client.entity.ts
// compare 