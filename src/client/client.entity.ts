import crypto from 'node:crypto'
export class client {
    constructor(
        public id = crypto.randomUUID(),
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
        public password: string,
        public _id?: ObjectId
    ) { this.id = id,
        this.name = name,
        this.lastname = lastname,
        this.birthdate = birthdate,
        this.email = email,
        this.phone = phone,
        this.address = address,
        this.city = city,
        this.country = country,
        this.postalCode = postalCode,
        this.dni = dni,
        this.password = password
     }  
}