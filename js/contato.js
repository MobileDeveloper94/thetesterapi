function SelectContato(destino){
    if(destino === "email"){
       $('#contatoSelect').fadeOut();
       $('#contatoEmail').fadeIn();

    }
    else if(destino === "whatsapp"){
        window.open("https://api.whatsapp.com/send?phone=5511978526516&text=Olá%20The%20Thester,%20Quero%20mais%20informacoes%20sobre%20Seguranca%20da%20Informacao");
    }
}

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
    
    $.post( "http://thethestermailing.000webhostapp.com/email.php", objMail)
        .done(function( data ) {
            console.log(data);
            /*$('#modalLoading').modal('hide');*/
            $('#modalSuccess').modal('show');
    });

    
}

function ValidaEmail(email){
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
        return false;
    }else{
        return true;
    }
}