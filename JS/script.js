
/**INICIO DA LOGICA DE INSERÇÃO DOS POSTS ATUALIZAÇOES */
atualizacoesJson.map((item, index ) => {
    let atualizacaoItem = document.querySelector('.storys-conteiner .iten-post').cloneNode(true)
    //console.log(atualizacaoItem)
    document.querySelector('.storys-conteiner').append(atualizacaoItem)
    atualizacaoItem.querySelector('.iten-post img').src = item.img
    atualizacaoItem.querySelector('.iten-post .data-post').innerHTML = item.data
    atualizacaoItem.querySelector('.iten-post .text-titulo').innerHTML = item.titulo

    atualizacaoItem.querySelector('.iten-post img').addEventListener('click', (e) => {
        e.preventDefault()
        //console.log('clicou na atualização')
        document.querySelector('.conteiner-info-open .text-desc').innerHTML = item.descricao
        document.querySelector('.conteiner-info-open img').src = item.img
        document.querySelector('.conteiner-info-open .text-date').innerHTML = item.data
        document.querySelector('.conteiner-info-open h3').innerHTML = item.titulo
        
        
       
        var tela = window.matchMedia('screen and (min-width: 800px)')

        if (tela.matches){
            //alert('tela pc')
            /* INICIO  DA ANIMAÇÃO DE ABRIR ATUALIAÇÕES*/
        document.getElementById('storys-conteiner').animate(
            [{ gap: "0px"},{ gap: "100px"},{marginLeft:"100%"}],
            { duration: 1000,direction: "normal",fill: "forwards",delay:500},);
    
            document.querySelector('.conteiner-fundo').animate([{marginLeft:"15%"}, {marginLeft:"0%"}],
            {duration: 500,direction: "normal",fill: "forwards"});
            
            var rolagen = document.querySelector('.conteiner-rol-opem');
            var srnorte = document.querySelector('.img-fundo').style.display ='flex'
             rolagen.animate([{left :"-100%"},{left: "0"}],{ duration: 1000,fill: "forwards",});

        
           opemsaiba.animate([{marginLeft:'-500px'},],{duration: 500,fill:"forwards"});

           
            
            /* FIM LOGICA DA ANIMAÇÃO ABRIR ATUALIAÇÕES*/
        }
        else{
            //alert('tela mobile')
            /* INICIO  DA ANIMAÇÃO DE ABRIR ATUALIAÇÕES*/
        document.getElementById('storys-conteiner').animate(
            [{ gap: "0px"},{ gap: "100px"},{marginLeft:"100%"}],
            { duration: 1000,direction: "normal",fill: "forwards",delay:500},);
    
            document.querySelector('.conteiner-fundo').animate([{marginLeft:"15%"}, {marginLeft:"0%"}],
            {duration: 500,direction: "normal",fill: "forwards"});
            
            var rolagen = document.querySelector('.conteiner-rol-opem');
            var srnorte = document.querySelector('.img-fundo').style.display ='none'
             rolagen.animate([{left :"-100%"},{left: "0"}],{ duration: 1000,fill: "forwards",});

        
           opemsaiba.animate([{marginLeft:'-500px'},],{duration: 500,fill:"forwards"});

           
            
            /* FIM LOGICA DA ANIMAÇÃO ABRIR ATUALIAÇÕES*/
        }
         
            
       })
      
    })

    /**ANIMAÇÃO BOTÃO VOLTAR ATUALIZAÇÕES */
    let btnvoltar =  document.querySelector('#btnvoltar')
    btnvoltar.addEventListener('click' , voltar)

        function voltar(){
            var rolagen= document.querySelector('.conteiner-rol-opem')
            var srnorte = document.querySelector('.img-fundo').style.display ='none'
            rolagen.animate([{left:'0'},{left:'-100%'}],{duration:1000,fill:'forwards'})
            
            document.querySelector('.storys-conteiner').animate([ {marginLeft:"0"}],
            { duration:1000,direction:"normal",fill:"forwards"})

            document.querySelector('.conteiner-fundo').animate(
                [{marginLeft:"0%"},{marginLeft:"15%"}],
                {duration: 500,direction: "normal",fill: "forwards",delay:100})
        }

/** FIM ANIMAÇÃO BOTÃO VOLTAR ATUALIZAÇÕES */

