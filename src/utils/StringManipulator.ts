// src/utils/StringManipulator.ts

export class StringManipulator {

    /**
     * Extrae solo los caracteres numéricos de una cadena de texto.
     * @param text La cadena de texto de entrada.
     * @returns Una cadena que contiene solo los números.
     */

    public static extractOnlyNumbers(text: string): string {
        // Implementación de RegEx para números
        // Pista: usa el método .match() o .replace() y la expresión regular para dígitos [\d]
        // ... tu código aquí ...
        return text.replace(/[^0-9]/g, '');
    }
    // Aquí irán los siguientes métodos de extracción (vocales, mayúsculas, etc.)

    public static extractOnlyVowels(textV: string): string {
        return textV.match(/[aeiou]/gi)?.join('') || '';
    }

//    /[bcdfghjklmnpqrstvwxyz]/gi
    public static extractOnlyConsonants(textC: string): string[] {
        //return textC.match(/[^aeiou]/gi) || []; // este actuaria perfecto pero me devolveria numeros caracteres especiales y espacios, asi que
        return textC.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
    }

    public static extractOnlyMinusc(textM: string): string {
        //return textM.match(/[:lower:]/g)?.join('') || ''; // se usan en POXIS en RUBY
        return textM.match(/[a-z]/g)?.join('') || '';
    }    

    public static extractOnlyMayusc(textMa: string): string {
//        return textMa.match(/[:upper:]/g)?.join('') || ''; //poxis en RUBY
        return textMa.match(/[A-Z]/g)?.join('') || '';
    }    

    public static convertToMayusc(textCM: string): string {
        return textCM.toUpperCase();
    }    
    public static convertToMinusc(textCm: string): string {
        return textCm.toLowerCase();
    }    
    //Convertir SOLO la PRIMERA letra a mayúscula - capitalizada
    public static convertFirstToMayusc(textFM: string): string {
        return textFM.charAt(0).toUpperCase() + textFM.slice(1).toLowerCase();
    }    
    //Convertir PRIMERA letra de CADA PALABRA a mayúscula
    public static convertFirstEACHToMayusc(textFMe: string): string {
        return textFMe.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
    }    
    //Intercambiar mayúsculas ↔ minúsculas -swap
    public static convertSwap(textS: string): string {
        return textS.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
    }    
    //Poner SOLO la última letra en mayúscula
    public static lastUpper(textlu: string): string {
    if (!textlu) return "";
    return textlu.slice(0, -1) + textlu.slice(-1).toUpperCase();
}




}

/*
console.log(StringManipulator.extractOnlyNumbers("Hola Mundo 123 ! 7]"));
console.log(StringManipulator.extractOnlyVowels("Hola Mundo 123 ! ]"));
console.log(StringManipulator.extractOnlyConsonants("Hola Mundo 123 ! ]"));
console.log(StringManipulator.extractOnlyMinusc("Hola Mundo 123 ! ]"));
console.log(StringManipulator.extractOnlyMayusc("Hola Mundo 123 ! ]"));
console.log("Hola Mundo 123 !Aaa ]".match(/[a]+/gi)?.join('') || '');
console.log("Hola M@un@d%$^o 12♦♥3 !Aaa".match(/[^a-zA-Z0-9\s]/gi)?.join('') || ''); //\s = espacios, tabs, saltos de línea
console.log("Hola Mundo 123 !Aaa ]".replace(/[HolaMhundo]/gi,''));


console.log("\n","\n"); // ["456", "789"] 
const texto = "Factura 456 y código 789";
// encontrar todos los números
const numeros = texto.match(/\d+/g); //✔️ Devuelve lo que encontró.✔️ Regresa un array si usas /g.
const texto2 ='hola123adios'

const remplazos = texto2.replace(/\d+/g, "");//✔️ Reemplaza lo que coincida con la regex.
const search = "hola123".search(/\d/) //✔️ Devuelve la posición donde encontró la primera coincidencia. ✔️ NO devuelve el texto, solo el número.
*/

//const split = "uno,dos; tres".split( /[,;]\s*/ ); //✔️ Corta el texto usando la regex como separador. 

 
/*
console.log(numeros, "\n",remplazos,"\n", search,"\n", split); // ["456", "789"] 
*/