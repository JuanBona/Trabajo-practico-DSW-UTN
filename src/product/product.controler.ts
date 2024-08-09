import { Request, Response, NextFunction } from "express"
import { ProductRepository } from "./product.repository.js"
import { Product } from "./product.entity.js"

const repository = new ProductRepository()

function sanitizeProductInput(req: Request, res: Response, next: NextFunction){
    req.body.sanitizedInput = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        marca: req.body.marca,
        categoria: req.body.categoria,
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
    const product = await repository.findOne({id})

    if(!product){
        return res.status(404).send({message: 'Product not found'})
    }
    res.json({data: product})
}

async function add(req: Request, res: Response){
    const input = req.body.sanitizedInput
    const productInput = new Product(
        input.nombre,
        input.descripcion,
        input.precio,
        input.stock,
        input.marca,
        input.categoria
    )

    const product = await repository.add(productInput)
    return res.status(201).send({message: 'Product created', data: product})
}

async function update(req: Request, res: Response){
    const product = await repository.update(req.params.id, req.body.sanitizedInput)

    if(!product){
        return res.status(404).send({ message: 'Product not found' })
    }

    return res.status(200).send({ message: 'Product updated succesfully', data: product })
}

async function remove(req: Request, res: Response){
    const id = req.params.id
    const product = await repository.delete({id})

    if(!product){  
        res.status(404).send({ message: 'Product not found'})
    } else{
        res.status(200).send({ message: 'Product delete succesfully'})
    }
}

export {sanitizeProductInput, findAll, findOne, add, update, remove}