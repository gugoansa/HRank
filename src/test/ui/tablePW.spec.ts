// Archivo: src/tests/table.spec.ts (Estructura Real de Playwright)

import { test, expect, type Page } from '@playwright/test'; // Importamos 'test', 'expect' y el tipo 'Page'
import { TablePage } from '../../pages/TablePage'; // Tu clase POM

// Definición de la prueba: Se le da un nombre y Playwright inyecta el objeto 'page'
test('Verify table data integrity and content', async ({ page }) => {
    
    // 1. Instanciar la Clase POM
    const tablePage = new TablePage(page);

    // 2. Navegar y obtener la Matriz de datos
    await page.goto('https://www.w3schools.com/html/html_tables.asp');
    
    // Llamada al método asíncrono que extrae la matriz
    const tableData: string[][] = await tablePage.getTableData();
    
    // --- VERIFICACIONES (ASERCIONES) ---
    
    // 3. Verificación del número de filas extraídas
    expect(tableData.length).toBe(6);
    
    // 4. VERIFICACIÓN 1: Primer elemento de la primera fila (Índice [0][0])
    expect(tableData[0][0], 'The first company name should be Alfreds Futterkiste').toBe('Alfreds Futterkiste');
    
    // 5. VERIFICACIÓN 2: Iteración y verificación de la columna Contacto (Índice [1])
    for (const row of tableData) {
        const contactName = row[1];
        // Asegura que el nombre de contacto no esté vacío en ninguna fila
        expect(contactName.length, `Contact name in row ${row[0]} must not be empty`).toBeGreaterThan(0);
    }
    
    // 6. VERIFICACIÓN 3: Último País (Última fila, columna 2 - País)
    const lastRowIndex = tableData.length - 1; 
    
    // Verifica que el país de la última fila sea 'Italy' (el último país en esa tabla de ejemplo).
    expect(tableData[lastRowIndex][2], 'The last country should be Italy').toBe('Italy'); 
    
});