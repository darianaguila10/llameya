/*------------------------
INICIAMOS WOW
-------------------------*/
new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
smoothScroll.init({
    speed: 800, // Integer. How fast to complete the scroll in milliseconds
    offset: 100, // Integer. How far to offset the scrolling anchor location in pixels

});

/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
$(function() {
    $(window).scroll(function() {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });

});

/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
$(window).scroll(function() {
    var m = $('#menu-principal'); 
    var nav = $('.encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        nav.addClass("fondo-menu");
        m.addClass("fondo-menu");
    } else {
        nav.removeClass("fondo-menu");
        m.removeClass("fondo-menu");
    }
});

/*---------------------------------
   PIE CHART
 ----------------------------------*/
var config = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                10,
                10,
                20,
                20,
                40,
            ],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)'
            
            ],
            label: 'Clientes'
        }],
        labels: [
            'EE.UU',
            'Cuba',
            'España',
            'Venenzuela',
            'Alemania'
        ]
    },
    options: {
        responsive: true
    }
};

window.onload = function() {
    var ctx = document.getElementById('chart-area').getContext('2d');
    window.myPie = new Chart(ctx, config);
};

/*---------------------------------
   COUNTER
 ----------------------------------*/
$(".counter-up").counterUp({
    delay: 10,
    time: 600
});

/*---------------------------------
   TOGGLE
 ----------------------------------*/
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})



/*---------------------------------
   ACTIVE-MENU
 ----------------------------------*/
$('a[href*="#"]:not([href="#"])').on('click', function() {
    if ($(this).parents('.nav-menu').length) {
        $('.nav-menu .active').removeClass('active');
        $('.in').removeClass('in');
        $(this).closest('li').addClass('active');
    }
});