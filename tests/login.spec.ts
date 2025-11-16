import { test, expect } from '@playwright/test';
import { loginTestData } from '../data/loginData'; 
import { interfazLogin } from '../src/models/InterfazLogin';
import { LoginPage } from '../src/pages/LoginPage';
import { interfazLogin } from '../src/models/InterfazLogin';

test.describe('Mi suite de pruebas - Login Iterativo', () => {

    test.beforeEach(async ({ page }) => {
        // Navegar a la página inicial antes de cada test
        await page.goto('https://www.saucedemo.com');
    });

    test('login Test',async({page}) =>{

    });
    /*
    // Usamos forEach para generar una prueba por cada elemento en el array de datos
    loginTestData.forEach((data: interfazLogin) => {
        
        // Define dinámicamente el nombre de cada test usando la descripción
        test(`TC-LOGIN-${data.expectedOutcome}: ${data.description}`, async ({ page }) => {
            
            const loginPage = new LoginPage(page);
            
            // 1. Ejecutar la acción de login
            await loginPage.login(data.username, data.password);

            // 2. Lógica de Verificación condicional
            if (data.expectedOutcome === 'SUCCESS') {
                // Verificar éxito: URL
                // ...
            } else {
                // Verificar fallo: Mensaje de error
                // ...
            }
        });
    });
    */

});