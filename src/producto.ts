import crypto from 'node:crypto'
import { get } from 'node:http'

export class producto {
    constructor(
        public idProducto: number,
        public nombre: string,
        public descripcion: string,
        public precio: number,
        public stock: number,
        public marca: string,
        public categoria: string
    ) {
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.marca = marca;
        this.categoria = categoria;
    }
    public static generateId() {
        return crypto.randomBytes(16).toString('hex')
    }

    public validateStock(){
        let actualStock = this.stock

        if (actualStock = 0 ) {
            return console.log("This product is out of stock")
        }
        return console.log(`The actual stock is ${actualStock}`)
    }
}