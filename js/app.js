/*DESENVOLVIDO POR CRISTIANO FREESE*/
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

/* EXECUÇÃO DAS FUNÇÕES */
injectContent();
//CONSULTA LOCALIZAÇÃO USUÁRIO VIA API GEOLOCATION
navigator.geolocation.getCurrentPosition(success, error);

/********************* FEITO POR SANDRA *************/

/********************* FEITO POR PAULO *************/

/********************* FEITO POR MICHEL *************/

/********************* FEITO POR ANAISA *************/

