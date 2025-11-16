export class contarNumeros {
    constructor(numeroI, numeroF) {
        this.numeroI = 0;
        this.numeroF = 0;
        this.numeroI = numeroI;
        this.numeroF = numeroF;
        // Llamada correcta ddesde el constructor
        this.conteoIToF();
        this.conteoFToI();
    } ;
    //contar de inicio a fin
    async conteoIToF() {
        for (let i = this.numeroI; i <= this.numeroF; i++) {
            console.log(i);
        }
        ;
        console.log(`El rango va desde ${this.numeroI} hasta ${this.numeroF}`);
    }
    //contar al reves
    conteoFToI() {
        for (let i = this.numeroF; i >= this.numeroI; i--) {
            console.log(i);
        }
        console.log(`El rango va desde ${this.numeroF} hasta ${this.numeroI}`);
    }
}
;
//Otra forma de llamar desde la misma clase
//--> const contador = new contarNumeros(1,100);
/*
################################################################
################################################################
PUEDESREAR OTRO ARCHIVO PARA LLAMAR LA CLASE Y LA FUNCION
################################################################
################################################################
//  src/controllers/inicioConteo.ts
import { contarNumeros } from "../models/contarnumeros";

const contador = new contarNumeros(1, 100);

contador.conteoIToF();   // Cuenta hacia adelante
contador.conteoFToI();   // Cuenta hacia atrás
*/ 
