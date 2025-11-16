export class LoginPage {
    //Crea el constructor dejando el objeto como privado y solo lectura - FORMA CORTA
    // Propiedad page (Inicializada por constructor)
    constructor(page) {
        this.page = page;
        //Propiedades - Localizadores Fijos (readonly)    private readonly usernameField: string = '#user-name';
        this.usernameField = '#user-name';
        this.passwordField = '#password';
        this.loginButton = '#login-button';
    }
    // 🌟 TU CÓDIGO AQUÍ: El método de acción 'login()' 🌟
    async login(username, password) {
        // public es opcional (es el valor por defecto)
        // Promise<void> es el tipo de retorno recomendado para TS
        // 1. Escribir el nombre de usuario
        await this.page.fill(this.usernameField, username); // Llenar campo de usuario
        // 2. Escribir la contraseña
        await this.page.fill(this.passwordField, password); // Llenar campo de contraseña
        // 3. Hacer clic en el botón de Login
        await this.page.click(this.loginButton); // Clic en el botón
        // El método termina cuando el clic se ha realizado y la página empieza a cargar.
    }
}
;
