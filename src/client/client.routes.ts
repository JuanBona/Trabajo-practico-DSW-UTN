import { Router } from "express";
import { findAll, findOne, add, update, remove, sanitizeClientesInput } from "./client.controller.js";
export const clientRouter = Router();
clientRouter.get('/', findAll);
clientRouter.get('/:id',sanitizeClientesInput, findOne);
clientRouter.post('/',sanitizeClientesInput, add);
clientRouter.put('/:id',sanitizeClientesInput, update);
clientRouter.delete('/:id',sanitizeClientesInput,remove);
// Path: src/client/client.entity.ts