var data = {};
var idNoticia = 0;
$(document).ready(function(){
  LoginCheck();
  ParametrosGet();
  
  if(data['id']){
    idNoticia = data['id'];
  }

  $('#btnSalvar').click(Salvar);

  LoadDados();
});


function ParametrosGet(){
  var query = location.search.slice(1);
    var partes = query.split('&');
    
    partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
    });    
}

function Salvar(){
  
  
  var ativo = 0;
    var home = 0; 
    var redes = 0;
    
    if($('#lbTitulo').val() == ''){
      alert('Preencha um título');
      $('#lbTitulo').focus();
      return;
    }
    
    if($('.nicEdit-main').html() == ''){
      alert('Preencha um texto');
      $('.nicEdit-main').focus();
      return;
    }

    if($('#flAtivo').prop('checked')){
      ativo = 1;
    }
     
    if($('#flHome').prop('checked')){
      home = 1;
    }

    if($('#flRedes').prop('checked')){
      redes = 1;
    }

    if($("#imgTest img").attr('src')){
      if($("#imgTest img").attr('src').length > 180000){
        alert('A imagem é muito grande');
        return;
      }
    }
    

    $("#btnSalvar").prop('disabled',true);
    $("#btnSalvar").html('<i class="fab fa-empire fa-spin"></i> Aguarde...');
  
  if(idNoticia != 0){
  //Alterar
    
    var data2 = {
      action: "ALTERAR", 
      key: "e19055b167dd976ae6a93174d3f3a709d5c43043",
      titulo: $('#lbTitulo').val(),
      texto: $('.nicEdit-main').html(),
      imagem: $("#imgTest img").attr('src'),
      fl_home: home, 
      fl_ativo: ativo, 
      fl_redes: redes,
      id_login: idUser, 
      useragent: navigator.userAgent, 
      id_noticia: idNoticia
    };
  
  var obj2 = { obj: JSON.stringify(data2)};

  $.post( "https://thethestermailing.000webhostapp.com/noticia.php", obj2)
      .done(function( data ) {
        alert('Cadastro alterado com sucesso.');
        window.location.href = 'noticia.html?id=' + idNoticia;  
      });
  }else{
  //cadastro novo

    var data2 = {
      action: "INCLUIR", 
      key: "e19055b167dd976ae6a93174d3f3a709d5c43043",
      titulo: $('#lbTitulo').val(),
      texto: $('.nicEdit-main').html(),
      imagem: $("#imgTest img").attr('src'),
      fl_home: home, 
      fl_ativo: ativo, 
      fl_redes: redes,
      id_login: idUser, 
      useragent: navigator.userAgent
    };

  var obj2 = { obj: JSON.stringify(data2)};

    $.post( "https://thethestermailing.000webhostapp.com/noticia.php", obj2)
      .done(function( data ) {
        if(data.sucesso){
          alert(data.mensagem);
          window.location.href = 'noticia.html?id=' + data.id; 
        }else{
          console.log(data);
          alert('Erro. Veja o console para mais detalhes.');
          $("#btnSalvar").prop('disabled',false);
          $("#btnSalvar").html('Salvar');
        }
         
    });
  }
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

function LoadDados(){
  if(idNoticia == 0){
    $('#titlePage').text('Cadastro de Notícia');
  }else{

    var dataNoticia = {
      action: 'LISTAR',
      key: 'e19055b167dd976ae6a93174d3f3a709d5c43043',
      pagina: 0,
      fl_ativo: 0,
      id_noticia: idNoticia 
    };
    var obj = { obj: JSON.stringify(dataNoticia)};
    
    $.post( "https://thethestermailing.000webhostapp.com/noticia.php", obj)
        .done(function( data ) {
          if(data.dados.total > 0){
            $('#titlePage').text('Alteração de Notícia');
            var row = data.dados.dados[0];
            
            $('#lbTitulo').val(row.titulo);
            $('.nicEdit-main').html(row.texto);
            if(row.imagem){
              $('#imgTest').html('<img src="' + row.imagem + '" />');
            }
            $('#lbData').val(row.dta_noticia);
            $('#lbLogin').val(row.id_login);

            if(row.fl_ativo == 1){
              $('#flAtivo').attr('checked', 'checked');
            }

            if(row.fl_home == 1){
              $('#flHome').attr('checked', 'checked');
            }

            if(row.fl_redes == 1){
              $('#flRedes').attr('checked', 'checked');
            }
          }else{
            var html = `
              <div class="container text-center">
              <h3><i class="fas fa-exclamation-triangle" style="color:red"></i> Notícia não encontrada </h3>
              <br>
              <a href="noticias.html" class="btn btn-danger">Voltar</a>
              </div>
            `;
            $('#main').html(html);
          }
        });

    

  }
}