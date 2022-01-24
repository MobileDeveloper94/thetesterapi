var data = {};
var pagina = 1;
var filtro = 'TODAS';

$(document).ready(function(){
    LoginCheck();
    ParametrosGet();
    
    if(data['pagina']){
      pagina = data['pagina'];
    }

    if(data['filtro']){
      filtro = data['filtro'];
    }

    LoadNoticias();
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

function LoadNoticias(){
  $('#table0').hide();
  $('#divLoad').show();

  //noticias
  var data = {
    action: 'LISTAR',
    key: 'e19055b167dd976ae6a93174d3f3a709d5c43043',
    pagina: pagina,
    filtro: filtro,
    id_noticia: 0 
  };
  var obj = { obj: JSON.stringify(data)};
  
  $.post( "https://thethestermailing.000webhostapp.com/noticia.php", obj)
      .done(function( data ) {
        if(data.sucesso){
          var html = '';
          data.dados.dados.forEach(function(row){
            
            html = html + '<tr>';
            html = html + '<th scope="row">' + row.id + '</th>';
            html = html + '<td>' + row.titulo + '</td>';
            if(row.imagem != ''){
              html = html + '<td><img src="' + row.imagem + '" width="50px"/></td>';
            }else{
              html = html + '<td> </td>';
            }
            html = html + '<td>' + row.dta_noticia + '</td>';
            html = html + '<td><a href="noticia.html?id=' + row.id + '" class="btn btn-primary btn-sm" data-toggle="tooltip" data-placement="top" title="Editar notícia"><i class="fas fa-edit"></i></a> ';
            html = html + '</tr>';
          });

          $('#tbDados').html(html);
          
          //paginação
          var paginas = data.dados.paginas;
          var pagina = parseInt(data.dados.pagina);
          html = '';
          var prev = pagina - 1;
          var next = pagina + 1;

          if(pagina > 1){
            html = html + '<li class="page-item ">';
            html = html + '<a class="page-link" href="noticias.html?pagina=' + prev + '"> << </span>';                        
            html = html + '</li>';
          }else{
            html = html + '<li class="page-item disabled">';
            html = html + '<span class="page-link"> << </span>';
            html = html + '</li>';
          }
          
          for(var i=1; i<=paginas; i++){
            if(i == pagina){
              html = html + '<li class="page-item active">';
              html = html + '<span class="page-link">';
              html = html + i;
              html = html + '<span class="sr-only">(current)</span>';
              html = html + '</span>';
              html = html + '</li>';
            }else{
              html = html + '<li class="page-item"><a class="page-link" href="noticias.html?pagina=' + i + '">'+ i + '<br>';
            }          
            html = html + '</a></li>';
          }

          if(pagina < paginas){
            html = html + '<li class="page-item ">';
            html = html + '<a class="page-link" href="noticias.html?pagina=' + next + '"> >> </span>';                        
            html = html + '</li>';
          }else{
            html = html + '<li class="page-item disabled">';
            html = html + '<span class="page-link"> >> </span>';
            html = html + '</li>';
          }

          $('#paginacao').html(html);
          
          $('#divLoad').hide();
          $('#table0').fadeIn();
        }else{
          console.log(data.mensagem);
        }  
                
  });
}



function SelectNoticia(val){
  var id = val.id.replace('pill', '');
  

  $('.pill').removeClass('active');
  $('#pill' + id).addClass('active');
  
  if(id == "0"){
    filtro = 'TODAS';
  }else if(id == "1"){
    filtro = 'HOME';
  }else if(id == "2"){
    filtro = 'DIARIO';
  }
  
  pagina = 1;

  LoadNoticias();
}