// For in -> lê os indices ou chaves do objeto
//                0       1       2
// const frutas = ['Pêra', 'Maçã', 'Uva'];
const pessoa = {
    nome: 'Wendreo', 
    sobrenome: 'Oliveira',
    idade: 30
};

for(let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }

// for (let i = 0; i < frutas.length; i++) {
//    console.log(frutas[i]);
//}