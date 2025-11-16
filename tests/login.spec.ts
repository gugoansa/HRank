/*
Módulo I, Parte 3: Iteración de Tests (Test Data-Driven)
Ahora que tenemos los datos listos, vamos a iterar sobre ellos. Playwright tiene una función poderosa llamada test.describe.configure() o simplemente el 
uso de forEach dentro de un bucle test().

Usaremos loginTestData.forEach para generar dinámicamente una prueba separada para cada usuario.

Paso 3: Implementación del Test Iterado
Necesitas importar la clase LoginPage, los datos loginTestData y la interfaz.

Tu Tarea: Completa el archivo login.spec.ts usando un bucle forEach y lógica condicional (un if/else o switch) dentro de cada test para verificar el 
resultado esperado (expectedOutcome).
Completa la lógica condicional (if y else) dentro del bucle forEach en el archivo login.spec.ts. 👇
*/

import { test, expect } from '@playwright/test'; // Mano de PlayWright
import { LoginPage } from '../src/pages/LoginPage'; //Clase POM
import { loginTestData } from '../src/data/loginData'; //Datos par las pruebas
import { interfazLogin } from '../src/models/InterfazLogin'; //Interfaz


test.describe('Mi suite de pruebas - Login Iterativo', () => {
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    test.beforeEach(async ({ page }) => {
        // Navegar a la página inicial antes de cada test
        await page.goto('https://www.saucedemo.com');
    });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    test('login Test',async({page}) =>{
        console.log("Solo como refetencia del test - cascaron")
    });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
});