//ejercicio 1
const numeros = [5, 2, 9, 1, 5, 6];

numeros.sort((a, b) => a - b);

console.log(numeros);



//ejercicio 2
function invertirArreglo(array) {
    const resultado = [];
    for (let i = array.length - 1; i >= 0; i--) {
        resultado.push(array[i]);
    }
    return resultado;
}

const original = [14, 23, 32, 24, 45];
const invertido = invertirArreglo(original);
console.log(invertido);



//ejercicio 3
function eliminarDuplicados(arr) {
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
    if (!resultado.includes(arr[i])) {
    resultado.push(arr[i]);
    }
    }
    return resultado;
    }
    
    const duplicados = [1, 2, 2, 3, 4, 4, 5];
    const sinDuplicados = eliminarDuplicados(duplicados);
    
    console.log(sinDuplicados);
    
    
    
    //ejercicio 4
    const valores = [12, 5, 8, 130, 44];
    
    let mayor = valores[0];
    let menor = valores[0];
    
    for (let i = 1; i < valores.length; i++) {
    const actual = valores[i];
    
    if (actual > mayor) {
    mayor = actual;
    }
    
    if (actual < menor) {
    menor = actual;
    }
    }
    
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
    
    

    //ejercicio 5
    function esPalindromo(texto) {
    const limpio = texto.replace(/\s/g, '').toLowerCase();
    let invertido = '';
    
    for (let i = limpio.length - 1; i >= 0; i--) {
    invertido += limpio[i];
    }
    
    return limpio === invertido;
    }
    
    const palabra = "anita lava la tina";
    console.log(esPalindromo(palabra)); 
    
    
