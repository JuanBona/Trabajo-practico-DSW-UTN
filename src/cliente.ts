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
    ) {}
    public static generateId() {
        return crypto.randomBytes(16).toString('hex')
    }
    public static validateEmail(email: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    public static validatePhone(phone: string) {
        return /^\d{9}$/.test(phone)
    }
    public static validatePostalCode(postalCode: string) {
        return /^\d{5}$/.test(postalCode)
    }
    public static validateDni(dni: string) {
        return /^\d{8}[A-Z]$/.test(dni)
    }
    public static validatePassword(password: string) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)
    }
    public static validateCountry(country: string) {
        return /^[a-zA-Z]+$/.test(country)
    }
    public static validateCity(city: string) {
        return /^[a-zA-Z]+$/.test(city)
    }
    public static validateAddress(address: string) {
        return /^[a-zA-Z0-9]+$/.test(address)
    }
    public static validateName(name: string) {
        return /^[a-zA-Z]+$/.test(name)
    }
    public static validarEdad(birthdate: Date) {
        let hoy = new Date()
        let cumpleanos = new Date(birthdate)
        let edad = hoy.getFullYear() - cumpleanos.getFullYear()
        let m = hoy.getMonth() - cumpleanos.getMonth()
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--
        }
        return edad >= 18
    }
}