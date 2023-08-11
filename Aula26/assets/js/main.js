// capturar evento de submit do formulário
const form = document.querySelector('#formulario');



function criap() {
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'Qualquer coisa';
}

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;
    resultado.appendChild(p);
}