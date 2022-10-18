

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
