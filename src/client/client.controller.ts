import { Request, Response, NextFunction } from "express";
import { client } from './client.entity.js'
import { orm } from '../shared/db/orm.js'

const em = orm.em

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
//test
async function findAll(req: Request, res: Response) {
  try {
    const Clients = await em.find(
      client,
      {},
      { populate: ['clientClass'] }
    )
    res.status(200).json({ message: 'found all Clients', data: Clients })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const id = req.params.id
    const Client = await em.findOneOrFail(
      client,
      { id },
      { populate: ['clientClass'] }
    )
    res.status(200).json({ message: 'found client', data: Client })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function add(req: Request, res: Response) {
  try {
    const Client = em.create(client, req.body.sanitizedInput)
    await em.flush()
    res.status(201).json({ message: 'client created', data: Client })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function update(req: Request, res: Response) {
  try {
    const id = req.params.id
    const clientToUpdate = await em.findOneOrFail(client, { id })
    em.assign(clientToUpdate, req.body.sanitizedInput)
    await em.flush()
    res
      .status(200)
      .json({ message: 'client updated', data: clientToUpdate })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id = req.params.id
    const Client = em.getReference(client, id)
    await em.removeAndFlush(Client)
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export { sanitizeClientesInput, findAll, findOne, add, update, remove }
// Path: src/client/client.repository.ts