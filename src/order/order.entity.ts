import crypto from 'node:crypto'
import { ObjectId } from 'mongodb'

export class Order{
    constructor(
       public fecha: Date,
       public estado: string,
       public cantidadProducto: number,
       public precioUnitario: number,
       public _id?: ObjectId             
    ) {}

}