// try {
//    // É executa quando não há erros
//    console.log ('Abri um arquivo');
//    console.log ('Manipulei o arquivo e gerou erro');
//    console.log ('Fechei o arquivo');
 
//    try {
//     console.log(b);
//  }catch (e) {
//     console.log ('Deu erro');
//  } 

// }catch (e) {
//     // É executada quando há erros
//     console.log ('tratando o erro');
// } finally {
//     // Sempre
//     console.log ('FINALLY: Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1997  00:01:00');
const hora = retornaHora();
console.log(hora);
} catch(e) {
    // tratar erro
    console.log(e);
} finally {
   console.log('Tenha um bom dia.');
}

