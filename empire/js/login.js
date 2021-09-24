$(document).ready(function(){
    $('#btnEntrar').click(Login);
});

function Login(){
    $("input").prop('disabled', true);
    $("#btnEntrar").prop('disabled',true);
    $("#btnEntrar").html('<i class="fab fa-empire fa-spin"></i> Aguarde...');
    
    var user = $('#lbLogin').val();
    var pass = $('#lbSenha').val();
    
    if(user.trim() === '' || pass.trim() === ''){
        $('#lbErro').html('<i class="fas fa-exclamation-triangle"></i> Preencha os campos login e senha.');
        $("input").prop('disabled', false);
        $("#btnEntrar").prop('disabled',false);
        $("#btnEntrar").html('<i class="fas fa-key"></i> Entrar');
        return;
    }
    
    $('#lbErro').html('');

    var data = {
      action: 'LOGIN',
      key: 'e19055b167dd976ae6a93174d3f3a709d5c43043',
      email: user,
      senha: pass,
      useragent: navigator.userAgent 
    };
  
    var obj = { obj: JSON.stringify(data)};
  
    $.post( "https://thethestermailing.000webhostapp.com/autenticacao.php", obj)
        .done(function( data ) {
          console.log(data);
            if(data.sucesso){
              
              window.location.href = "index.html";
              setCookie('empiretoken', data.token, 1); 
            }else{
                $('#lbErro').html('<i class="fas fa-exclamation-triangle"></i> Login ou senha inválidos.');
                $("input").prop('disabled', false);
                $("#btnEntrar").prop('disabled',false);
                $("#btnEntrar").html('<i class="fas fa-key"></i> Entrar');
                return;
            }         
    });
  
  }