//start
$(document).ready(function () {

    RenderMenu();
    RenderFooter();
    
   
    $('#modalLoading').modal('show');

});

function SelectContato(destino){
    if(destino === "email"){
       $('#contatoSelect').fadeOut();
       $('#contatoEmail').fadeIn();

    }
    else if(destino === "whatsapp"){
        window.location.href = "https://api.whatsapp.com/send?phone=5511987175315&text=Olá%20The%20Thester,%20Quero%20mais%20informacoes%20sobre%20Seguranca%20da%20Informacao";
    }
}

function EnviaEmail(){
    var Contato = {
        Nome: $('#txtNome').val(),
        Email: $('#txtEmail').val(),
        Mensagem: $('#txtMensagem').val(),
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
    
    //tudo ok, prosseguir

    var objMail = {
        Nome: Contato.Nome,
        EmailFrom: Contato.EmailFrom,
        EmailTo: Contato.EmailTo,
        Mensagem: Contato.Mensagem,
        Assunto: "The Thester recebeu uma nova mensagem",
        Alias: "The Thester Site",
        Key: "e19055b167dd976ae6a93174d3f3a709d5c43043" 
    };

    
    $.post( "https://thethestermailing.000webhostapp.com/email.php", objMail)
        .done(function( data ) {
            console.log( "Data Loaded: " + data );
    });
}