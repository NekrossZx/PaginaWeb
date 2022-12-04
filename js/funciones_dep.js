$(document).ready(function () {
    //                                                                                       GENERAL

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
      <img class="image i1" src="images/deptos/`+item.IMAGEN+`.jpg" alt="img">
      <div class="details">
        <h1>Codigo:`+item.ID_DEPARTAMENTO+`<em id="codigo"></em></h1>
        <h2 id="`+item.NOMBRE+`">`+item.NOMBRE+`</h2>
      </div>
      <p>ARRIENDO DIARIO</p>
      <h2>$`+item.ARRIENDO_DIARIO+`</h2>
      <button type="button" value="`+item.ID_DEPARTAMENTO+`" id="btn_`+item.ID_DEPARTAMENTO+`" class="btn btn-custom-light btn-detalle" form="detalle">Detalles</button>
    </div>
    `);
  });

  $(".btn-detalle").on("click", function (){
    let select = $(this).val();
    $("#detalle_depto").val(select);
    let form = $("#detalle_depto").serializeArray();
    localStorage.setItem("detalle", JSON.stringify(form));

    window.location.replace("dep.html?id="+select);
  });

});