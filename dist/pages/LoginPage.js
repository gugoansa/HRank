/* 🚀 Comencemos: Módulo I, Parte 1 (Login Iterado)
Comenzaremos con el primer paso: la clase POM para el login.

Paso 1: Definición de la Clase POM de Login
Tu Tarea: Escribe la clase LoginPage completa para https://www.saucedemo.com/, incluyendo el constructor, l
os localizadores (Usuario, Contraseña, Botón Login) y un método login() simple.
Completa el código de la clase LoginPage.ts con los localizadores y el método login() para la página saucedemo.com. 👇
*/
export class LoginPage {
    constructor(page) {
        this.page = page;
        // Localizadores (ID son los más estables)
        this.userNameField = this.page.locator('#user-name');
        this.passwordField = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');
        // Localizador del mensaje de error, listo para la verificación
        this.errorMessage = this.page.locator('[data-test="error"]');
        this.successMessage = this.page.locator('[data-test="shopping-cart-link"]');
    }
    async login(userName, password) {
        // Rellenar campos y hacer clic
        await this.userNameField.fill(userName);
        //await this.page.fill('#user-name', userName);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
    ;
}
;
