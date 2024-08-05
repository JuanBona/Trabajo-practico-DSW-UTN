import { Request, Response, NextFunction } from "express"
import { CategoryRepository } from "./category.repository.js"
import { Category } from "./category.entity.js"

const repository = new CategoryRepository()

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
    res.json(await repository.findAll() )
}

async function findOne(req:Request, res:Response){
    const id = req.params.id
    const category = await repository.findOne({id})

    if(!category){
        return res.status(404).send({message: 'Category not found'})
    }
    res.json({data: category})
}

async function add(req: Request, res: Response){
    const input = req.body.sanitizedInput
    const categoryInput = new Category(
        input.nombre,
        input.descripcion
    )

    const category = await repository.add(categoryInput)
    return res.status(201).send({message: 'Category created', data: category})
}

async function update(req: Request, res: Response){
    const category = await repository.update(req.params.id, req.body.sanitizedInput)

    if(!category){
        return res.status(404).send({ message: 'Category not found' })
    }

    return res.status(200).send({ message: 'Category updated succesfully', data: category })
}

async function remove(req: Request, res: Response){
    const id = req.params.id
    const category = await repository.delete({id})

    if(!category){  
        res.status(404).send({ message: 'Category not found'})
    } else{
        res.status(200).send({ message: 'Category delete succesfully'})
    }
}

export {sanitizeCategoryInput, findAll, findOne, add, update, remove}