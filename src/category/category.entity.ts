import { ObjectId } from 'mongodb';
import crypto from 'node:crypto'

export class Category{
    constructor(
        public nombre: string,
        public descripcion: string,
        public _id?: ObjectId,
    ) {}
}