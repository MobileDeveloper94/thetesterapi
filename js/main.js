''
//move para pagina principal de acordo com a configuração
function MainPage() {
    window.location.href = "home.html";
}

function RenderMenu() {
    var html = "";
    
    html = html + '<nav class="navbar navbar-expand-md navbar-light fixed-top" style="background-color:#FFF">';
    html = html + '<a class="navbar-brand" href="./home.html"><img src="./images/LogoHorizontal.png" class="img" width="320px"/></a>';
    html = html + '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">';
    html = html + '<span class="navbar-toggler-icon"></span>';
    html = html + '</button>';
    html = html + '<div class="collapse navbar-collapse" id="navbarsExampleDefault">';
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
    html = html + '<br />';
    html = html + '<small>The Thester &copy; 2020</small>';

    html = html + '</div>';
    html = html + '</footer>';

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


    