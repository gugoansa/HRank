/* 🚀 Comencemos: Módulo I, Parte 1 (Login Iterado)
Comenzaremos con el primer paso: la clase POM para el login.

Paso 1: Definición de la Clase POM de Login
Tu Tarea: Escribe la clase LoginPage completa para https://www.saucedemo.com/, incluyendo el constructor, l
os localizadores (Usuario, Contraseña, Botón Login) y un método login() simple.
Completa el código de la clase LoginPage.ts con los localizadores y el método login() para la página saucedemo.com. 👇
*/

import { Locator, Page } from '@playwright/test';

export class LoginPage{

    constructor(private readonly page : Page){

    }
    // Localizadores (ID son los más estables)
    private readonly userNameField: Locator = this.page.locator('#user-name');
    private readonly passwordField: Locator = this.page.locator('#password');
    private readonly loginButton: Locator = this.page.locator('#login-button');
    // Localizador del mensaje de error, listo para la verificación
    public readonly errorMessage: Locator = this.page.locator('[data-test="error"]')
    public readonly successMessage: Locator = this.page.locator('[data-test="shopping-cart-link"]')


    public async login(userName:string, password:string): Promise<void>{
        // Rellenar campos y hacer clic
        await this.userNameField.fill(userName);
        //await this.page.fill('#user-name', userName);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    };


};