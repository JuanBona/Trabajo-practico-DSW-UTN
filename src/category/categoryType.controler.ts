import { Request, Response } from "express" 
import { orm } from "../shared/db/orm.js"
import { CategoryType } from "./categoryType.entity.js"

const em = orm.em

async function findAll(req:Request, res:Response){
    try{
        const categoryTypes = await em.find(CategoryType, {})
        res.status(200).json({message: 'found all category types', data:categoryTypes})
    } catch (error: any){
        res.status(500).json({message: error.message})
    }
}

async function findOne(req:Request, res:Response){
    try{
        const id = req.params.id
        const categoryType = await em.findOneOrFail(CategoryType, { id })
        res.status(200).json({message: 'found category type', data: categoryType})
    } catch (error:any){
        res.status(500).json({message: error.message})
    }
}

async function add(req: Request, res: Response){
    try{
        const categoryType = em.create(CategoryType, req.body)
        await em.flush()
        res.status(201).json({message: 'category type created', data: categoryType})
    } catch (error:any){
        res.status(500).json({message: error.message})
    }
}

async function update(req: Request, res: Response){
    try{
        const id = req.params.id
        const categoryType = em.getReference(CategoryType, id )
        em.assign(categoryType, req.body)
        await em.flush()
        res.status(200).json({message: 'category type created'})
    } catch(error:any){
        res.status(500).json({message: error.message})
    }
}

async function remove(req: Request, res: Response){
    try{
        const id = req.params.id
        const categoryType = em.getReference(CategoryType, id )
        await em.removeAndFlush(categoryType)
        res.status(200).send({message: 'category type deleted'})
    } catch(error:any){
        res.status(500).json({message: error.message})
    }
}

export {findAll, findOne, add, update, remove}