import { Request, Response, NextFunction } from "express"
import { Category } from "./category.entity.js"
import { orm } from "../shared/db/orm.js"

const em = orm.em

function sanitizeCategoryInput(req: Request, res: Response, next: NextFunction){
    req.body.sanitizedInput = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
    }

    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key]
        }
    })
    next()
}

async function findAll(req:Request, res:Response){
    try{
        const categories = await em.find(Category, {}, {populate: ['categoryType']})
        res.status(200).json({message: 'found all categories', data:categories})
    } catch (error:any){
        res.status(500).json({message: error.message})
    }
}

async function findOne(req:Request, res:Response){
    try {
        const id = req.params.id
        const category = await em.findOneOrFail(Category, { id },{ populate: ['categoryType'] }
        )
        res.status(200).json({ message: 'found category', data: category })
      } catch (error: any) {
        res.status(500).json({ message: error.message })
      }
}

async function add(req: Request, res: Response){
    try{
        const category = em.create(Category, req.body.sanitizedInput)
        await em.flush()
        res.status(201).json({message: 'category created', data:category})
    } catch (error:any){
        res.status(500).json({message: error.message})
    }
}

async function update(req: Request, res: Response){
    try {
        const id = req.params.id
        const categoryToUpdate = await em.findOneOrFail(Category, { id })
        em.assign(categoryToUpdate, req.body.sanitizedInput)
        await em.flush()
        res.status(200).json({ message: 'category updated', data: categoryToUpdate })
      } catch (error: any) {
        res.status(500).json({ message: error.message })
      }
}

async function remove(req: Request, res: Response){
    try {
        const id = req.params.id
        const category = em.getReference(Category, id)
        await em.removeAndFlush(category)
      } catch (error: any) {
        res.status(500).json({ message: error.message })
      }
}

export {sanitizeCategoryInput, findAll, findOne, add, update, remove}