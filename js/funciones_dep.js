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

  //COMPLETA RANGO
  let rango = null;
  $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/deptos.php?a=3",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        rango = JSON.parse(data);
      }
  }); 

  $(rango).each(function (i, item) {
    $("#filtro_precio").append('<option value="'+item.ARRIENDO_DIARIO+'">'+item.ARRIENDO_DIARIO+'</option>')
  });
  //COMPLETA SERVICIO
  let region = null;
  $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/deptos.php?a=2",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        region = JSON.parse(data);
      }
  }); 

  $(region).each(function (i, item) {
      $("#filtro_region").append('<option value="'+item.NOMBRE+'">'+item.NOMBRE+'</option>')
  });

//                                                                         DEPARTAMENTOS
//COMPLETA DEPARTAMENTOS
let deptos = null;
$.ajax({
    'async': false,
    'type': "GET",
    'global': false,
    'dataType': 'html',
    'url': "api/deptos.php?a=1",
    'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
    'success': function (data) {
      deptos = JSON.parse(data);
    }
}); 

$(deptos).each(function (i, item) {
    $("#vista_depts").append(`
    <div class="wrapper" id="dep`+item.ID_DEPARTAMENTO+`">
    <h1 style="color:white; id="nombre">`+item.NOMBRE_REGION+`</h1>
    <img class="image i1" src="images/deptos/`+item.IMAGEN+`" alt="img">
    <div class="details">
      <h1>Codigo:`+item.ID_DEPARTAMENTO+`<em id="codigo"></em></h1>
      <h2 id="`+item.NOMBRE+`">`+item.NOMBRE+`</h2>
    </div>
    <p>ARRIENDO DIARIO</p>
    <h2>$`+item.ARRIENDO_DIARIO+`</h2>
    <a type="button" href="dep.html?id=`+item.ID_DEPARTAMENTO+`" value="`+item.ID_DEPARTAMENTO+`" class="btn btn-custom-light">Detalles</a>
  </div>
  `);
});

});