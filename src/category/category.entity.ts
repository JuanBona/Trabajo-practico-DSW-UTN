import crypto from 'node:crypto'

export class Category{
    constructor(
        public nombre: string,
        public descripcion: string,
        public idCategory= crypto.randomUUID()
    ) {}
}