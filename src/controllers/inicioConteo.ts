import { contarNumeros } from "../models/contarnumeros";

const contador = new contarNumeros(1, 100);

contador.conteoIToF();   // Cuenta hacia adelante
contador.conteoFToI();   // Cuenta hacia atrás
