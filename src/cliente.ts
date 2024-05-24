import crypto from 'node:crypto'
export class cliente {
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public birthdate: Date,
        public email: string,
        public phone: string,
        public address: string,
        public city: string,
        public country: string,
        public postalCode: string,
        public dni: string,
        public password: string
    ) { this.id = id,
        this.nombre = nombre,
        this.apellido = apellido,
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