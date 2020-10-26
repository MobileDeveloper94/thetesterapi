''
//move para pagina principal de acordo com a configuração
function MainPage() {
    window.location.href = "home.html";
}

function RenderMenu() {
    var html = "";
    
    html = html + '<nav class="navbar navbar-expand-md navbar-light fixed-top" style="background-color:#FFF">';
    html = html + '<a class="navbar-brand" href="./home.html"><img src="./images/thethester.jpg" class="img" width="60px"/></a>';
    html = html + '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">';
    html = html + '<span class="navbar-toggler-icon"></span>';
    html = html + '</button>';
    html = html + '<div class="collapse navbar-collapse" id="navbarsExampleDefault">';
    html = html + '<ul class="navbar-nav mr-auto">';
    html = html + '<li class="nav-item active">';
    html = html + '<a class="nav-link" href="#inicio">Início <span class="sr-only">(current)</span></a>';
    html = html + '</li>';
    
    html = html + '<li class="nav-item">';
    html = html + '<a class="nav-link" href="#saiba">Saiba Como</a>';
    html = html + '</li>';

    html = html + '<li class="nav-item">';
    html = html + '<a class="nav-link" href="#quem">Quem Somos</a>';
    html = html + '</li>';

    html = html + '<li class="nav-item">';
    html = html + '<a class="nav-link" href="#contato">Contato</a>';
    html = html + '</li>';

    html = html + '<li class="nav-item">';
    html = html + '<a class="nav-link" href="diario-de-bordo.html">Diário de Bordo</a>';
    html = html + '</li>';

   
    //<!--<li class="nav-item dropdown">
    //    <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    //    <div class="dropdown-menu" aria-labelledby="dropdown01">
    //        <a class="dropdown-item" href="#">Action</a>
    //        <a class="dropdown-item" href="#">Another action</a>
    //        <a class="dropdown-item" href="#">Something else here</a>
    //    </div>
    //</li>-->
    html = html + '</ul>';
    //<!--<form class="form-inline my-2 my-lg-0">
    //    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
    //        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    //</form>-->
    // html = html + '<div class="login">';
    // html = html + '<a href="#" class="nav-link">';
    // html = html + '<i class="fas fa-user"></i> Login';
    // html = html + '</a>';
    // html = html + '</div>';
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


    