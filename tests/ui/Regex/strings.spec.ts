import { test, expect } from '@playwright/test';
import { StringManipulator } from '../../../src/utils/StringManipulator';

test.describe('Regex Validations', () => {

    // Definimos la cadena de texto base que usaremos para todas las pruebas
    const baseText = "Hola Mundo, la Factura #1234 tiene un valor de $98.76. CHAO.";

/*
    let Manipulador : StringManipulator;
    test.beforeEach(async ({page}): Promise <void> => {
       Manipulador = new StringManipulator();
    });
*/

    test('Validations letras numeros caracteres especiales', async ({page}) : Promise<void> => {
        // El texto base es: "Hola Mundo, la Factura #1234 tiene un valor de $98.76. CHAO."
        const expectedNumbers = "12349876";
        const actualNumbers = StringManipulator.extractOnlyNumbers(baseText);
        // Verificación: El resultado actual debe ser EXCTAMENTE igual al esperado.
        expect(actualNumbers).toBe(expectedNumbers);
        console.log(`✅ Números extraídos: ${actualNumbers}`);


        // 1. ¿Cuál es el resultado esperado de las mayúsculas?
        const expectedMayusculas = "HMFCHAO"; // H, M, F, C, H, A, O
        const actualMayusculas = StringManipulator.extractOnlyMayusc(baseText);
        // 2. Aserción
        expect(actualMayusculas).toBe(expectedMayusculas);
        console.log(`✅ Mayúsculas extraídas: ${actualMayusculas}`);

        
        await console.log(StringManipulator.extractOnlyMayusc(baseText));
        await console.log(StringManipulator.extractOnlyConsonants(baseText));
        await console.log(StringManipulator.extractOnlyVowels(baseText));
        await console.log(StringManipulator.extractOnlyNumbers(baseText));
        await console.log(StringManipulator.lastUpper(baseText));
    });

    // tests/strings.spec.ts (Tercer test - COMPLETADO)

    test('Debe extraer solo las VOCALES (incluyendo mayúsculas y minúsculas)', () => {
        
        // Base: "Hola Mundo, la Factura #1234 tiene un valor de $98.76. CHAO."
        const expectedVowels = "oauooaaueeauaeo"; 
        const actualVowels = StringManipulator.extractOnlyVowels(baseText);
        
        expect(actualVowels).toBe(expectedVowels); // ¡Perfecto!
        console.log(`✅ Vocales extraídas: ${actualVowels}`);
    });

/*
    // tests/strings.spec.ts (Sexto y último test para este módulo)
    test('Debe convertir la cadena de texto a mayúsculas y minúsculas', () => {
        
        // Cadena de prueba con mayúsculas, minúsculas y caracteres especiales.
        const mixedCaseText = "TeStInG cOn PlAyWrIgHt $123.";
        
        // Resultados esperados
        const expectedUpper = "TESTING CON PLAYWRIGHT $123.";
        const expectedLower = "testing con playwright $123.";

        // Aserción 1: Mayúsculas
        const actualUpper = StringManipulator.convertToUpperCase(mixedCaseText);
        expect(actualUpper).toBe(expectedUpper);
        console.log(`✅ Convertido a MAYÚSCULAS: ${actualUpper}`);
        
        // Aserción 2: Minúsculas
        const actualLower = StringManipulator.convertToLowerCase(mixedCaseText);
        // ... tu código aquí (Aserción 2) ...
        console.log(`✅ Convertido a MINÚSCULAS: ${actualLower}`);
    });
*/

});