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
                            var html2 = '';
                            html2 = html2 + '<h3 style="margin-bottom: 1em">' + rows[i].titulo + '</h3>';
                            if(rows[i].texto){
                                html2 = html2 + '<p>' + rows[i].texto + '</p>';
                            }
                            if(rows[i].link){
                                html2 = html2 + '<a href="' + rows[i].link + '">Saiba mais</a>';
                            }
                            $("#carTxt").html(html2);
                        }else{
                            html = html + '<div class="carousel-item">';
                        }
                        html = html + '<div class="rounded-circle" style="background-image: url(\'' + rows[i].imagem + '\'); background-color: #cccccc; background-position: center; background-repeat: no-repeat; background-size: cover; height: 100%;">';
                        if(rows[i].link){
                            html = html + '<a href="' + rows[i].link + '">';
                            html = html + '<img class="img-fluid w-100" src="images/circulo-branco.png" alt="Slide"/>';
                            html = html + '</a>';
                        }else{
                            html = html + '<img class="img-fluid w-100" src="images/circulo-branco.png" alt="Slide"/>';
                        }
                        html = html + '</div>';
                        html = html + '<input type="hidden" value="' + rows[i].texto + '" id="carTexto" />';
                        html = html + '<input type="hidden" value="' + rows[i].titulo + '" id="carTitulo" />';
                        html = html + '<input type="hidden" value="' + rows[i].link + '" id="carLink" />';

                        html = html + '</div>';
                    }

                    $('#carouselHome').html(html);
                }
        });

 }
 
 $('#carouselExampleFade').on('slid.bs.carousel', function () {
    var texto = $('.carousel-item.active #carTexto').val();
    var titulo = $('.carousel-item.active #carTitulo').val();
    var link = $('.carousel-item.active #carLink').val();
    var html = '';
    html = html + '<h3 style="margin-bottom: 1em">' + titulo + '</h3>';
    if(texto != "" && texto != null){
        html = html + '<p>' + texto + '</p>';
    }
    if(link != "" && link != null){
        html = html + '<a href="' + link + '">Saiba mais</a>';
    }
    console.log(link);
    $("#carTxt").html(html);
  });