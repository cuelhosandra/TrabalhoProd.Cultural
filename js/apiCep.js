'use strict';

const preencherFormulario = (endereco) => {
    document.getElementById('inputAddress').value = endereco.logradouro;
}

const pesquisarCep = async() => {
    const cep = document.getElementById('inputZip').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherFormulario(endereco);
    console.log(endereco);
}


document.getElementById('inputZip')
        .addEventListener('focusout', pesquisarCep);