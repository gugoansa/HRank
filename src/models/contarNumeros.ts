
export class contarNumeros{

    private readonly numeroI: number =0;
    private readonly numeroF: number =0;


    constructor(numeroI: number, numeroF: number ){
        this.numeroI=numeroI;
        this.numeroF=numeroF;

        // Llamada correcta ddesde el constructor
        this.conteoIToF();
        this.conteoFToI();
    };

    //contar de inicio a fin
    public async conteoIToF() {
        for(let i=this.numeroI; i<=this.numeroF; i++){
            console.log(i);
        };
        console.log(`El rango va desde ${this.numeroI} hasta ${this.numeroF}`)
    }

    //contar al reves
    public conteoFToI() {
        for (let i = this.numeroF; i >= this.numeroI; i--) {
            console.log(i);
        }
        console.log(`El rango va desde ${this.numeroF} hasta ${this.numeroI}`);
    }


//otra forma de llamar desde la clase
/*    public iniciarConteo() {
    this.conteoIToF();
} */   

    
};

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