// Archivo: src/tests/procesarCompra.ts
// 2. Importa los datos (el Array)
import { carritoDeCompras } from '../data/data.js';
//import { carritoDeCompras } from '../data/data'; 
async function procesarCompra(productos) {
    let subTotal = 0;
    // 🌟 Tu código aquí: Iterar sobre el array y sumar al subTotal
    for (let i = 0; i < productos.length; i++) {
        // 1. Obtenemos el costo de la línea actual:
        const costoLinea = productos[i].precio * productos[i].cantidad;
        // 2. Simulamos la acción (opcional, pero ayuda a entender)
        console.log(`Simulando: Agregando ${productos[i].cantidad} unidad(es) de "${productos[i].nombre}". Costo: $${costoLinea.toFixed(2)}`);
        // 3. ACUMULAMOS el costo al subTotal:
        subTotal = subTotal + costoLinea; // o subTotal += costoLinea;
    }
    console.log('---------------------------------');
    console.log(`✅ Automatización terminada 1ErFOR. El subtotal es: $${subTotal.toFixed(2)}`);
    subTotal = 0;
    console.log("***************************");
    console.log("Reinicializamos la variable, otra forma de hacer el for para arrays");
    console.log("***************************");
    for (const productoActual of productos) {
        const costoLinea = productoActual.precio * productoActual.cantidad;
        subTotal += costoLinea;
        console.log(subTotal);
    }
    console.log('---------------------------------');
    console.log(`✅ Automatización terminada 2DoFOR. El subtotal es: $${subTotal.toFixed(2)}`);
}
// Ejecutar la función
procesarCompra(carritoDeCompras);
