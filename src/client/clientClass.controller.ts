import { Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { ClientClass } from './clientClass.entity.js'
import { ObjectId } from '@mikro-orm/mongodb';

const em = orm.em

async function findAll(req: Request, res: Response) {
  try {
    const clientClasses = await em.find(ClientClass, {})
    res
      .status(200)
      .json({ message: 'found all client classes', data: clientClasses })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const id = req.params.id
    const objectId = new ObjectId(id); 
    const clientClass = await em.findOneOrFail(ClientClass, { _id: objectId })
    res
      .status(200)
      .json({ message: 'found client class', data: clientClass })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function add(req: Request, res: Response) {
  try {
    // Validar que req.body no sea undefined
    if (!req.body) {
      return res.status(400).json({ message: 'Request body is required' });
    }

    // Crear la instancia de ClientClass sin depender de __entity
    const clientClass = em.create(ClientClass, req.body);
    await em.flush();
    res.status(201).json({ message: 'Client class created', data: clientClass });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function update(req: Request, res: Response) {
  try {
    const id = req.params.id
    const objectId = new ObjectId(id); 
    const clientClass = em.getReference(ClientClass, objectId)
    em.assign(clientClass, req.body)
    await em.flush()
    res.status(200).json({ message: 'client class updated' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id = req.params.id
    const objectId = new ObjectId(id); 
    const clientClass = em.getReference(ClientClass, objectId)
    await em.removeAndFlush(clientClass)
    res.status(200).send({ message: 'Client class deleted' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export { findAll, findOne, add, update, remove }