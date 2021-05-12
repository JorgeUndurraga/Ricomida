$(function(){
 
/////////DATA TOGGLE DE LOS BOTONES/////////////
    $('[data-toggle="tooltip"]').tooltip();

/////////ALERTA DE CORREO ENVIADO/////////////
    $('#enviarCorreo').click(function() {
        alert("El correo fue enviado correctamente...");
});

/* ESTE CÓDIGO ES LO MISMO DE ARRIBA       
    $('[id="enviarCorreo"]').click(function() {
                alert("El correo fue enviado correctamente...");
    });
*/
/////////TEXTO EN ROJO PREPARACION Y RECETAS /////////////

    $("h5").slice(1).dblclick(function() {
        $("h5").slice(1).toggleClass( "dbl" );
        $("h5").slice(2).toggleClass( "dbl" );
    });

    $("h5").slice(2).dblclick(function() {
        $("h5").slice(1).toggleClass( "dbl" );
    });

/*Con esta alternativa la letra queda en rojo pero si reitero el doble click NO vuelve a negro.
$("h5").on("dblclick", function(){
    $(this).addClass("dbl");
    })
*/

////////////////////////////////////////////////////////////////////////
/*
///ESTUDIO DE CÓMO FUNCIONA EL SLICE (No aplicado en el desafío))
var ingredientes =   ($("h5").slice(2))-($("h5").slice(1));
var encabezado =  $("h5");
console.log(ingredientes);
console.log(encabezado);

ingredientes.dblclick(function() {
    $(this).css("color", "#e83e8c");
})
*/

/////////FUNCIÓN QUE HACE DESAPARECEER EL TEXTO/////////
    $("h3").on("click",(function () {
        $('.card-text').toggle();
        }))

///Con este código desparace el texto de la tarjeta que le correspeonde 
/*
$("h3").on('click',(function () {
        $(this).siblings('p').toggle();
        }))
*/
})
