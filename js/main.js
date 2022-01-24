//menu
var htmlMenu = `
<nav class="navbar-custom navbar navbar-expand-sm navbar-dark bg-dark sticky-top" id="menu">
<a href="home.html">
<img class="hm" src="images/logo_the_thester.png" alt="The Thester" width="60px">
</a>
<button class="navbar-toggler"   data-toggle="collapse" data-target="#navegacao">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse pr-5" id="navegacao">
<ul class="navbar-nav ml-auto">
  <li class="nav-item">
    <a class="nav-link" href="home.html">Home</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="servicos.html" data-toggle="dropdown">Serviços</a>
    <div class="dropdown-menu drop">
    <a class="dropdown-item" href="servicos.html#assistencia"><i >Assistência técnica</i></a>
    <a class="dropdown-item" href="servicos.html#consultoria"><i >Consultoria em TI</i></a>
    <a class="dropdown-item" href="servicos.html#gestao"><i >Gestão de TI</i></a>
    <a class="dropdown-item" href="servicos.html#suporte"><i >Suporte de TI</i></a>
    </div>
  </li> 
  <li class="nav-item">
    <a class="nav-link" href="diario-de-bordo.html" >Diário de bordo</a>
  </li> 
  <li class="nav-item">
    <a class="nav-link" href="politica-de-privacidade.html">Politica de Privacidade</a>
  </li>   
  <li class=" nav-item">
    <a class="nav-link" href="contato.html">Contato</a>
  </li> 
</ul>
</div>  
</nav>    
`;

//footer
var htmlFooter = `
<footer id ="footer">
<div style="height: 40px;"></div>
<div class="container-fluid">
<div class="row">
 <div class="col-md-3 col-xs-10 offset-xs-2 contact-box text-center">
  <p class="main-tittle">Copyright &copy; 2021 The Thester</p>        
  <div style="height: 20px;"></div>
 </div>
 
 <div class="col-md-3">
      <ul style="list-style: none;">
        <li>
          <h6><a href="diario-de-bordo.html">Diário de Bordo</a></h6>
        </li>
        <li>
          <h6><a href="politica-de-privacidade.html">Política de Privacidade</a></h6>
        </li>
        <li>
          <h6><a href="contato.html">Contato</a></h6>
        </li>               
     </ul>  
      <div style="height: 20px;"></div>
    </div>
 
 <div class="col-md-3">
      <ul style="list-style: none;">
        <li>
          <h6><a href="servicos.html">Serviços</a></h6>
        </li>
        <li>
          <a href="servicos.html#assistencia">Assistência técnica</a>
        </li>
        <li>
        <a href="servicos.html#consultoria">Consultoria em TI</a>
        </li>
        <li>
        <a href="servicos.html#gestao">Gestão de TI</a>
        </li>
        <li>
        <a href="servicos.html#suporte">Suporte de TI</a>
        </li>               
     </ul>  
      <div style="height: 20px;"></div>
    </div>
    
    <div class="col-md-3 col-xs-10 offset-xs-2 contact-box ">
      <ul style="list-style: none;">
        <li>
          <h6 class="">Redes Sociais</h6>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=5511978526516&text=Ol%C3%A1%20The%20Thester,%20Quero%20mais%20informacoes%20sobre%20Seguranca%20da%20Informacao" target="_blank"><i class="fab fa-whatsapp"></i> Whatsapp </a>
        </li>
        <li>
          <a href="https://www.instagram.com/the.thester/" target="_blank"><i class="fab fa-instagram"></i> instagram.com/the.thester</a>
        </li>
        <li>
          <a target="_blank"><i class="fas fa-envelope"></i> contato@thethester.com.br</a>
        </li>
        <li>
          <a href="https://www.facebook.com/the.thester" target="_blank"><i class="fab fa-facebook"></i> facebook.com/the.thester</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/the-thester/" target="_blank"><i class="fab fa-linkedin"></i> linkedin.com/company/the-thester</a>
        </li>
      </ul>
    </div>         
</div>
<div style="height: 20px;"></div>
</div>     
</div> 
</footer>

<div class="alert alert-dismissible fade show" id="alertCookie" role="alert">
  <div class="container">
    <div class="row">
      <div class="col-10">
        <strong>Atenção!</strong> Este site utiliza <a href="politica-de-privacidade.html" target="_blank">cookies essenciais de navegação</a>, a fim de garantir uma melhor experiência de uso. Ao continuar a navegação, você concorda com o uso dessa tecnologia e com os termos da <a href="politica-de-privacidade.html" target="_blank">Política de privacidade.</a>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-primary" onclick="AllowCookie()" data-dismiss="alert" aria-label="Close">
          Aceito
        </button>
      </div>
    </div>
  </div>
</div>
`;

//habilitar whatsapp
var enableButtonWhatsapp = "0";
if($('#enableButtonWhatsapp').val()){
    enableButtonWhatsapp = $('#enableButtonWhatsapp').val();
}

//mudar cor do menu ao rolar scroll
$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('.navbar-custom').attr('style',"background-color: rgba(1, 17, 112, 0.4)!important");
        $('.dropdown-menu').attr('style',"background-color: rgba(1, 17, 112, 0.4)!important");
    }else{
        
        $('.navbar-custom').attr('style',"background-color: #011170!important");
        $('.dropdown-menu').attr('style',"background-color: #011170!important");
    }
});

//Whatsapp button
if(enableButtonWhatsapp == "1"){
    (function () {
        var options = {
            whatsapp: "+55(11)97852-6516", // WhatsApp number
            call_to_action: "Fale Conosco Agora!", // Call to action
            position: "right", // Position may be 'right' or 'left'
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
}

//verificar se existe cookie do usuario e esconder footer
function CookieIsAllowed(){
  var name = "allowCookie" + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  var count = 0;
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        if (c.substring(name.length, c.length) == "S") {
            
            $("#alertCookie").hide();
        }
    }
  }
  
}

//aceita cookie
function AllowCookie() {
  var d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = "allowCookie" + "=" + "S" + ";" + expires + ";path=/";
  
}

//valida email
function ValidaEmail(email){
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
      return false;
  }else{
      return true;
  }
}

//parametros url
function ParametrosGet(){
  var query = location.search.slice(1);
    var partes = query.split('&');
    
    partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
    });    
}

function DataPorExtenso(data){
  var dados = data.split("-");

  var mes = '';
  var ano = dados[0];

  switch(dados[1]){
    case "01":
      mes = 'Janeiro';
      break;
    case "02":
      mes = 'Fevereiro';
      break;
    case "03":
      mes = 'Março';
      break;
    case "04":
      mes = 'Abril';
      break;
    case "05":
      mes = 'Maio';
      break;
    case "06":
      mes = 'Junho';
      break;
    case "07":
      mes = 'Julho';
      break;
    case "08":
      mes = 'Agosto';
      break;
    case "09":
      mes = 'Setembro';
      break;
    case "10":
      mes = 'Outubro';
      break;
    case "11":
      mes = 'Novembro';
      break;
    case "12":
      mes = 'Dezembro';
      break;
  }

  var dia = dados[2].split(" ");

  return dia[0] + " de " + mes + " de " + ano;
}

//onload
$(document).ready(function(){
   $('body').prepend(htmlMenu); 
   $('body').append(htmlFooter);
   CookieIsAllowed(); 
});