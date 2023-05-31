jQuery(document).ready(function($) {

    $(document).ready(function() {
        $("#carrusel-clientes").owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        });
        $("#carrusel-plantas").owlCarousel({
            loop: false,
            margin: 20,
            nav: false,
            mouseDrag: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });

    jQuery('#slide-nosotros').slippry({
        slippryWrapper: '<div class="sy-box slider-nosotros" />',
        elements: 'article',
        captions: false,
        controls: false,
        pagerClass: 'slide-pager',
        speed: 500,
        auto: false,
    });

    jQuery('#slide-homepage').slippry({
        slippryWrapper: '<div class="sy-box home-slider" />', 
        elements: 'article',
        controls: false,
        autoHover: false,
    });

    jQuery('#slide-paginas').slippry({
        slippryWrapper: '<div class="sy-box pagina-slider" />', 
        elements: 'article',
        controls: false,
        autoHover: false,
    });

    $('#panel-cotizar').scotchPanel({
        containerSelector: '.carrusel-plantas',
        direction: 'left', 
        duration: 500, 
        transition: 'ease', 
        clickSelector: '.toggle-panel', 
        distanceX: '100%', 
        enableEscapeKey: true 
    });

    $('.toggle-panel').on('click', function(e){
        $('#panel-cotizar span.wpcf7-form-control-wrap.planta select').val($(this).attr('data-rel'));
    });

});