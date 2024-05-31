import { Request, Response, NextFunction } from "express";
import { clientRepository } from "./client.repository.js";
import { client } from "./client.entity.js";
const repository = new clientRepository();
function sanitizeClient(req: Request, res: Response, next: NextFunction) {
    req.body.sanitizedClient = {
        id: req.body.id,
        name: req.body.nombre,
        lastname: req.body.apellido,
        birthdate: req.body.birthdate,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        postalCode: req.body.postalCode,
        dni: req.body.dni,
        password: req.body.password
    }
    Object.keys(req.body.sanitizedClient).forEach(key => {
        if (req.body.sanitizedClient[key] === undefined) {
            delete req.body.sanitizedClient[key]
        }
    })
    next()
}
function findAll(req: Request, res: Response) {
    res.json({ data: repository.findAll() });
}
function findOne(req: Request, res: Response) {
    const id = req.params.id
    const client = repository.findOne({ id })
    if (!client) {
      return res.status(404).send({ message: 'Client not found' })
    }
    res.json({ data: client })
  }
function add(req: Request, res: Response) {
    const input = req.body.sanitizedClient
    const clientInput = new client(
        input.id,
        input.name,
        input.lastname,
        input.birthdate,
        input.email,
        input.phone,
        input.address,
        input.city,
        input.country,
        input.postalCode,
        input.dni,
        input.password
    )
    const newClient = repository.add(clientInput)
    return res.status(201).send({ message: 'Client created', data: newClient })

}
function update(req: Request, res: Response) {
   req.body.sanitizedClient.id = req.params.id
   const client = repository.update(req.body.sanitizedClient)
   if (!client) {
       return res.status(404).send({ message: 'Client not found' })
   }
   return res.status(200).send({ message: 'Client updated', data: client })
}
function remove(req: Request, res: Response) {
    const id = req.params.id
    const client = repository.delete({ id })
  
    if (!client) {
      res.status(404).send({ message: 'client not found' })
    } else {
      res.status(200).send({ message: 'client deleted successfully' })
    }
  }
export { sanitizeClient, findAll, findOne, add, update, remove}