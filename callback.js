$(document).ready(function(){
    //funcion que se ejecuta despues de que el documento haya cargado

    // function saludo(){
    //     alert();
    // }

    $('#ejecutar').on('click', function(){
        $('.caja').slideUp(1000, function(){//mismo que lo anterior solo que la funcion se define antes
            $(this).slideDown(1000);
        });
    });

    // $('#ejecutar').on('click', function(){
    //     $('.caja').slideUp(300);
    //     alert('Animacion Iniciada');
    //     $('.caja').slideDown(300);
    // });

});