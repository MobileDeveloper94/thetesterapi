''
//move para pagina principal de acordo com a configuração
function MainPage() {
    window.location.href = "home.html";
}

function RenderMenu() {
    var html = "";
    
    

    html = html + `
    <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="./home.html"><img src="./images/LogoHorizontal.png" class="img" width="113px"/></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarsExample01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
        <a class="nav-link" href="home.html#saiba">Saiba Como</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="home.html#quem">Quem Somos</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="home.html#contato">Contato</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="diario-de-bordo.html">Diário de Bordo</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="servicos.html">Serviços</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="materiais.html">Materiais</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="politica-privacidade.html">Política de Privacidade</a>
        </li>
        <li class="nav-item">
        <hr>
        <a href="https://www.facebook.com/the.thester" target="_blank" class="lnkicon"><i class="fab fa-facebook"></i></a>
        &nbsp;
        <a href="https://www.instagram.com/the.thester/" target="_blank" class="lnkicon"><i class="fab fa-instagram"></i></a>
        &nbsp;
        <a href="https://www.linkedin.com/company/the-thester/" target="_blank" class="lnkicon"><i class="fab fa-linkedin"></i></a>
        &nbsp;
        <a href="https://api.whatsapp.com/send?phone=5511978526516&text=Ol%C3%A1%20The%20Thester,%20Quero%20mais%20informacoes%20sobre%20Seguranca%20da%20Informacao" target="_blank" class="lnkicon"><i class="fab fa-whatsapp"></i></a>
    
        </li>
      </ul>
    </div>
  </nav>
    `;



    $("#menu").html(html);
}

function RenderFooter() {
    html = '<footer>';

    html = html + '<div class="container-fluid text-center">';
    //html = html + '<div class="space"></div>';
    html = html + '<hr />';
    html = html + '<a href="https://www.facebook.com/the.thester" target="_blank" class="midia"><i class="fab fa-facebook"></i></a>';
    html = html + '&nbsp;';
    html = html + '<a href="https://www.instagram.com/the.thester/" target="_blank" class="midia"><i class="fab fa-instagram"></i></a>';
    html = html + '&nbsp;';
    html = html + '<a href="https://www.linkedin.com/company/the-thester/" target="_blank" class="midia"><i class="fab fa-linkedin"></i></a>';
    html = html + '&nbsp;';
    html = html + '<a href="https://api.whatsapp.com/send?phone=5511978526516&text=Ol%C3%A1%20The%20Thester,%20Quero%20mais%20informacoes%20sobre%20Seguranca%20da%20Informacao" target="_blank" class="midia"><i class="fab fa-whatsapp"></i></a>'
    html = html + '<br />';
    html = html + '<small>The Thester &copy; ' + new Date().getFullYear() + '</small>';

    html = html + '</div>';
    html = html + '</footer>';

    html = html + '<div class="alert alert-dismissible fade show" id="alertCookie" role="alert">';
    html = html + '<div class="container">';
    html = html + '<div class="row">';
    html = html + '<div class="col-10">';
    html = `${html}<strong>Atenção!</strong> Este site utiliza <a href="politica-privacidade.html" target="_blank">cookies essenciais de navegação</a>, a fim de garantir uma melhor experiência de uso. Ao continuar a navegação, você concorda com o uso dessa tecnologia e com os termos da <a href="politica-privacidade.html" target="_blank">Política de privacidade.</a>`;
    html = html + '</div>';
    html = html + '<div class="col-2">';
    html = html + '<button type="button" class="btn btn-primary" onclick="AllowCookie()" data-dismiss="alert" aria-label="Close">';
    html = html + 'Aceito';
    html = html + '</button>';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '</div>';
    html = html + '<div id="voltarTopo"><a href="#" id="subir" class="btn btn-dark"><i class="fas fa-arrow-up fa-2x"></i></a></div>';
    $("main").append(html);
}



function ValidaEmail(email){
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
        return false;
    }else{
        return true;
    }
}



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

function AllowCookie() {
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "allowCookie" + "=" + "S" + ";" + expires + ";path=/";
    
}

function OpenFile(file){
    var dirFiles = "";

    window.href = dirFiles & file;
}


function GetUrlData(){
    var query = location.search.slice(1);
    var partes = query.split('&');
    var data = {};
    partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
    });

    return data;
}



//start
$(document).ready(function () {
    $("#voltarTopo").hide();
    RenderMenu();
    RenderFooter();
    CookieIsAllowed();
    
    $('head').append('<link rel="shortcut icon" href="images/favicon.png">');
    
    $('#subir').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});

    $(window).scroll(function() {
        if($(this).scrollTop() > 75) {
            $("#voltarTopo").show();
        }else{
            $("#voltarTopo").hide();
        }
    });

});