// 'use strict';

// window.onload = function(){

    const limparFormulario = (endereco) => {
        document.getElementById('inputAddress').value = '';
        document.getElementById('inputAddress2').value = '';
        document.getElementById('inputCity').value = '';
        document.getElementById('inputState').value = '';

    }

    
    const preencherFormulario = (endereco) => {
        
        document.getElementById('inputAddress').value = endereco.logradouro;
        document.getElementById('inputAddress2').value = endereco.bairro;
        document.getElementById('inputCity').value = endereco.localidade;
        document.getElementById('inputState').value = endereco.uf;

    }
    const eNumero = (numero) => /^[0-9]+$/.test(numero);
    const cepValido = (cep) => cep.length == 8 && eNumero(cep);
    
    const pesquisarCep = async(cep) => {
        limparFormulario();
        document.getElementById('inputZip').value;
        const url = `http://viacep.com.br/ws/${cep}/json/`;
        if (cepValido(cep)) {
            
            const dados = await fetch(url);
            const endereco = await dados.json();

            if (endereco.hasOwnProperty('erro')) {
    
                document.getElementById('inputAddress').value = 'CEP não encontrado';
                document.getElementById('inputAddress').value;
    
            } else {
                
                preencherFormulario(endereco);
    
            }
        } else {
            document.getElementById('inputAddress').value = 'CEP incorreto!';
            document.getElementById('inputAddress').value;
        }
    }

    // const pesquisarCep = () => {
    //     console.log('Hello');
    // }
        
    // var varivael = document.getElementById('inputZip');
    // varivael.addEventListener('focusout', pesquisarCep);

// }            

// ####################################
// async function getCep(cep){

//     try {
        
//         const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
//         const data = await response.json();
//         console.log(data);

//     } catch (error) {

//         console.log('Erro na requisição.');
//     }
// }

// const cepNumber = prompt('Digite o número do CEP');
// const cepNumber = document.getElementById('#inputZip');

// cepNumber.addEventListener('focusout', getCep);

// document.getElementById('inputZip')
//             .addEventListener('focusout', getCep);

// getCep(cepNumber);
//#################################################################

// const cep = document.querySelector('#inputZip')

// const showData = (result) => {
//     for (const campo in result) {
//         if (document.querySelector('#'+campo)) {
//             document.querySelector('#' + campo).value = result[campo];
//         }
//     }
// }

// cep.addEventListener("blur", (e)=> {
//     let busca = cep.value.replace("-","")
//     const options = {
//         method: 'GET',
//         mode: 'cors',
//         cache: 'default'
//     }

//     fetch(`https://viacep.com.br/ws/${busca}/json/`, options)
//     .then(response => { response.json()
//         .then( data => showData(data))
//     })
//     .catch(e => console.log('Deu Erro: ' + e, message))
// })

// 3###################################################

// async function getApi(url){
//     const result = await fetch(url);
//     return await result.json();

// }

// getApi('http://servicodados.ibge.gov.br/api/v1/localidades/estados').then(function(result){
    
//     for (const key in result) {
        
//         console.log(result[key].sigla);
//     }
// }).catch(function(e){
//     document.getElementById('inputState', getApi)
//     console.log();
// })

//'use strict';

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

