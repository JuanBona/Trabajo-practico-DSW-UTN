import crypto from 'node:crypto'

export class Product{
    constructor(
        public nombre: string,
        public descripcion: string,
        public precio: number,
        public stock: number,
        public marca: string,
        public categoria: string,
        public idProducto= crypto.randomUUID()
    ) {}
}