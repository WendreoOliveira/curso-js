/* 
Primitivos - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function - Passados por referência
*/
//          0123

/*let a = 'A';
let b = a; // Cópia

console.log(a,b);

a = 'Outra coisa';*/

/* 
let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);
*/
const a = {
    nome: 'wendreo', sobrenome: 'Oliveira'
};
const b = a;
a.nome = 'João';
console.log(a);
console.log(b);