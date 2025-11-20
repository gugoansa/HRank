import { test, expect } from '@playwright/test';
import { FramePage } from '../../../src/pages/FramePage';



test.describe('Módulo II: Interacción con Frames (iframe)', () => {
    
    // 2. Define el test
    let frameAction : FramePage;
    test.beforeEach(async ({page}) => {
        frameAction  = new FramePage(page);
    });
    
    
    test('Debe navegar, ingresar texto en el iframe y verificarlo', async ({ page }) => {
        // 3. Inicializa la clase FramePage
        // ...

        const expectedText = "!!! You did it MASTER!!!";

        await frameAction.mapsToIFramePage();
        await frameAction.enterTextIntoIFrame(expectedText);
        const actualText = await frameAction.getIFrameTextContent();
        await expect(actualText).toContain(expectedText);
        await page.waitForTimeout(5000); // 5000 ms = 5 segundos

    });

/*
    // tests/frames.spec.ts
    test('Debe navegar, ingresar texto en el iframe y verificarlo', async ({ page }) => {
        // 1. Definición del dato de prueba
        const expectedText = "!!! You did it MASTER!!!";
        // 2. Acciones: Navegar y Escribir
        await frameAction.mapsToIFramePage();
        console.log(`> Escribiendo texto: "${expectedText}" en el iframe.`);
        await frameAction.enterTextIntoIFrame(expectedText);
        // 3. Obtener el texto actual para la verificación
        const actualText = await frameAction.getIFrameTextContent();
        // 4. ASERCIÓN: Verificar que el texto ingresado se encuentre en el contenido del iframe
        await expect(actualText).toContain(expectedText);
        console.log(`✅ Verificación exitosa: El contenido del iframe contiene el texto esperado.`);
    });
*/
});