/**INICIO INSERÇÃO DOS POSTS AVALIAÇOES  */
avaliacoesJson.map((ava , index)=>{
    let avaliacoesItem = document.querySelector('.avaliacao .card').cloneNode(true)

    document.querySelector('.avaliacao').append(avaliacoesItem)
    avaliacoesItem.querySelector('.card h3').innerHTML = ava.nota
    avaliacoesItem.querySelector('.card .comentario').innerHTML = ava.comentario
    avaliacoesItem.querySelector('.card .usuario-cliente img').src = ava.imgFavCliente
    avaliacoesItem.querySelector('.card .usuario-cliente h5').innerHTML = ava.nomeClinte
    avaliacoesItem.querySelector('.card .usuario-cliente p').innerHTML = ava.data
})
/**FIM INSERÇÃO DOS POSTS AVALIAÇOES  */

/** INICIO ROLAGEM DOS COMENTARIOS */
let Positionprima = 0;
let rolagem = 420;

const sCont = document.querySelector(".avaliacao");
const hScroll = document.querySelector(".rolagem-horizontal");
const esq = document.querySelector("#esq")
const dir = document.querySelector("#dir")



let maxScrollava = -sCont.offsetWidth + hScroll.offsetWidth;

function rolagemhorizontal(val){
    Positionprima += (val * rolagem);
    if(Positionprima >0){
        Positionprima = 0
        esq.style.opacity="0";
    }else{
        esq.style.opacity="1";
    }
    if(Positionprima < maxScrollava){
        Positionprima = maxScrollava;
        dir.style.opacity="0";
    }else{
        dir.style.opacity="1";
    }

    sCont.style.left = Positionprima + "px";
}
/** FIM ROLAGEM DOS COMENTARIOS */

/**INICIO FUNÇÃO ABRIR FORM ESCREVA COMENTARIO */


var telacoment = window.matchMedia('screen and (min-width: 800px)')

if(telacoment.matches){
    document.querySelector('.btn-escreva-comentario').addEventListener('click', escrevaComentario)
    document.querySelector('.voltar').addEventListener('click', fecharconteiner)
    function escrevaComentario(){
        document.querySelector('.card-escreva').style.transition = '0.8s'
        document.querySelector('.card-escreva').style.width = '800px'
        document.querySelector('.card-escreva').style.background = '#bc0001'
        document.querySelector('.card-escreva').style.borderColor = '#bc0001'
        document.querySelector('.btn-escreva-comentario').style.width = '0'
        document.querySelector('.btn-escreva-comentario .linha').style.display = 'none'
        document.querySelector('.btn-escreva-comentario img').style.display = 'none'
        document.querySelector('.btn-escreva-comentario p').style.display = 'none'
        document.querySelector('.nota-geral').style.marginLeft = '-100%'
        document.querySelector('.conteiner-avaliacao').style.display ='flex'
    
        document.querySelector('.card-escreva .logo-marca').style.display='flex' 
        document.querySelector('.card-escreva .logo-marca').style.marginLeft='70px' 
    }
    /**FIM FUNÇÃO ABRIR FORM ESCREVA COMENTARIO */
    
    function fecharconteiner(){
        document.querySelector('.card-escreva').style.transition = '0.8s'
        document.querySelector('.card-escreva').style.width = '300px'
        document.querySelector('.card-escreva').style.background = 'white'
        document.querySelector('.card-escreva').style.borderColor = '#640d14'
        document.querySelector('.btn-escreva-comentario').style.width = '200px'
        document.querySelector('.btn-escreva-comentario .linha').style.display = 'flex'
        document.querySelector('.btn-escreva-comentario img').style.display = 'flex'
        document.querySelector('.btn-escreva-comentario p').style.display = 'flex'
        document.querySelector('.nota-geral').style.marginLeft = '0'
        document.querySelector('.conteiner-avaliacao').style.display ='none'
    
        document.querySelector('.card-escreva .logo-marca').style.display='none' 
    }
}else{
    document.querySelector('.btn-escreva-comentario').addEventListener('click', escrevaComentario)
    document.querySelector('.voltar').addEventListener('click', fecharconteiner)
    function escrevaComentario(){
        document.querySelector('.card-escreva').style.transition = '0.5s'
        document.querySelector('.card-escreva').style.width = '400px'
        document.querySelector('.card-escreva').style.background = '#bc0001'
        document.querySelector('.card-escreva').style.borderColor = '#bc0001'
        document.querySelector('.btn-escreva-comentario').style.width = '0'
        document.querySelector('.btn-escreva-comentario .linha').style.display = 'none'
        document.querySelector('.btn-escreva-comentario img').style.display = 'none'
        document.querySelector('.btn-escreva-comentario p').style.display = 'none'
        document.querySelector('.nota-geral').style.marginLeft = '-100%'
        document.querySelector('.conteiner-avaliacao').style.display ='flex'
    
        document.querySelector('.card-escreva .logo-marca').style.display='flex' 
        document.querySelector('.card-escreva .logo-marca').style.marginLeft='40px' 
    }
    /**FIM FUNÇÃO ABRIR FORM ESCREVA COMENTARIO */
    
    function fecharconteiner(){
        document.querySelector('.card-escreva').style.transition = '0.5s'
        document.querySelector('.card-escreva').style.width = '200px'
        document.querySelector('.card-escreva').style.background = 'white'
        document.querySelector('.card-escreva').style.borderColor = '#640d14'
        document.querySelector('.btn-escreva-comentario').style.width = '150px'
        document.querySelector('.btn-escreva-comentario .linha').style.display = 'flex'
        document.querySelector('.btn-escreva-comentario img').style.display = 'flex'
        document.querySelector('.btn-escreva-comentario p').style.display = 'flex'
        document.querySelector('.nota-geral').style.marginLeft = '0'
        document.querySelector('.conteiner-avaliacao').style.display ='none'
    
        document.querySelector('.card-escreva .logo-marca').style.display='none' 
    }
}



