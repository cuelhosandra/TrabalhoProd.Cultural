/* INJEÇÃO DE HTML NA TAG MAIN DO ARQUIVO INDEX.HTML */
async function injectContent() {
    //pega o endereço da url
    let url = location.href; 

    //divide o endereço pelo = e aplica os valores como array
    file = url.split('='); 

    let view = (file[1] != undefined) ? file[1] : 'inicio'; 

    //pega o valor após o = da url e aplica no fetch
    const resp = await fetch(`views/${view}.html`); 
    //o método fetch faz uma requisiçao ajax para um determinado local, neste caso para views/arquivo.html

    //converte o resultado da fetch para texto
    const html = await resp.text(); 

    //seleciona o destino para carregar o arquivo
    let inject = document.getElementById('content'); 

    inject.innerHTML = html; //aplica a injeção de conteúdo no container de destino

   
    // let formCurriculo = document.getElementById('content');
    //   formCurriculo.innerHTML = html2;

}

function onclickFooter(){
  document.getElementById("footer-social").style.color= 'red';
}

function CarregouPagina(){
  var data = new Date();

  var dia     = data.getDate();           // 1-31
  var mes     = data.getMonth();          // 0-11 (zero=janeiro)
  var ano2    = data.getYear();           // 2 dígitos
  var hora    = data.getHours();          // 0-23
  var min     = data.getMinutes();        // 0-59
  var seg     = data.getSeconds();        // 0-59

  var str_data = dia + '/' + (mes+1) + '/' + ano2;
  var str_hora = hora + ':' + min + ':' + seg;

  let url = location.href;
  let view = url.split('=');
  let sessao = (view[1] != undefined) ? view[1] : 'inicio'; 
  console.log(str_data + " - " + str_hora + " - " + "Carregou página " + sessao);
}

function onclickAccordion(){
  console.log("Clicou no Accordion");
}

// CRUD CADASTRO

function cadastro() {
    
  let formulario = document.getElementById('cadastro');
  
  formulario.addEventListener('submit', function(){
      let storage = (localStorage.CURRICULO) ? JSON.parse(localStorage.CURRICULO) : [];
  
  
      let nome = document.querySelector('#nome').value;
      let sobrenome = document.querySelector('#sobrenome').value;
      let cep = document.querySelector('#cep').value;
      let logradouro = document.querySelector('#logradouro').value;
      let numero = document.querySelector('#numero').value;
      let bairro = document.querySelector('#bairro').value;
      let cidade = document.querySelector('#cidade').value;
      let estado = document.querySelector('#estado').value;
      let email = document.querySelector('#email').value;
      let cartaTexto = document.querySelector('#cartaTexto').value;
      let arquivo = document.querySelector('#arquivo').value;
  
  
      let curriculo = {
  
          "nome" : nome,
          "sobrenome" : sobrenome,
          "cep" : cep,
          "logradouro" : logradouro,
          "numero" : numero,
          "bairro" : bairro,
          "cidade" : cidade,
          "estado" : estado,
          "email" : email,
          "cartaTexto" : cartaTexto,
          "arquivo" : arquivo
      
      }
  
      let submitButton = document.querySelector('button').value;
  
      if (!submitButton) {
          
          storage.push(curriculo);
          msgSuccess = 'Cadastro efetuado com sucesso.';
  
      } else {
  
          let idRegistro = document.querySelector('#idRegistro').value;
          storage[idRegistro] = curriculo;
          msgSuccess = 'Cadastro editado com sucesso.';
      }
  
      localStorage.setItem('CURRICULO', JSON.stringify(storage));
  
      alert(msgSuccess);
  
      formulario.reset();
      listarCurriculo();
      document.querySelector('button').value = '';
  
  }) 
  
  
  function listarCurriculo() {
  
     if (localStorage.CURRICULO) {
  
         let dados = (localStorage.CURRICULO) ? JSON.parse(localStorage.CURRICULO) : [];
         let estrutura = '';
  
         for (const i in dados) {
             
             estrutura += `
             <tbody>
                 <tr>
                     <td>${dados[i].nome}</td>
                     <td>${dados[i].sobrenome}</td>
                     <td>${dados[i].cep}</td>
                     <td>${dados[i].logradouro}</td>
                     <td>${dados[i].numero}</td>
                     <td>${dados[i].bairro}</td>
                     <td>${dados[i].cidade}</td>
                     <td>${dados[i].estado}</td>
                     <td>${dados[i].email}</td>
                     <td>${dados[i].cartaTexto}</td>
                     <td>${dados[i].arquivo}</td>
                 </tr>
             <tbody>
             `;
         }
  
         document.querySelector('table tbody').innerHTML = estrutura;
  
     } else {
  
         let estrutura = `
             <tr>
                 <td colspan="12" align="center">Não existem dados</td>
             </tr>
         `;
  
         document.querySelector('table tbody').innerHTML = estrutura;
         
     }
  }
  
  
  listarCurriculo();
}

// CRUD CONTATO
function contato() {
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

function listarContato() {

    if (localStorage.CONTATO) {

        let dados = (localStorage.CONTATO) ? JSON.parse(localStorage.CONTATO) : [];
        let estrutura = '';

        for (const i in dados) {
            
            estrutura += `
            <tbody>
                <tr>
                    <td>${dados[i].nome}</td>
                    <td>${dados[i].sobrenome}</td>
                    <td>${dados[i].telefone}</td>
                    <td>${dados[i].email}</td>
                    <td>${dados[i].cartaTexto}</td>
                    
                </tr>
            <tbody>
            `;
        }

        document.querySelector('table tbody').innerHTML = estrutura;

    } else {

        let estrutura = `
            <tr>
                <td colspan="12" align="center">Não existem dados</td>
            </tr>
        `;

        document.querySelector('table tbody').innerHTML = estrutura;
        
    }
}

listarContato();

}



/* EXECUÇÃO DAS FUNÇÕES */
injectContent();





/********************* FEITO POR SANDRA *************/

/********************* FEITO POR PAULO *************/

/********************* FEITO POR MICHEL *************/

/********************* FEITO POR ANAISA *************/

