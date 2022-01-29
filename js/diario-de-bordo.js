var data = {};
var filtro = 1;

$(document).ready(function(){
    
    ParametrosGet();
    
    if(data['filtro']){
      filtro = data['filtro'];
    }

    LoadNoticias();
    OrdenarPor();
});

function LoadNoticias(){
    var data = {
      action: 'LISTARDIARIO',
      key: 'e19055b167dd976ae6a93174d3f3a709d5c43043',
      filtro: filtro 
    };
    var obj = { obj: JSON.stringify(data)};
    
    $.post( "https://thethestermailing.000webhostapp.com/noticia.php", obj)
        .done(function( data ) {
            if(data.sucesso){
                var arr = data.dados.dados;
                var tam = arr.length
                var html = '';
                var breaks = 0;
                
                for(var i = 0; i < tam; i++){
                    console.log(arr[i]);
                    var pos = i + 1;
                    
                    if(pos > 6){
                        html = html + '<div class="w3-card-4 w3-margin w3-white" id="noticia' + pos + '" style="display:none">';
                    }else{
                        html = html + '<div class="w3-card-4 w3-margin w3-white" id="noticia' + pos + '">';
                    }
                    
                    html = html + '<a href="noticia.html?id=' + arr[i].id + '"><img src="' + arr[i].imagem + '" alt="" style="width:100%"></a>';
                    html = html + '<div class="w3-container">';
                    html = html + '<a href="noticia.html?id=' + arr[i].id + '"><h3><b>' + arr[i].titulo + '</b></h3></a>';
                    html = html + '<h5>Por ' + arr[i].nome_login + ' <span class="w3-opacity">' + DataPorExtenso(arr[i].dta_noticia) + '</span></h5>';
                    html = html + '</div>';
    
                    html = html + '<div class="w3-container">';
                    html = html + arr[i].texto.substring(0, 165) + "...";
                    html = html + '<div class="w3-row">';
                    html = html + '<div class="w3-col m8 s12">';
                    html = html + '<p><a class="w3-button w3-padding-large w3-white w3-border" href="noticia.html?id=' + arr[i].id + '"><b>Saiba mais &raquo;</b></a></p>';
                    html = html + '</div>';
                    html = html + '<div class="w3-col m4 w3-hide-small">';
                    //html = html + '<p><span class="w3-padding-large w3-right"><b>Visualizações &nbsp;</b> <span class="w3-tag">50</span></span></p>';
                    html = html + '</div>';
                    html = html + '</div>';
                    html = html + '</div>';
                    html = html + '</div>';
                    html = html + '<hr>';

                    if(pos % 6 == 0 && pos < tam){
                        breaks++;
                        '<div class="text-center">';
                        '<button id="abre' + breaks + '" class="w3-card-4 w3-button w3-padding-large w3-white w3-border" onclick="AbreMais(this.id);"><b>Ver mais <i class="fas fa-sort-down"></i></b></button>';
                        '</div>';
                        '<hr>';        
                    }
                };
                

                $('#conteudo').html(html);

            }
        });
  }

function AbreMais(idx){
    $('#' + idx).hide();
    var i = idx.replace('abre', '');
    var pos = parseInt(i) * 6;
    pos = pos + 1;
    
    $('#noticia' + pos).fadeIn();
    $('#noticia' + (pos + 1)).fadeIn();
    $('#noticia' + (pos + 1)).fadeIn();
    $('#noticia' + (pos + 1)).fadeIn();
    $('#noticia' + (pos + 1)).fadeIn();
    $('#noticia' + (pos + 1)).fadeIn();
  
}

function OrdenarPor(){
    var html = ''
    if(filtro == 1){
        $('.filter1').html('<span class="w3-tag w3-margin-bottom">Mais recentes</span></a>');
        $('.filter2').html('<span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Mais antigas</span></a>');
    }else{
        $('.filter1').html('<span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Mais recentes</span></a>');
        $('.filter2').html('<span class="w3-tag w3-margin-bottom">Mais antigas</span></a>');
    }       
}