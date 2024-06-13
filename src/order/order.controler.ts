import { Request, Response, NextFunction } from "express"
import { OrderRepository } from "./order.repository.js"
import { Order } from "./order.entity.js"

const repository = new OrderRepository()

function sanitizeOrderInput(req: Request, res: Response, next: NextFunction){
    req.body.sanitizedInput = {
        fecha: req.body.fecha, 
        estado: req.body.estado, 
        cantidadProducto: req.body.cantidadProducto,
        precioUnitario: req.body.precioUnitario, 
    }
   

    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key]
        }
    })
    next()
}

async function findAll(req: Request, res: Response) {
    res.json(await repository.findAll());
}

async function findOne(req: Request, res: Response){
    const id = req.params.id
    const order = await repository.findOne({id})
    if(!order){
       return res.status(404).send({message: 'Order not found}'})
    }
    res.json({data: order})
}

async function add(req: Request, res: Response){
     const input = req.body.sanitizedInput
     const orderInput = new Order(
        input.fecha, 
        input.estado, 
        input.cantidadProducto, 
        input.precioUnitario)

     const order = await repository.add(orderInput)
     return res.status(201).send({ message: 'Order created successfully', data: order})

}

async function update(req: Request, res: Response) {
    req.body.sanitizedInput.id = req.params.id
    const order = await repository.update(req.body.sanitizedInput) 
    if(!order) {
        return res.status(404).send({ message: 'order not found'})
    } 
    return res.status(200).send({message: 'Order updated successfully', data: order})
}

async function remove(req: Request, res: Response) {
    const id = req.params.id
    const order = await repository.delete({id})
    if(!order) {
        res.status(404).send({ message: 'order not found'})
    } else {
    res.status(200).send({message: 'order deleted successfully'})}
}

export {sanitizeOrderInput, findAll, findOne, add, update, remove}