// Archivo: src/tests/procesarCompra.ts

// 1. Importa la estructura de datos
import { Producto } from '../models/producto.model';
// 2. Importa los datos (el Array)
import { carritoDeCompras } from '../data/data';
//import { carritoDeCompras } from '../data/data'; 

async function procesarCompra(productos: Producto[]): Promise<void> {
    let subTotal = 0;

    // 🌟 Tu código aquí: Iterar sobre el array y sumar al subTotal
    for(let i = 0; i < productos.length; i++){
        // 1. Obtenemos el costo de la línea actual:
        const costoLinea = productos[i].precio * productos[i].cantidad;
        
        // 2. Simulamos la acción (opcional, pero ayuda a entender)
        console.log(`Simulando: Agregando ${productos[i].cantidad} unidad(es) de "${productos[i].nombre}". Costo: $${costoLinea.toFixed(2)}`);
        
        // 3. ACUMULAMOS el costo al subTotal:
        subTotal = subTotal + costoLinea; // o subTotal += costoLinea;
    }
        
    console.log('---------------------------------');
    console.log(`✅ Automatización terminada. El subtotal es: $${subTotal.toFixed(2)}`);
}

// Ejecutar la función
procesarCompra(carritoDeCompras);