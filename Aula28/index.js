// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
//const tresHoras = 60 * 60 *3 *1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); // 01/01/19970 Timestamp unix ou época unix
//const data = new Date(2019, 3, 20, 15, 14, 27);// ano, mês, dia, horas, minutos, segundos, milesimos de segundos
//const data = new Date('2023-08-01 20:20:59');
//console.log('Dia', data.getDate());
//console.log('Mês', data.getMonth() + 1); //Começa do 0
//console.log('Ano', data.getFullYear());
//console.log('Hora', data.getHours());
//console.log('Min', data.getMinutes());
//console.log('Seg', data.getSeconds());
//console.log('ms', data.getMilliseconds());
//console.log('Dia Semana', data.getDay()); // 0 - Domingo, 6 - sabado
//console.log(data.toString());
//console.log(Date.now());
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const Seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${Seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
