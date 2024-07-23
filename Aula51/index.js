// return
//retorna um valor
// Termina a função
//function soma(a, b){
//    return a + b;
//}
//
//function soma(a, b) {
//    console.log(a + b);
//}
//
//soma2 (5, 2);

function criarMultiplicador(criarMultiplicador){
    //multiplicador
    return function(n) {
        return n * criarMultiplicador;
    };
}

const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);
const quadriplica = criarMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));