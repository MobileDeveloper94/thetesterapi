var data = {};
var id = 0;

$(document).ready(function(){
    
    ParametrosGet();
    
    if(data['id']){
      id = data['id'];
    }else{
      window.location.href = "diario-de-bordo.html";
    }

    LoadNoticia();
    LoadVejaMais();

  });


function LoadNoticia(){
  //noticia
  var data = {
    action: 'LISTAR',
    key: 'e19055b167dd976ae6a93174d3f3a709d5c43043',
    pagina: 1,
    filtro: 'DIARIO',
    id_noticia: id 
  };
  var obj = { obj: JSON.stringify(data)};
  
  $.post( "https://thethestermailing.000webhostapp.com/noticia.php", obj)
      .done(function( data ) {
        if(data.sucesso){
          
          var html = '';
          
          data.dados.dados.forEach(function(row){
            
            html = html + '<i class="fa fa-user"></i> <small><b> Por '; 
            html = html + row.nome_login; 
            html = html + '</b></small> <i class="far fa-clock"></i> <small>';
            html = html + DataPorExtenso(row.dta_noticia);
            html = html + '</small>';

            $('#autor').html(html);

            html = '';
            html = html + '<img src="' + row.imagem + '" class="img-fluid">'; 
            
            $('#foto').html(html);

            $('#titulo').html(row.titulo);

            $('#texto').html(row.texto);

          });

                      
        }else{
          console.log(data.mensagem);
        }  
                
  });
}

function LoadVejaMais(){
  var data = {
    action: 'LISTARDIARIO',
    key: 'e19055b167dd976ae6a93174d3f3a709d5c43043',
    filtro: 1 
  };
  var obj = { obj: JSON.stringify(data)};
  
  $.post( "https://thethestermailing.000webhostapp.com/noticia.php", obj)
      .done(function( data ) {
        if(data.sucesso){
          var arr = data.dados.dados;
          var count = 0;
          var html = '';
          arr.forEach(function(row){
            
            if(row.id != id && count < 3){
              console.log(row);
              
              html = html + '<div class="col-md-4">';
              html = html + '<div class="card" style="width: 18rem;">';
              html = html + '<a href="noticia.html?id=' + row.id + '"><img class="card-img-top" src="' + row.imagem + '" alt="Card image cap"></a>';
              html = html + '<div class="card-body">';
              html = html + '<a class="card-text" href="noticia.html?id=' + row.id + '">' + row.titulo + '</a>';
              html = html + '</div>';
              html = html + '</div>';
              html = html + '</div>';

              count++;
            }
            
          });

          $('#vejaMais').html(html);
        }
      });
}