/* INJEÇÃO DE HTML NA TAG MAIN DO ARQUIVO INDEX.HTML */
async function injectContent() {
  let url = location.href; 
  file = url.split('='); 
  let view = (file[1] != undefined) ? file[1] : 'inicio'; 

  const resp = await fetch(`views/${view}.html`); 
  const html = await resp.text(); 

  let inject = document.getElementById('content'); 
  inject.innerHTML = html; //aplica a injeção de conteúdo no container de destino
}

function onclickFooter(){
  document.getElementById("footer-social").style.color= 'red';
}

// FUNÇÃO AUXILIAR PARA ADICIONAR 0 NA STRINGS, QUANDO NUMERO MENOR QUE 10
function AdicionaZero(nraux){
  if (nraux <= 9) return `0${nraux}`;
  else return nraux;
}

//FUNÇÃO PARA ARMAZENAR DATA, HORA E PÁGINA ACESSADA NO LOCAL STORAGE
function CarregouPagina(posicao){
  let data = new Date();
  let dia     = data.getDate();           
  let mes     = data.getMonth();          
  let ano    = data.getFullYear();           
  let hora    = data.getHours();          
  let min     = data.getMinutes();        
  let seg     = data.getSeconds();        
  let dataVis = `${AdicionaZero(dia)}/${AdicionaZero(mes+1)}/${AdicionaZero(ano)}`;
  let horaVis = `${AdicionaZero(hora)}:${AdicionaZero(min)}:${AdicionaZero(seg)}`;

  let url = location.href;
  let view = url.split('=');
  let paginaVis = (view[1] != undefined) ? view[1] : 'Inicio';
  paginaVis = paginaVis.charAt(0).toUpperCase() + paginaVis.slice(1); 
  let storage = (localStorage.VISITAS) ? JSON.parse(localStorage.VISITAS) : [];

  let visita = {
  "DataVis" : dataVis,
  "HoraVis" : horaVis,
  "PaginaVis" : paginaVis,
  "Coordenadas" : 'LAT, LON'
  }

  storage.push(visita);
  localStorage.setItem('VISITAS', JSON.stringify(storage));
}

// FUNÇÃO PARA ARMAZENAR CLIQUE NO ACCORDION LEI ROUANET NO LOCAL STORAGE 
function onclickAccordion(){
  let data = new Date();
  let dia     = data.getDate();           
  let mes     = data.getMonth();          
  let ano    = data.getFullYear();           
  let dataClique = `${AdicionaZero(dia)}/${AdicionaZero(mes+1)}/${AdicionaZero(ano)}`;
  
  let storage = (localStorage.CLIQUES) ? JSON.parse(localStorage.CLIQUES) : [];

  let cliques = {
  "DataClique" : dataClique,
  "TipoClique" : 'LEI ROUANET'
  }

  storage.push(cliques);
  localStorage.setItem('CLIQUES', JSON.stringify(storage));
}

// FUNÇÃO SUCCESS - COORDENADAS GEOGRAFICAS - GETCURRENTPOSITION
function success(posicao){
  console.log(`Latitude : ${posicao.coords.latitude}, ${posicao.coords.longitude}`);
}

// FUNÇÃO ERROR - COORDENADAS GEOGRAFICAS - GETCURRENTPOSITION
function error(err){
  console.log(err);
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
//CONSULTA LOCALIZAÇÃO USUÁRIO VIA API GEOLOCATION
navigator.geolocation.getCurrentPosition(success, error);




/********************* FEITO POR SANDRA *************/

/********************* FEITO POR PAULO *************/

/********************* FEITO POR MICHEL *************/

/********************* FEITO POR ANAISA *************/

