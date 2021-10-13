//habilitar whatsapp
var enableButtonWhatsapp = "0";
if($('#enableButtonWhatsapp').val()){
    enableButtonWhatsapp = $('#enableButtonWhatsapp').val();
}

//mudar cor do menu ao rolar scroll
$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('.navbar-custom').attr('style',"background-color: rgba(1, 17, 112, 0.5)!important");
        $('.dropdown-menu').attr('style',"background-color: rgba(1, 17, 112, 0.5)!important");
    }else{
        
        $('.navbar-custom').attr('style',"background-color: #011170!important");
        $('.dropdown-menu').attr('style',"background-color: #011170!important");
    }
});

//Whatsapp button
if(enableButtonWhatsapp == "1"){
    (function () {
        var options = {
            whatsapp: "+55(11)97852-6516", // WhatsApp number
            call_to_action: "Fale Conosco Agora!", // Call to action
            position: "right", // Position may be 'right' or 'left'
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
}

//onload
$(document).ready(function(){
    
});