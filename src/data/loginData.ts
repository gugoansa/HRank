import { interfazLogin } from "../models/InterfazLogin";

export const loginTestData: interfazLogin[] = [
    // Usuario Válido (SUCCESS)
    {
        username: 'standard_user',
        password: 'secret_sauce',
        description: 'Login Exitoso con usuario estándar', 
        expectedOutcome: 'SUCCESS', 
        expectedUrl: 'https://www.saucedemo.com/inventory.html'
    },
    // Usuario Bloqueado (FAILURE: El error debe ser visible)
    {
        username: 'locked_out_user',
        password: 'secret_sauce',
        description: 'Verificación de usuario bloqueado (Locked Out)', 
        expectedOutcome: 'FAILURE', 
        expectedErrorMessage: 'Epic sadface: Sorry, this user has been locked out.' // Mensaje de error real
    },
    // Usuario Incorrecto/No Registrado (FAILURE: El error debe ser visible)
    {
        username: 'invalid_user', 
        password: 'invalid_password', 
        description: 'Verificación de credenciales inválidas', 
        expectedOutcome: 'FAILURE', 
        expectedErrorMessage: 'Epic sadface: Username and password do not match any user in this service' // Mensaje de error real
    }
];