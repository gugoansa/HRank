// Archivo simulado: src/tests/table.spec.ts (Uso de la Matriz)

import { TablePage } from "../../pages/TablePage";
import { Page } from "@playwright/test"; //Recuerda cómo definiste el constructor de TablePage: constructor(private readonly page: Page) { /* ... */ }
/* CON RELACION AL IMPORT de Page:
TypeScript es Estricto: Cuando llamas a new TablePage(page);, TypeScript verifica si el argumento que le pasas (page) coincide con el tipo que el constructor espera (Page).
Verificación Indirecta: Aunque tú declaraste el parámetro del test simulado como page: any, el código de TS todavía necesita saber qué es Page para verificar que es un tipo válido para el constructor. Si no importas Page, el compilador de TS no puede encontrar la definición de Page y te daría un error en el archivo de prueba, diciendo: "No se encuentra el nombre 'Page'" (a menos que uses un tipo de configuración global muy flexible, lo cual no es recomendable).
El sombreado que ves en tu editor simplemente indica que la variable Page (el tipo) no se utiliza directamente en el cuerpo de la función (solo se usa en el tipo del parámetro), pero la importación sigue siendo estructuralmente requerida para que el resto del código compile correctamente.
*/

// Suponemos que Playwright inyecta el objeto 'page' en la prueba

// Función simulada que representa el cuerpo del test() de Playwright
async function executeTableTest(page: any) {
        // 1. Instanciar la clase POM
        const tablePage = new TablePage(page);

        // 2. Navegar a la página de la tabla
        await page.goto("https://www.w3schools.com/html/html_tables.asp");

        // 3. Obtener la Matriz de datos de la tabla (Aquí se llama a tu método)
        const tableData: string[][] = await tablePage.getTableData();

        console.log("--- RESULTADOS DE LA MATRIZ ---");
        console.log(`Filas extraídas: ${tableData.length}`);

        // 🌟 TU CÓDIGO COMPLETADO: Verificar el contenido 🌟

        // 4. VERIFICACIÓN 1: Verificar el primer elemento de la primera fila.
        // tableData[fila 0][columna 0]
        if (tableData[0][0] === "Alfreds Futterkiste") { 
            console.log("✅ V1: Primer elemento verificado correctamente.");
        } else {
            console.log(
            `❌ V1: Error. Se esperaba 'Alfreds Futterkiste', se obtuvo: ${tableData[0][0]}`
            );
        }

        // 5. VERIFICACIÓN 2: Usar un bucle FOR...OF para iterar y verificar la segunda columna (Contacto).

        // El bucle for...of itera sobre cada 'fila' que es un Array de strings.
        // 'row' es el array de celdas de una fila (ej: ['Alfreds Futterkiste', 'Maria Anders', 'Germany'])
        for (const row of tableData) {                  // row = la fila actual, ejemplo: ['Alfreds...', 'Maria...', 'Germany']
            // Usamos 'const row' para claridad
            // La columna de Contacto es la Columna 1 (índice [1])
            const contactName = row[1];                 // Accedes a la Columna 1 de ESA fila
            // Si la fila actual es la primera, contactName = 'Maria Anders'.
            // Si la fila actual es la segunda, contactName = 'Francisco Chang'.

            // Simulación de verificación: Asegurar que el campo Contacto no está vacío. - verificas la condición para ese valor:
            if (contactName.length === 0) { //... (Si está vacío, imprime un error) ...
            console.log(`❌ V2: Error. Contacto vacío encontrado en la fila: ${row}`);
            // En un test real, harías: expect(contactName).not.toBe('');
            }
        }
        console.log("✅ V2: Se verificó que ninguna celda de Contacto está vacía.");

        // 6. VERIFICACIÓN 3: Verificar el último elemento. (Última fila, columna 2 - País: Mexico)

        // Obtener la última fila (el índice es la longitud total menos 1)
        const lastRowIndex = tableData.length - 1;

        // El país (Mexico) es la columna 2 (índice [2])
        const lastCountry = tableData[lastRowIndex][2];

        if (lastCountry === "Mexico") {
            console.log("✅ V3: Último país verificado correctamente.");
        } else {
            console.log(
            `❌ V3: Error. Se esperaba 'Mexico', se obtuvo: ${lastCountry}`
            );
        }
}