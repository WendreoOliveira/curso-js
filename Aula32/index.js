// let a = 'A'; //B
// let b = 'B'; //C
// let c = 'C'; //A

// const letras = [b, c, a];
// [a, b, c] = letras;

// consolelog(a, b, c);

// ... rest, ... spread
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // valores não é indice
// const [primeiroNumero, segundoNumero, ...resto ] = numeros;
// console.log(primeiroNumero, segundoNumero);

//                   0          1          2
//                0  1  2    0  1  2    0  1  2 
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);