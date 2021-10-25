$(document).ready(function(){
    LoginCheck();
    LoadDados();
    $('#btnSalvar').click(SalvarAlteracoes);
  });

function LoadDados(){
    if(imgUser != ''){
      $('#imgTest').html('<img src="' + imgUser + '" width="150px"/>');
    }else{
      $('#imgTest').html('<b style="color:gray">Nenhuma imagem selecionada</b>');
    }

    $('#lbNome').val(nomeUser);
    $('#lbID').val(idUser);
    $('#lbEmail').val(emailUser);  
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
      imagem = $("#imgTest img").attr('src');
    }
  }

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
      var newImage = document.createElement('img');
      newImage.src = srcData;
     
      document.getElementById("imgTest").innerHTML = newImage.outerHTML;
    }
    fileReader.readAsDataURL(fileToLoad);
  }
}

function RemoveImg(){
  $('#imgTest').html('<b style="color:gray">Nenhuma imagem selecionada</b>');
}