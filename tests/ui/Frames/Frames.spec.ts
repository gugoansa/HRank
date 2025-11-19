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
        

    });

});

