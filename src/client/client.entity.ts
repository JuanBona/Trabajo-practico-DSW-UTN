import crypto from 'node:crypto'
import { ObjectId } from 'mongodb'
export class client {
    constructor(
        public name: string,
        public lastname: string,
        public birthdate: Date,
        public email: string,
        public phone: string,
        public address: string,
        public city: string,
        public country: string,
        public postalCode: string,
        public dni: string,
        public id = crypto.randomUUID(),
        public _id?: ObjectId
    ) {}  
}