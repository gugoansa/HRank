// Archivo: src/tests/login.spec.ts (Simulación de un archivo de prueba)
// 1. Importa la clase LoginPage que acabas de crear
import { LoginPage } from "../pages/LoginPage";
/**
 * Esta función simula un test real de Playwright.
 * En Playwright, 'page' es inyectada automáticamente.
 */
async function testLoginFlow(page) {
    console.log("--- 1. INICIANDO TEST: Login de Usuario ---");
    // 🌟 LÍNEA CLAVE 🌟
    // Creamos una herramienta (objeto) llamada 'loginPage' usando el manual (Clase)
    const loginPage = new LoginPage(page);
    // 2. Ejecutar las acciones (Llamamos al método público)
    console.log("Paso 1: Ingresando credenciales...");
    await loginPage.login("standard_user", "secret_sauce");
    // 3. Simulación de una verificación
    console.log("Paso 2: Verificando la navegación exitosa...");
    // await expect(page).toHaveURL(/inventory.html/); // En un test real
    console.log("✅ Simulación exitosa: Inicio de sesión completado usando POM.");
}
// Nota: En un entorno de Playwright real, testLoginFlow se ejecutaría dentro de un 'test()'.
/* //real estructura de UN TEST
// Archivo: src/tests/login.spec.ts (Real)

import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// 🎯 Aquí se le da el nombre y se registra el test 🎯
test('Verificar inicio de sesión exitoso con credenciales estándar', async ({ page }) => {
    
    // 1. Instanciar la clase LoginPage
    // El 'page' se obtiene automáticamente del contexto de Playwright.
    const loginPage = new LoginPage(page);
    
    // 2. Acciones del POM
    await loginPage.login("standard_user", "secret_sauce");
    
    // 3. Verificación (Assertion)
    // El test se valida al confirmar que la URL cambió correctamente.
    await expect(page).toHaveURL(/inventory.html/);
});
*/ 
