$(document).ready(function(){
    LoadDados();
    $('#btnSalvar').click(SalvarAlteracoes);
  });

function LoadDados(){
  var data = {
    action: 'CHECK',
    key: 'e19055b167dd976ae6a93174d3f3a709d5c43043',
    token: getCookie('empiretoken')  
  };

  var obj = { obj: JSON.stringify(data)};

  $.post( "https://thethestermailing.000webhostapp.com/autenticacao.php", obj)
    .done(function( data ) {
      
        if(data.sucesso){

          if(data.imagem != ''){
            $('#imgTest').html('<img src="' + data.imagem + '" width="150px"/>');
          }else{
            $('#imgTest').html('<b style="color:gray">Nenhuma imagem selecionada</b>');
          }

          $('#lbNome').val(data.nome);
          $('#lbID').val(data.id);
          $('#lbEmail').val(data.email);

        }else{
          alert('Erro, dados do usuário não retornados.');
          window.location.href = 'login.html'
        }
  });
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