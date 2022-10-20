
let form = document.getElementById('cadastro');

form.addEventListener('submit', function(){
    let storage = (localStorage.CURRICULO) ? JSON.parse(localStorage.CURRICULO) : [];


    let idNome = document.querySelector('#idNome').value;
    let idSobrenome = document.querySelector('#idSobrenome').value;
    let inputZip = document.querySelector('#inputZip').value;
    let inputAddress = document.querySelector('#inputAddress').value;
    let number = document.querySelector('#number').value;
    let inputAddress2 = document.querySelector('#inputAddress2').value;
    let inputCity = document.querySelector('#inputCity').value;
    let inputState = document.querySelector('#inputState').value;
    let inputEmail4 = document.querySelector('#inputEmail4').value;
    let exampleFormControlTextarea1 = document.querySelector('#exampleFormControlTextarea1').value;
    // let upload = document.querySelector('#inputGroupFile01').value;


    let curriculo = {

        "id" : id,
        "idNome" : idNome,
        "idSobrenome" : idSobrenome,
        "inputZip" : inputZip,
        "inputAddress" : inputAddress,
        "number" : number,
        "inputAddress2" : inputAddress2,
        "inputCity" : inputCity,
        "inputState" : inputState,
        "inputEmail4" : inputEmail4,
        "exampleFormControlTextarea1" : exampleFormControlTextarea1,
        // "inputGroupFile01" : upload
    
    }

    let submitButton = document.querySelector('button').value;

    if (!submitButton) {
        
        storage.push(veiculo);
        msgSuccess = 'Cadastro efetuado com sucesso.';

    } else {

        let idRegistro = document.querySelector('#idRegistro').value;
        storage[idRegistro] = curriculo;
        msgSuccess = 'Cadastro editado com sucesso.';
    }

    localStorage.setItem('CURRICULO', JSON.stringify(storage));

    alert(msgSuccess);

    form.reset();
    listarDados();
    document.querySelector('button').value = '';

})

function listarDados() {
    if (localStorage.CURRICULO) {
        let dados = (localStorage.CURRICULO) ? JSON.parse(localStorage.CURRICULO) : [];
        let estrutura = '';

        for (const i in dados) {
            
            estrutura += `
            <tr>
                <td>${dados[i].idNome}</td>
                <td>${dados[i].idSobrenome}</td>
                <td>${dados[i].inputZip}</td>
                <td>${dados[i].inputAddress}</td>
                <td>${dados[i].number}</td>
                <td>${dados[i].inputAddress2}</td>
                <td>${dados[i].inputCity}</td>
                <td>${dados[i].inputState}</td>
                <td>${dados[i].inputEmail4}</td>
                <td>${dados[i].exampleFormControlTextarea1}</td>
            </tr>
            `;
        }

        document.querySelector('table tbody').innerHTML = estrutura;

    } else {

        let estrutura = `
            <tr>
                <td colspan="7" align="center">Não existem dados</td>
            </tr>
        `;

        document.querySelector('table tbody').innerHTML = estrutura;
        
    }
}

listarDados();
