import { Request, Response } from "express"
import { orm } from '../shared/db/orm.js'
import { ProductClass } from "./productClass.entity.js"

const em = orm.em

async function findAll(req:Request, res:Response){
    try{
        const productClasses = await em.find(ProductClass, {})
        res.status(200).json({ message: 'found all product classes', data:productClasses})
    } catch ( error: any){
            res.status(500).json({ message: error.message })
    }
}

async function findOne(req:Request, res:Response){
    try {
        const id = req.params.id
        const productClass = await em.findOneOrFail(ProductClass, { id })
        res.status(200).json({ message: 'found product class', data: productClass })
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
}

async function add(req: Request, res: Response){
    try{
        const productClass = em.create(ProductClass, req.body) //Synchronic operation, not using DB
        await em.flush() //Only once at end, its like a commit to the DB
        res.status(201).json({ message: 'Product class created', data: productClass})
    } catch (error: any){
        res.status(500).json({ message: error.message })
    }
}

async function update(req: Request, res: Response){
    try {
        const id = req.params.id
        const productClass = await em.getReference(ProductClass, id )
        em.assign(productClass, req.body)
        await em.flush()
        res.status(200).json({ message: 'product class updated'})
    } catch (error: any) {
    res.status(500).json({ message: error.message })
    }
}

async function remove(req: Request, res: Response){
    try {
        const id = req.params.id
        const productClass = em.getReference(ProductClass, id)
        await em.removeAndFlush(productClass)
        res.status(204).send({ message: "product class deleted"})
    } catch (error: any) {
    res.status(500).json({ message: error.message })
    }
}

export { findAll, findOne, add, update, remove }