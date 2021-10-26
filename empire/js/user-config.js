$(document).ready(function(){
    //LoadDados ja engloba loginCheck
    LoadDados();
    $('#btnSalvar').click(SalvarAlteracoes);
});

function LoadDados(){
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

              if(imgUser != ''){
                $('#imgTest').html('<img src="' + imgUser + '" id="imagemUser" class="img-fluid rounded-circle" style="border: solid gray 4px" width="200px"/>');
              }else{
                $('#imgTest').html('<img src="./images/person2.png" id="imagemUser" class="img-fluid rounded-circle" style="border: solid gray 4px" width="200px">');
              }
          
              $('#lbNome').val(nomeUser);
              $('#lbID').val(idUser);
              $('#lbEmail').val(emailUser);

            }else{
              window.location.href = "login.html";
            }         
      });

      }else{
        window.location.href = "login.html";
      }
    }
}

function SalvarAlteracoes(){
  var nome = '';
  var imagem = '';
  var novaSenha = '';

  if($('#lbNome').val() == ''){
    alert('Nome não pode ficar vazio!');
    return;
  }else{
    nome = $('#lbNome').val();
  }
  
  if($("#imgTest img").attr('src')){
    if($("#imgTest img").attr('src').length > 180000){
      alert('A imagem é muito grande');
      return;
    }else{
      if($("#imgTest img").attr('src').substring(0,10) == 'data:image'){
        imagem = $("#imgTest img").attr('src');
      }
    }
  }
  console.log(imagem);
  debugger;

  //se as duas senhas <> vazio
  if($('#newPass').val() != '' && $('#confirm').val() != ''){
    //se as duas senhas não baterem
    if($('#newPass').val() !== $('#confirm').val()){
      alert('As senhas não conferem!');
      return;
    }else{
      novaSenha = $('#newPass').val();
    }
  }

  //se uma das senha forem vazias
  if(($('#newPass').val() != '' && $('#confirm').val() == '') || ($('#newPass').val() == '' && $('#confirm').val() != '')){
    alert('Preencha os dois campos para alterar a senha!');
    return;
  }

  var data = {
    action: 'EDIT',
    key: 'e19055b167dd976ae6a93174d3f3a709d5c43043',
    senha: novaSenha,
    nome: nome,
    imagem: imagem,
    id: idUser,
    userAgent: userAgent
  };

  var obj = { obj: JSON.stringify(data)};

  $.post( "https://thethestermailing.000webhostapp.com/autenticacao.php", obj)
    .done(function( data ) {
      
        if(data.sucesso){
          alert(data.mensagem);
          Logout();
        }else{
          alert(data.mensagem);
        }
    });
}

function encodeImageFileAsURL() {

  var filesSelected = document.getElementById("lbImagem").files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];

    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64
      var newImage = '<img src="';
      newImage = newImage + srcData;
      newImage = newImage + '" id="imagemUser" class="img-fluid rounded-circle" style="border: solid gray 4px" width="200px">';;
     
      document.getElementById("imgTest").innerHTML = newImage;
    }
    fileReader.readAsDataURL(fileToLoad);
  }
}

function RemoveImg(){
  $('#imgTest').html('<img src="./images/person2.png" id="imagemUser" class="img-fluid rounded-circle" style="border: solid gray 4px" width="200px">');
}