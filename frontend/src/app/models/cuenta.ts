export class Cuenta {
    _id?: Number;
    nombre: String;
    saldo: Number;

    constructor(nombre:String, saldo: Number){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}