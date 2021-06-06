//start
$(document).ready(function () {
    var data = GetUrlData();
    
    if(!data['id']){
        Erro('Algumas informações não foram fornecidas.');
    }

    var id = data['id'].split("-");
    var nomeArquivo = "";
    var fileName = "";

    switch(id[0]){
        case 'Ebook':
            fileName = "Ebooks\\";
            break;
        default:
            Erro('Tipo Arquivo não encontrado!');
    }

    switch(id[1]){
        case 'psc':
            nomeArquivo = "Privacidade de dados na psicologia";
            fileName = fileName + "Ebook1-Psicologia.pdf";
            break;
        default:
            Erro('Arquivo não encontrado!');

    }

    $("#nm_arquivo").text(id[0] + ": " + nomeArquivo);


    $("#btnReceber").click(function() {
        Receber(id[1], fileName);
    });

});

function Erro(arg){
    alert(arg);
    window.location.assign('materiais.html');
}

function Receber(arg1, arg2){
    var Participante = {
        Nome: $('#txtNome').val(),
        Empresa: $('#txtEmpresa').val(),
        Cargo: $('#txtCargo').val(),
        Telefone: $('#txtTelefone').val(),
        Email: $('#txtEmail').val(),
        Id: arg1,
        Key: "e19055b167dd976ae6a93174d3f3a709d5c43043"
    };


    //validacoes
    $('.txtErro').hide();

    if(Participante.Nome === ""){
        $('#txtErroNome').show();
        return; 
    }

    if(Participante.Empresa === ""){
        $('#txtErroEmpresa').show();
        return; 
    }

    if(Participante.Cargo === ""){
        $('#txtErroCargo').show();
        return; 
    }

    if(Participante.Telefone === ""){
        $('#txtErroTelefone').show();
        return; 
    }

    if(!ValidaEmail(Participante.Email)){
        $('#txtErroEmail').show();
        return; 
    }

    //tudo certo
    $('#modalLoading').modal('show');


    $.post( "https://thethestermailing.000webhostapp.com/gravarparticipante.php", Participante)
        .done(function( data ) {
            console.log(data);
            
            

    });
        
    // var objMail = {
    //     Nome: Participante.Nome,
    //     EmailFrom: Participante.Email,
    //     EmailTo: 'contato@thethester.com.br',
    //     Mensagem: "Obrigado por se registrar em TheThester.com! <br><br> Segue anexo o seu material, aproveite!",
    //     Assunto: "Material extra The Thester pra você",
    //     Alias: "The Thester Site",
    //     Key: "e19055b167dd976ae6a93174d3f3a709d5c43043",
    //     Anexo: arg2 
    // };
    // console.log(objMail);
            
    // $.post( "https://thethestermailing.000webhostapp.com/email.php", objMail)
    //     .done(function( data ) {
    //         console.log(data);
    //         $('#modalLoading').modal('hide');
    //         $('#modalSuccess').modal('show');
    //         //window.location.assign('home.html');
    // });
}