// Archivo: src/pages/TablePage.ts
// https://www.w3schools.com/html/html_tables.asp
export class TablePage {
    //usamos el constructor para usare las caracteridticas de page
    constructor(page) {
        this.page = page;
        this.tableRows = this.page.locator('#customers tr:not(:first-child)'); //#customers.ws-table-all
    }
    ;
    async getTableData() {
        //En esta variable vamos a guardar la matriz
        const results = [];
        const rowCount = await this.tableRows.count();
        console.log(`Simulacion: Playwright encontro ${rowCount} filas de objetos`);
        for (let i = 0; i < rowCount; i++) {
            // 1. Obtener el localizador de la fila 'i'
            const rowLocator = this.tableRows.nth(i); //nth(i) devuelve un nuevo Locator que apunta al i-ésimo elemento de un conjunto de elementos localizados previamente.
            // 2. Obtener el Array de textos de todas las celdas (td) dentro de esa fila
            // ESTE paso usa la magia de Playwright para darnos el Array [string, string, string]
            const cellData = await rowLocator.locator("td").allTextContents();
            //.allTextContents(); //Devuelve un array con los textos de todos los elementos encontrados, en el orden en que aparecen en la página.
            //.locator("td") //Selecciona todos los elementos <td> (todas las celdas de tabla) que existan dentro del contexto donde se esté usando.
            // locator("td").innerText() //String con el texto visible del primer elemento (o todos si usas allInnerTexts()) //Solo devuelve texto visible, ignora display:none.
            // locator(...).textContent() //String con el contenido de texto de un elemento, incluye texto oculto //Puede incluir espacios o saltos de línea que no se ven en pantalla.
            /*EXPLICACION: rowLocator.locator("td").allTextContents() → obtiene todas las celdas de una fila y devuelve sus textos como un array.
            Se hace de esta forma porque es asíncrono, seguro, y directo, evitando errores si la página tiene muchas tablas o elementos dinámicos.*/
            // 3. Empujar el Array de celdas a la Matriz principal (results)
            results.push(cellData); // ✅ Así es como se llena la Matriz
            console.log(`Fila ${i} extraída: ${cellData}`);
        }
        return results;
    }
    ;
}
;
