export class Producto {
    public nombre: string;
    public detalle: string;
    public cantidad: string;

    constructor(nombre: string = "", detalle: string = "", cantidad: string = "" ) {
        this.nombre = nombre;
        this.detalle = detalle;
        this.cantidad = cantidad;
    }

    //constructor(){};
}