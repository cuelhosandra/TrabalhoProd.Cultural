



let formContato = document.getElementById('cadastro');

formContato.addEventListener('submit', function(){
    let storage = (localStorage.CONTATO) ? JSON.parse(localStorage.CONTATO) : [];


    let nome = document.querySelector('#nome').value;
    let sobrenome = document.querySelector('#sobrenome').value;
    let telefone = document.querySelector('#telefone').value;
    let email = document.querySelector('#email').value;    
    let cartaTexto = document.querySelector('#cartaTexto').value;


    let contato = {

        "nome" : nome,
        "sobrenome" : sobrenome,
        "telefone" : telefone,
        "email" : email,
        "cartaTexto" : cartaTexto
    
    }

    let submitButton = document.querySelector('button').value;

    if (!submitButton) {
        
        storage.push(contato);
        msgSuccess = 'Cadastro efetuado com sucesso.';

    } else {

        let idRegistro = document.querySelector('#idRegistro').value;
        storage[idRegistro] = contato;
        msgSuccess = 'Cadastro editado com sucesso.';
    }

    localStorage.setItem('CONTATO', JSON.stringify(storage));

    alert(msgSuccess);

    formContato.reset();
    listarContato();
    document.querySelector('button').value = '';

})

// function listarContato() {

//     if (localStorage.CONTATO) {

//         let dados = (localStorage.CONTATO) ? JSON.parse(localStorage.CONTATO) : [];
//         let estrutura = '';

//         for (const i in dados) {
            
//             estrutura += `
//             <tbody>
//                 <tr>
//                     <td>${dados[i].nome}</td>
//                     <td>${dados[i].sobrenome}</td>
//                     <td>${dados[i].telefone}</td>
//                     <td>${dados[i].email}</td>
//                     <td>${dados[i].cartaTexto}</td>
                    
//                 </tr>
//             <tbody>
//             `;
//         }

//         document.querySelector('table tbody').innerHTML = estrutura;

//     } else {

//         let estrutura = `
//             <tr>
//                 <td colspan="12" align="center">Não existem dados</td>
//             </tr>
//         `;

//         document.querySelector('table tbody').innerHTML = estrutura;
        
//     }
// }

// listarContato();
