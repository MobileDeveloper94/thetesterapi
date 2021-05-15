''
//move para pagina principal de acordo com a configuração
function MainPage() {
    window.location.href = "home.html";
}

function RenderMenu() {
    var html = "";
    
    html = html + '<nav class="navbar navbar-expand-md navbar-light fixed-top" style="background-color:#FFF">';
    html = html + '<a class="navbar-brand" href="./home.html"><img src="./images/LogoHorizontal.png" class="img" width="166px"/></a>';
    html = html + '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">';
    html = html + '<span class="navbar-toggler-icon"></span>';
    html = html + '</button>';
    html = html + '<div class="collapse navbar-collapse" id="navbarsExampleDefault">';

    html = html + '<ul class="navbar-nav mr-auto" style="color:#FFF">';
    html = html + '<li class="nav-item active">';
    html = html + 'Início';
    html = html + '</li>';
    
    html = html + '<li class="nav-item">';
    html = html + 'Saiba Como';
    html = html + '</li>';

    html = html + '<li class="nav-item">';
    html = html + 'Quem Somos';
    html = html + '</li>';

    html = html + '<li class="nav-item">';
    html = html + 'Contato';
    html = html + '</li>';

    html = html + '<li class="nav-item">';
    html = html + 'Diário de Bordo';
    html = html + '</li>';

    html = html + '<li class="nav-item">';
    html = html + 'Serviços';
    html = html + '</li>';    

    html = html + '</ul>';

    html = html + '<ul class="navbar-nav mr-auto">';
    html = html + '<li class="nav-item active">';
    html = html + '<a class="nav-link" href="home.html#inicio">Início <span class="sr-only">(current)</span></a>';
    html = html + '</li>';
    
    html = html + '<li class="nav-item">';
    html = html + '<a class="nav-link" href="home.html#saiba">Saiba Como</a>';
    html = html + '</li>';

    html = html + '<li class="nav-item">';
    html = html + '<a class="nav-link" href="home.html#quem">Quem Somos</a>';
    html = html + '</li>';

    html = html + '<li class="nav-item">';
    html = html + '<a class="nav-link" href="home.html#contato">Contato</a>';
    html = html + '</li>';

    html = html + '<li class="nav-item">';
    html = html + '<a class="nav-link" href="diario-de-bordo.html">Diário de Bordo</a>';
    html = html + '</li>';

    html = html + '<li class="nav-item">';
    html = html + '<a class="nav-link" href="servicos.html">Serviços</a>';
    html = html + '</li>';    

    html = html + '</ul>';

    
    html = html + '</div>';
    html = html + '</nav>';

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

//start
$(document).ready(function () {
    RenderMenu();
    RenderFooter();
    CookieIsAllowed();
    $('head').append('<link rel="shortcut icon" href="images/favicon.png">');
});