// Archivo simulado: src/tests/table.spec.ts (Uso de la Matriz)

import { TablePage } from './src/pages/TablePage';
// Suponemos que Playwright inyecta el objeto 'page' en la prueba

// Función simulada que representa el cuerpo del test() de Playwright
async function executeTableTest(page: any) {
    
    // 1. Instanciar la clase POM
    const tablePage = new TablePage(page);

    // 2. Navegar a la página de la tabla
    await page.goto('https://www.w3schools.com/html/html_tables.asp');
    
    // 3. Obtener la Matriz de datos de la tabla (Aquí se llama a tu método)
    const tableData: string[][] = await tablePage.getTableData();
    
    console.log("--- RESULTADOS DE LA MATRIZ ---");
    console.log(`Filas extraídas: ${tableData.length}`);

    // 🌟 TU CÓDIGO AQUÍ: Verificar el contenido 🌟
    
    // 4. VERIFICACIÓN 1: Verificar el primer elemento de la primera fila.
    // La fila 0, columna 0 (Compañía) debe ser 'Alfreds Futterkiste'.
    // Si tableData[0][0] es diferente, la prueba fallaría.
    
    // 5. VERIFICACIÓN 2: Usar un bucle FOR...OF para iterar y verificar la segunda columna (Contacto).
    
    // 6. VERIFICACIÓN 3: Verificar el último elemento. (Última fila, columna 2 - País: Mexico)
}