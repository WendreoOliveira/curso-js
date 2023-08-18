// try -- tentar 
// catch -- recebe o erro 
// não mostrar o erro completo para seu usuario final

// try {
//     console.log(naoExisto);
// } catch(err) {
//     console.log('nãoExisto não existe.');
//     console.log(err);
// }

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number' ) {
        throw new ReferenceError('x e y precisam ser números.');
    }

    return x + y;
}

try {
console.log(soma(1, 2));
console.log(soma('1', 2));
} catch(error) {
    //console.log(error);
    console.log('alguma coisa mais amigável pro usuário.');
}