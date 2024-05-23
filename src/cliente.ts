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
    public generateId() {
        return crypto.randomBytes(16).toString('hex')
    }
    public validateEmail() {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
    }
    public validatePhone() {
        return /^\d{9}$/.test(this.phone)
    }
    public validatePostalCode() {
        return /^\d{5}$/.test(this.postalCode)
    }
    public validateDni() {
        return /^\d{8}[A-Z]$/.test(this.dni)
    }
    public validatePassword() {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(this.password)
    }
    public validateCountry() {
        return /^[a-zA-Z]+$/.test(this.country)
    }
    public validateCity() {
        return /^[a-zA-Z]+$/.test(this.city)
    }
    public validateAddress() {
        return /^[a-zA-Z0-9]+$/.test(this.address)
    }
    public validateName() {
        return /^[a-zA-Z]+$/.test(this.nombre)
    }
    public validarEdad() {
        let hoy = new Date()
        let cumpleanos = new Date(this.birthdate)
        let edad = hoy.getFullYear() - cumpleanos.getFullYear()
        let m = hoy.getMonth() - cumpleanos.getMonth()
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--
        }
        return edad >= 18
    }
}