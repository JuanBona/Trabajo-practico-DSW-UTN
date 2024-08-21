import { Request, Response, NextFunction } from "express"
import { BrandRepository } from "./brand.repository.js"
import { Brand } from "./brand.entity.js"

const repository = new BrandRepository()

function sanitizeBrandInput(req: Request, res: Response, next: NextFunction){
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
        return res.status(404).send({message: 'Brand not found'})
    }
    res.json({data: category})
}

async function add(req: Request, res: Response){
    const input = req.body.sanitizedInput
    const brandInput = new Brand(
        input.nombre,
        input.descripcion
    )

    const brand = await repository.add(brandInput)
    return res.status(201).send({message: 'Brand created', data: brand })
}

async function update(req: Request, res: Response){
    const brand = await repository.update(req.params.id, req.body.sanitizedInput)

    if(!brand){
        return res.status(404).send({ message: 'Brand not found' })
    }

    return res.status(200).send({ message: 'Brand updated succesfully', data: brand })
}

async function remove(req: Request, res: Response){
    const id = req.params.id
    const brand = await repository.delete({id})

    if(!brand){  
        res.status(404).send({ message: 'Brand not found'})
    } else{
        res.status(200).send({ message: 'Brand delete succesfully'})
    }
}

export {sanitizeBrandInput, findAll, findOne, add, update, remove}