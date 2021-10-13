//mudar cor do menu ao rolar scroll
$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('.navbar-custom').attr('style',"background-color: rgba(1, 17, 112, 0.5)!important");
    }else{
        
        $('.navbar-custom').attr('style',"background-color: #011170!important");
    }
});

//Whatsapp button
(function () {
    var options = {
        whatsapp: "+55(11)98717-5315", // WhatsApp number
        call_to_action: "Fale Conosco Agora!", // Call to action
        position: "left", // Position may be 'right' or 'left'
    };
    var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();