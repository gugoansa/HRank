// Definimos la estructura (interface) para mayor claridad de TypeScript
export interface interfazLogin{
    username: string;
    password: string;
    description: string;
    expectedOutcome: 'SUCCESS' | 'FAILURE'; //(literal union type ➡️ Es un tipo de unión donde el valor solo puede ser exactamente 'SUCCESS' o 'FAILURE'. En otras palabras, expectedOutcome pertenece a un tipo literal restringido a esas dos cadenas.
    expectedUrl?: string; // Solo para éxito OPCIONAL
    expectedErrorMessage?: string; // Solo para fallo OPCIONAL
 }