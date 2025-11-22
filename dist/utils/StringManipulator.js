// src/utils/StringManipulator.ts
export class StringManipulator {
    /**
     * Extrae solo los caracteres numéricos de una cadena de texto.
     * @param text La cadena de texto de entrada.
     * @returns Una cadena que contiene solo los números.
     */
    static extractOnlyNumbers(text) {
        // Implementación de RegEx para números
        // Pista: usa el método .match() o .replace() y la expresión regular para dígitos [\d]
        // ... tu código aquí ...
        return ('');
    }
}
const texto = "Factura 456 y código 789";
// encontrar todos los números
const numeros = texto.match(/\d+/g);
console.log(numeros); // ["456", "789"]
