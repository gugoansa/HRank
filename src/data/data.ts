// Archivo: src/data/data.ts

// 1. IMPORTACIÓN CORRECTA: Usamos llaves {} para importar la interface Producto
import { Producto } from '../models/producto.model'; 
// (Asumiendo que la ruta es correcta, esto trae la definición de Producto)

// 2. DECLARACIÓN Y EXPORTACIÓN CORRECTA DEL ARRAY:
// Usamos 'export const' y asignamos el array [] directamente.
export const carritoDeCompras: Producto[] = [
    // Usamos : (dos puntos) para asignar valores dentro de los objetos {}
    { nombre: 'lila', precio: 123, cantidad: 1 },
    { nombre: 'lili', precio: 456, cantidad: 2 },
    { nombre: 'lulu', precio: 789, cantidad: 3 }
];