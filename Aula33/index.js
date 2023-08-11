const pessoa = {
    nome: 'Wendreo', 
    sobrenome: 'Oliveira',
    idade: 26,
    endereço: {
        rua: 'José Bís',
        numero: 303
    }
};

//Atribuição via desestruturação
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome);