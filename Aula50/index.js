// argumentos que sustenta todos os argumentos enviados 
//function funcao(a, b, c, d, e, f) {
//console.log(a, b, c, d, e, f);


  //  let total = 0;                    // Variavel total = 0
 //   for (let argumento of arguments) { // se(variavel argumento de arguments) 
//        total += argumento;
//    }

//    console.log(total);

//funcao(1, 2, 3, 4, 5, 6, 7);
//funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Wendreo');

const conta = function(operador, acumulador, ...numero) {
  for(let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
  }

  console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);