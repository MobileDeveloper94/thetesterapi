$(document).ready(function(){
    LoginCheck();
    LoadDados();
  });

  function LoadDados(){
    var data = {
      action: 'CHECK',
      key: 'e19055b167dd976ae6a93174d3f3a709d5c43043',
      token: token  
    };

    var obj = { obj: JSON.stringify(data)};
  
    $.post( "https://thethestermailing.000webhostapp.com/autenticacao.php", obj)
      .done(function( data ) {
        
          if(data.sucesso){
            var row = data.dados.dados[0];

            if(row.imagem){
              $('#imgTest').html('<img src="' + row.imagem + '" />');
            }else{
              $('#imgTest').html('<b style="color:gray">Nenhuma imagem selecionada</b>');
            }

            $('#lbNome').val(row.nome);
            $('#lbId').val(row.id);
            $('#lbEmail').val(row.email);

          }else{
            alert('Erro, dados do usuário não retornados.');
          }
    });
  }