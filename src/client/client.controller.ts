import { Request, Response, NextFunction } from "express";
import { clientRepository } from "./client.repository.js";
import { client } from "./client.entity.js";
const repository = new clientRepository();
function sanitizeClientesInput(req: Request, res: Response, next: NextFunction){
  req.body.sanitizedInput = {
    name: req.body.name,
    lastname: req.body.lastname,
    birthdate: req.body.birthdate,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    postalCode: req.body.postalCode,
    dni: req.body.dni
  }
  Object.keys(req.body.sanitizedInput).forEach((key) => {
    if (req.body.sanitizedInput[key]=== undefined) {
      delete req.body.sanitizedInput[key];
    }
  })
  next();
}
async function findAll(req: Request, res: Response){
  res.json(await repository.findAll());
}
async function findOne(req: Request, res: Response){
const id =  req.params.id;
const client = await repository.findOne({id})
if(!client){
  return res.status(404).json({message: 'Client not found'})
}
res.json({data: client})
}
async function add(req: Request, res: Response){
  const input = req.body.sanitizedInput
  const clientInput = new client(
    input.name,
    input.lastname,
    input.birthdate,
    input.email,
    input.phone,
    input.address,
    input.city,
    input.country,
    input.postalCode,
    input.dni
  )
  const Client = await repository.add(clientInput)
  return res.status(201).send({message:'Client createad',data: Client})
}
async function update (req: Request, res: Response){
req.body.sanitizedInput.id = req.params.id;
const client = await repository.update(req.body.sanitizedInput)
if(!client){
  return res.status(404).json({message: 'Client not found'})
}
return res.status(200).json({message: 'Client updated', data: client})
}
async function remove (req: Request, res: Response){
  const id = req.params.id;
  const client = await repository.delete({id})
  if(!client){
    return res.status(404).json({message: 'Client not found'})
  }
  return res.status(200).json({message: 'Client deleted', data: client})
}
export {findAll, findOne, add, update, remove, sanitizeClientesInput}
// Path: src/client/client.repository.ts