galeriaJson.map((galeria , index)=>{
    let imagemsgaleria = document.querySelector('.image-grad .image-conteiner').cloneNode(true)

    document.querySelector('.image-grad ').append(imagemsgaleria)

    imagemsgaleria.querySelector('.image-conteiner img').src = galeria.img

    imagemsgaleria.querySelector('.image-conteiner img').addEventListener('click', ()=>{
        var modal = document.querySelector('.modal');
        var modalImg = document.querySelector('.modal-content')

        modal.style.display = "block";
        modalImg.src = galeria.img
       
        document.querySelector('.Galeria .modal .closebtn').addEventListener('click', ()=>{
            modal.style.display = "none";
            
        })
       
    })
})

/**ABRI MENU MOBILE */
    var menumobile = document.querySelector('.menuburge')
    var fechar = document.querySelector('.fechar')
    var menu = document.querySelector('.menu-pricipal')
    menumobile.addEventListener('click', abrirmenu)
    fechar.addEventListener('click', fecharmenu)

    function abrirmenu(){
        menu.style.left ='0'
        menu.style.width ='100%'
        menumobile.style.display = 'none'
    }
    function fecharmenu(){
        menu.style.left ='-100%'
        menu.style.width ='0'
        menumobile.style.display = 'flex'
    }



  
let mybutton = document.getElementById("myBtn");

var btnmobile = window.matchMedia('screen and (min-width: 800px)')  


if (btnmobile.matches){
    mybutton.style.display='none'
}
else{
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    function topFunction() {
      document.documentElement.scrollTop = 0; 
    }
}
/**MENU MOBILE */


/*ANIMAÇÃO COM SCROL
    const galeriaanime = document.querySelector('.Galeria')
    const observador = new IntersectionObserver((entrada)=>{
        console.log(entrada)
        entrada.forEach((entry) =>{
            if(entry.isIntersecting){
                entry.target.classList.add('show')
            }else{
                entry.target.classList.remove('show')
            }
        })
    })
    observador.observe(galeriaanime)
/*FIM ANIMAÇÃO COM SCROL*/


    ScrollReveal().reveal('.titulo ', {delay:0.2, origin:'left', interval:200, distance: '60px',reset:true})
    ScrollReveal().reveal('.card-num-comentarios-clientes',  {delay:0.2, origin:'bottom', duration:800, distance: '60px',reset:true})
    ScrollReveal().reveal('.card-num-produtos',  {delay:0.5,interval:500, origin:'left', duration:500, distance: '60px',reset:true})
    ScrollReveal().reveal('.card-num-seguidores',  {delay:0.8,interval:500, origin:'left', duration:500, distance: '60px',reset:true})
    ScrollReveal().reveal('.srnorte',  {delay:1 ,interval:500, origin:'rigth', duration:1000, distance: '100px',reset:true})
    
    
    ScrollReveal().reveal('.titulo-texto', {delay:0.8,interval:100, origin:'bottom', duration:500, distance: '60px',reset:true})
    ScrollReveal().reveal('.icone-servicos', {delay:1,interval:50, origin:'bottom', duration:500, distance: '80px',reset:true})


    ScrollReveal().reveal('.horizontal-scroll',  {delay:0.2, origin:'right', interval:200, distance: '60px',reset:true})
    ScrollReveal().reveal('.conteiner-fundo',  {delay:0.2, origin:'bottom', interval:200, distance: '60px',reset:true})
    ScrollReveal().reveal('.titulo-atualizacoes',  {delay:0.2, origin:'left', distance: '60px',reset:true})
    
    
    ScrollReveal().reveal('.conteiner-avaliacoes',  {delay:0.2, origin:'left', distance: '60px',reset:true})

    ScrollReveal().reveal('.image-grad',  {delay:0.5, origin:'bottom', interval:200, distance: '40px',reset:true})


    