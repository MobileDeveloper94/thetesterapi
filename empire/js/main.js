var dadosGet = {};
var token = '';
var idUser = 0;
var userAgent = '';
var nomeUser = '';
var imgUser = '';
var emailUser = '';

var htmlMenu = `
<nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0" >
<div class="navbar col-12 mr-0">

  <a class="nav-link link-menu-top" href="#"> <img src="./images/logo_the_thester.png" class="img-fluid" width="35px" /> The Thester | Empire</a>

  <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#collapseMenu" aria-expanded="true" aria-controls="collapseMenu" onclick='ExpandeMain()'>
    <i class="fas fa-bars"></i>
  </button>
  
</div>
</nav>
<div class="container-fluid collapse show" id="collapseMenu">
<div class="row">
  <nav id="listMenu" class="sidebar d-md-block bg-light">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
       <li class="nav-item">
        &nbsp;
       </li>
       <li class="nav-item">
          <a class="nav-link list-menu" href="index.html">
          <i class="fas fa-home"></i>
          Início 
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link list-menu" href="noticias.html">
          <i class="fas fa-newspaper"></i>  
          Notícias
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link list-menu" href="materiais.html">
          <i class="fas fa-file"></i>
            Materiais
          </a>
        </li>
        <li class="nav-item">
          <hr>
        </li>
        <li class="nav-item">
          <div class="text-center">
            <img src="./images/person2.png" id="imagemUser" class="img-fluid rounded-circle" style="border: solid gray 2px" width="50px" />
            <br>
             <span id="lbNomeUser" style="font-size: 7pt"><i class="fas fa-circle" style="color:orange"></i> Not Logged</span>
          </div>
        </li>
        <li class="nav-item" style="font-size: 8pt" id="userOptions">
        </li>
        <li class="nav-item">
          <hr>
        </li>
        <li class="nav-item text-center">
          <small> The Thester &copy; 2021</small>
        </li>        
      </ul>
    </div>
  </nav>
`;

//onload
$(document).ready(function(){
  $("body").prepend(htmlMenu);
  var title = $('title').text().split(" | ");
  $(".list-menu:contains('" + title[1] + "')").addClass("active");
  var heightMenu = $('.navbar').height() + 10;
  $('#listMenu').attr('style',"padding-top: " + heightMenu + "px;");
  
  //useragent get
  userAgent = userAgent + 'mobile: ' + navigator.userAgentData.mobile + ', ';
  userAgent = userAgent + 'SO: ' + navigator.userAgentData.platform + ', ';
  navigator.userAgentData.brands.forEach(function(linha){
    userAgent = userAgent + linha.brand + '/v' + linha.version + ', ';
  });

  if(userAgent == ''){
    userAgent = navigator.userAgent;
  }
});

function detectMobile() { var check = false; (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[aw])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera); return check; };

function LoginCheck(){
  if(document.location.origin == "file://"){
    idUser = 1;
  }else{
    token = getCookie('empiretoken');
  if(token !== ''){

    var data = {
      action: 'CHECK',
      key: 'e19055b167dd976ae6a93174d3f3a709d5c43043',
      token: token  
    };

    var obj = { obj: JSON.stringify(data)};
  
    $.post( "https://thethestermailing.000webhostapp.com/autenticacao.php", obj)
      .done(function( data ) {
      console.log('LoginCheck retorno dados');
        
          if(data.sucesso){
            token = data.token;
            setCookie('empiretoken', data.token, 1);
            idUser = data.id;
            nomeUser = data.nome;
            imgUser = data.imagem;
            emailUser = data.email;

            $("#lbNomeUser").html('<i class="fas fa-circle" style="color:green"></i> ' + nomeUser);
            if(imgUser != ''){
              $('#imagemUser').attr('src', imgUser);
            }
            var html = '<a class="nav-link link-menu-top" href="user-config.html" style="padding-top: 4px; padding-bottom: 4px" ><i class="fas fa-cog"></i> Configurações</a>';
            html = html + '<a class="nav-link link-menu-top" href="#" onclick=\'Logout()\' style="padding-top: 4px; padding-bottom: 4px"><i class="fas fa-sign-out-alt"></i> Sair</a>';
            $('#userOptions').html(html);
          }else{
            window.location.href = "login.html";
          }         
    });

    }else{
    window.location.href = "login.html";
    }
  }
}

function Logout(){
  setCookie('empiretoken','',1);

  var data = {
    action: 'LOGOUT',
    key: 'e19055b167dd976ae6a93174d3f3a709d5c43043',
    token: token  
  };

  var obj = { obj: JSON.stringify(data)};

  $.post( "https://thethestermailing.000webhostapp.com/autenticacao.php", obj)
    .done(function( data ) {
      window.location.href = "login.html";         
  });  
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function ExpandeMain() {
  setTimeout(function(){
    if($('#main').hasClass('col-9')){
      $('#main').attr('class', 'col-12 ml-auto pt-3 px-4');
    
    }else{
      $('#main').attr('class', 'col-9 col-lg-10 ml-auto pt-3 px-4');
     
    } 
  }, 250);
  
}