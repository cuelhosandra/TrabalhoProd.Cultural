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

/* CUSTOMIZAÇÕES GERAIS */
/* INDICAÇÃO VISUAL DO LINK ATUAL SELECIONADO NO NAVBAR*/
function activeLink(){
  let url = location.href;
  let view = url.split('=');
  let sessao = (view[1] != undefined) ? view[1] : 'inicio'; 
  document.getElementById(sessao).className += ' active';
}

/* EXECUÇÃO DAS FUNÇÕES */
injectContent();
activeLink();


/********************* FEITO POR SANDRA *************/

/********************* FEITO POR PAULO *************/

/********************* FEITO POR MICHEL *************/

/********************* FEITO POR ANAISA *************/


$( document ).ready(function() {

    let containerD = document.getElementById("circleD");
  
    let circleD = new ProgressBar.Circle(containerD, {
  
      color: '#65DAF9',
      strokeWidth: 8,
      duration: 2000,
      from: { color: '#aaa'},
      to: { color: '#65DAF9'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 5423);
        circle.setText(value);
  
      }
  
    });
  
    // iniciando loaders quando a usuário chegar no elemento
    let dataAreaOffset = $('#data-area').offset();
    // stop serve para a animação não carregar mais que uma vez
    let stop = 0;
  
    $(window).scroll(function (e) {
  
      let scroll = $(window).scrollTop();
  
      if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);
  
        stop = 1;
      }
  
    });
  
    // Parallax
  
    // setTimeout serve para carregar primeiro as imagens
    setTimeout(function() {
      $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
      $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
    }, 200);
  
    // Filtro portfólio
  
    $('.filter-btn').on('click', function() {
  
      let type = $(this).attr('id');
      let boxes = $('.project-box');
  
      $('.main-btn').removeClass('active');
      $(this).addClass('active');
  
      if(type == 'dsg-btn') {
        eachBoxes('dsg', boxes);
      } else if(type == 'dev-btn') {
        eachBoxes('dev', boxes);
      } else if(type == 'seo-btn') {
        eachBoxes('seo', boxes);
      } else {
        eachBoxes('all', boxes);
      }
  
    });
  
    function eachBoxes(type, boxes) {
  
      if(type == 'all') {
        $(boxes).fadeIn();
      } else {
        $(boxes).each(function() {
          if(!$(this).hasClass(type)) {
            $(this).fadeOut('slow');
          } else {
            $(this).fadeIn();
          }
        });
      }
    }
  
    // scroll para as seções
  
    let navBtn = $('.nav-item');
  
    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');
  
    let scrollTo = '';
  
    $(navBtn).click(function() {
  
      let btnId = $(this).attr('id');
  
      if(btnId == 'about-menu') {
        scrollTo = aboutSection;
      } else if(btnId == 'services-menu') {
        scrollTo = servicesSection;
      } else if(btnId == 'team-menu') {
        scrollTo = teamSection;
      } else if(btnId == 'portfolio-menu') {
        scrollTo = portfolioSection;
      } else if(btnId == 'contact-menu') {
        scrollTo = contactSection;
      } else {
        scrollTo = bannerSection;
      }
  
      $([document.documentElement, document.body]).animate({
          scrollTop: $(scrollTo).offset().top - 70
      }, 1500);
    });
  
  });