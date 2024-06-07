import crypto from 'node:crypto'

export class Order{
    constructor(
       public fecha: Date,
       public estado: string,
       public cantidadProducto: number,
       public precioUnitario: number,
       public id = crypto.randomUUID()) {}
}