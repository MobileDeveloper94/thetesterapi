function EnviaEmail(){
    var Contato = {
        Nome: $('#cont-nome').val(),
        Email: $('#cont-Email').val(),
        Mensagem: $('#cont-enviar').val(),
        CbContato: $('#cbDadosContato').is(':checked'),
        CbMarketing: $('#cbDadosMarketing').is(':checked')
    };


    //validacoes
    $('.txtErro').hide();

    if(Contato.Nome === ""){
        $('#txtErroNome').show();
        return; 
    }

    if(!ValidaEmail(Contato.Email)){
        $('#txtErroEmail').show();
        return;
    }
    
    if(Contato.Mensagem === ""){
        $('#txtErroMensagem').show();
        return; 
    }

    if(!Contato.CbContato){
        $('#txtErroContato').show();
        return; 
    }
    
    /*tudo ok, prosseguir
    $('#modalLoading').modal('show');*/
    $("#btnEnviar").prop('disabled',true);
    $("#btnEnviar").html('<i class="fab fa-empire fa-spin"></i> Aguarde...');

    
    var msg = "Voce recebeu uma mensagem:<br>";
    msg = msg + "De: " + Contato.Nome + "<br>";  
    msg = msg + "Email: " + Contato.Email + "<br>";  
    msg = msg + "Mensagem: <br>" + Contato.Mensagem + "<br>";  

    var objMail = {
        Nome: Contato.Nome,
        EmailFrom: Contato.Email,
        EmailTo: 'contato@thethester.com.br',
        Mensagem: msg,
        Assunto: "The Thester recebeu uma nova mensagem",
        Alias: "The Thester Site",
        Key: "e19055b167dd976ae6a93174d3f3a709d5c43043" 
    };
    // console.log(objMail);
    
    $.post( "https://thethestermailing.000webhostapp.com/email.php", objMail)
        .done(function( data ) {
            if(data.sucesso){
                $('#modalSuccess').modal('show');
            }else{
                $('#msgModal').html('<p>Erro ao enviar mensagem, aguarde alguns segundo e tente novamente.</p>');
                $('#modalSuccess').modal('show');
            }            
    });

    
}
