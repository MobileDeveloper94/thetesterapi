//onload
$(document).ready(function(){
    LoadCarousel();
 });

 function LoadCarousel(){
    var dataNoticia = {
        action: 'LISTARHOME',
        key: 'e19055b167dd976ae6a93174d3f3a709d5c43043',
    };
      var obj = { obj: JSON.stringify(dataNoticia)};
      
      $.post( "https://thethestermailing.000webhostapp.com/noticia.php", obj)
          .done(function( data ) {
                if(data.sucesso){
                    var html = '';
                    var rows = data.dados.dados;
                    
                    for(var i =0; i<rows.length; i++){
                        if(i == 0){
                            html = html + '<div class="carousel-item active">';
                        }else{
                            html = html + '<div class="carousel-item">';
                        }
                        
                        html = html + '<img class="img-fluid d-block w-100 hm-cr" src="' + rows[i].imagem + '" alt="Slide">';
                        html = html + '<div class="carousel-caption">';
                        html = html + '<h3>' + rows[i].titulo + '</h3>';
                        html = html + '<p>' + rows[i].texto + '</p>';
                        html = html + '</div>';
                        html = html + '</div>';
                    }

                    $('#carouselHome').html(html);
                }
        });

 }
 
 