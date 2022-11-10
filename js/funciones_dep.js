$(document).ready(function () {
  //                                                                                       GENERAL
  //ALERTA TOAST
  function toastConfig() {
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-full-width",
    preventDuplicates: false,
    onclick: null,
    showDuration: "2000",
    hideDuration: "2000",
    timeOut: "2000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
    preventDuplicates: true,        
    };
    return toastr.options;
  }

//                                                                                 FILTRO

  //MOSTRAR VALOR EN RANGE

    //-----JS for Price Range slider-----

    $( function() {
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 1450,
        values: [ 0, 1450 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    } );

    //COMPLETA SERVICIO
    let region = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/login.php?a=4",
        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
        'success': function (data) {
          region = JSON.parse(data);
        }
    }); 

    $(region).each(function (i, item) {
        $("#filtro_region").append('<option value="'+item.NOMBRE+'">'+item.NOMBRE+'</option>')
    });

//                                                                         DEPARTAMENTOS

    let contador = 1; 

  //COMPLETA SERVICIO
    let deptos = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/login.php?a=3",
        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
        'success': function (data) {
          deptos = JSON.parse(data);
        }
    }); 

    $(deptos).each(function (i, item) {
        $("#vista_depts").append(`
        <div class="wrapper" id="dep`+contador+`">
        <h1 style="color:white; id="`+item.NOMBRE+`">Región: `+item.NOMBRE+`</h1>
        <img class="image i1" src="images/deptos/depto`+contador+`.jpg" alt="img">
        <div class="details">
          <h1>Codigo:`+item.ID_DEPARTAMENTO+`<em id="codigo"></em></h1>
          <h2 id="nombre">`+item.NOMBRE+`</h2>
          <h1><em>Incluye</em></h1>
          <h1><em>AQUI VAN LOS SERVICIOS</em></h1>
        </div>
        <p style="color:white;">Valor por día</p>
        <h1 id="valor_diario">$`+item.ARRIENDO_DIARIO+`</h1>
        <a type="button" href="dep`+contador+`.html" class="btn btn-custom-light">Detalles</a>
      </div>
      `)
      contador++
    });

});