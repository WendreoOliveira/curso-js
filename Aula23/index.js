/*
&& -> false && true -> false "O valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY
*false 
0
'' "" ``
null / undefined
NaN
*/
//console.log('Wendreo' && '' && 'Livia');
/*function falaOi () {
    return 'Oi';
}

let vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi());
*/
//console.log(0 || false || null || 'Wendreo Oliveira' || true);
const a = 0;
const b = null;
const c = 'false'; //pegadinha com string
const d = false;
const e = NaN;

console.log(a || b || c || d || e);