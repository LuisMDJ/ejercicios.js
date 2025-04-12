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
    
    

//ejercicio 6
const nums = [12, 35, 1, 10, 34, 1];

let max = -Infinity;
let segundo = -Infinity;

for (let i = 0; i < nums.length; i++) {
const actual = nums[i];

if (actual > max) {
segundo = max;
max = actual;
} else if (actual > segundo && actual < max) {
segundo = actual;
}
}

console.log(segundo);



//ejercicio 7
const str = "nombre:Ivan, edad: 23, ciudad:CDMX";

const partes = str.split(',');
const resultado = {};

for (let i = 0; i < partes.length; i++) {
const entrada = partes[i].split(':');
const clave = entrada[0].trim();
const valor = entrada[1].trim();
resultado[clave] = isNaN(valor) ? valor : Number(valor);
}

console.log(resultado);


//ejercicio 8
const mezcla = [120, "Hello", false, 42, "", undefined, "JS"];

const filtrado = [];

for (let i = 0; i < mezcla.length; i++) {
if (mezcla[i]) {
filtrado.push(mezcla[i]);
}
}

console.log(filtrado);



//ejercicio 9
const usuarios = [
{ nombre: "Ana", edad: 17 },
{ nombre: "Luis", edad: 22 },
{ nombre: "Carlos", edad: 15 },
{ nombre: "Lucía", edad: 30 }
];

const mayores = [];

for (let i = 0; i < usuarios.length; i++) {
if (usuarios[i].edad >= 18) {
mayores.push(usuarios[i]);
}
}

console.log(mayores);

