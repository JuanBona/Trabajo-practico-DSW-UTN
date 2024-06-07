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
    //more checks here...

    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if (req.body.sanitizedInput[key] === undefined) {
            delete req.body.sanitizedInput[key]
        }
    })
    next()
}

function findAll(req: Request, res: Response) {
    res.json({data: repository.findAll() })
}

function findOne(req: Request, res: Response){
    const id = req.params.id
    const character = repository.findOne({id})
    if(!character){
       return res.status(404).send({ message: 'Order not found}'})
    }
    res.json({data: character})
}

function add(req: Request, res: Response){
     const input = req.body.sanitizedInput

     const orderInput = new Order(
        input.fecha, 
        input.estado, 
        input.cantidadProducto, 
        input.precioUnitario)

     const order = repository.add(orderInput)
     return res.status(201).send({ message: 'Order created successfully', data: order})

}

function update(req: Request, res: Response) {
    req.body.sanitizedInput.id = req.params.id
    const order = repository.update(req.body.sanitizedInput)
    
    if(!order) {
        return res.status(404).send({ message: 'order not found'})
    } 

    return res.status(200).send({message: 'Order updated successfully', data: order})

}

function remove(req: Request, res: Response) {
    const id = req.params.id
    const order = repository.delete({id})
    

    if(!order) {
        res.status(404).send({ message: 'order not found'})
    } else {
    res.status(200).send({message: 'order deleted successfully'})}
}

export {sanitizeOrderInput, findAll, findOne, add, update, remove}