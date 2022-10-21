/*DESENVOLVIDO POR CRISTIANO FREESE*/
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

/* EXECUÇÃO DAS FUNÇÕES */
injectContent();


/********************* FEITO POR SANDRA *************/

/********************* FEITO POR PAULO *************/

/********************* FEITO POR MICHEL *************/

/********************* FEITO POR ANAISA *************/

