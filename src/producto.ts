
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
}