document.addEventListener("DOMContentLoaded", () => {
    const perfil = document.querySelector("#form_perfil");
    const reservas = document.querySelector("#mis_reservas");
    const p_btn = document.querySelector("#perfil_btn");
    const r_btn = document.querySelector("#reservas_btn");
    const fondo = document.querySelector("#fondo");

    document.querySelector("#reservas").addEventListener("click", e => {
        e.preventDefault();
        perfil.classList.add("form-hidden");
        p_btn.classList.remove("active");
        reservas.classList.remove("form-hidden");
        r_btn.classList.add("active");
        fondo.classList.add("large")
    });

    document.querySelector("#perfil").addEventListener("click", e => {
        e.preventDefault();
        reservas.classList.add("form-hidden");
        r_btn.classList.remove("active");
        perfil.classList.remove("form-hidden");
        p_btn.classList.add("active");
        fondo.classList.remove("large")
    });
});

$(document).ready(function () {    

  //COMPLETA DEPARTAMENTOS
  let usuario = null;
  $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/cuenta.php?a=2",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        usuario = JSON.parse(data);
      }
  }); 

  $(usuario).each(function (i, item) {
    $("#form_perfil").append(`
    <form  class="form-horizontal">
      <fieldset class="fieldset">
          <h3 class="fieldset-title">Información Personal</h3>
          <div class="form-group">
              <label class="col-md-2 col-sm-3 col-xs-12 control-label">RUT</label>
              <div class="col-md-12 col-sm-9 col-xs-10">
                  <input type="text" class="form-control" id="rut" name="rut" value="`+item.RUT_CLIENTE+`" readonly>
              </div>
          </div>
          <div class="form-group">
              <label class="col-md-2 col-sm-3 col-xs-12 control-label">Nombres</label>
              <div class="col-md-12 col-sm-9 col-xs-10">
                  <input type="text" class="form-control" id="nombres" name="nombres" value="`+item.NOMBRES+`">
              </div>
          </div>
          <div class="form-group">
              <label class="col-md-2 col-sm-3 col-xs-12 control-label">Apellidos</label>
              <div class="col-md-12 col-sm-9 col-xs-10">
                  <input type="text" class="form-control" id="apellidos" name="apellidos" value="`+item.APELLIDOS+`">
              </div>
          </div>
      </fieldset>
      <fieldset class="fieldset">
          <h3 class="fieldset-title">Información de Cuenta</h3>
          <div class="form-group">
              <label class="col-md-2  col-sm-3 col-xs-12 control-label">Email</label>
              <div class="col-md-12 col-sm-9 col-xs-10">
                  <input type="email" class="form-control" id="correo" name="correo" value="`+item.EMAIL+`"> 
              </div>
          </div>
          <div class="form-group">
              <label class="col-md-2  col-sm-3 col-xs-12 control-label">Contraseña Actual</label>
              <div class="col-md-12 col-sm-9 col-xs-10">
                  <input type="password" class="form-control" id="pass" name="pass" value="`+item.CONTRASENA+`">
              </div>
          </div>
          <div class="form-group">
              <label class="col-md-2  col-sm-3 col-xs-12 control-label">Nueva Contraseña</label>
              <div class="col-md-12 col-sm-9 col-xs-10">
                  <input type="password" class="form-control" id="newpass" name="newpass">
              </div>
          </div>
      </fieldset>
      <hr>
      <div class="form-group">
          <div class="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
              <button class="btn btn-custom-light">Actualizar cuenta</button>
          </div>
      </div>
    </form>`);
  });

  $("#dt_reserva").DataTable({
    "ajax":{
      "url": "api/cuenta.php?a=1",
      "type": "POST",
      "dataSrc": ""
    },
    aaSorting: [0, 'desc'],
      bDestroy: false,
      processing: false,
      serverSide: false,
      pageLength: 7,
      lengthChange: true,
      paging: true,
      searching: false,
      ordering: true,
      info: true,
      autoWidth: true,
      responsive: true,
    language: {
      search: '<i class="fa fa-search"></i>',
      searchPlaceholder: "Buscar...",
      emptyTable: "SIN DATOS INGRESADOS",
    },
    columns: [
      {
        className: "dt-nro_reserva",
        render: function (data, type, dt) {
          return validarVacio(dt.NRO_RESERVA);
        }
      },
      {
        className: "text-nowrap dt-estado",
        render: function (data, type, dt) {
          return validarVacio(dt.ESTADO);
        }
      },
      {
        className: "text-nowrap dt-nombre_depto",
        render: function (data, type, dt) {
          return validarVacio(dt.NOMBRE);
        }
      },
      {
        className: "text-nowrap dt-region",
        render: function (data, type, dt) {
          return validarVacio(dt.NOMBRE_REGION);
        }
      },
      {
        className: "text-nowrap dt-fecha_reserva",
        render: function (data, type, dt) {
          return validarVacio(dt.FECHA_RESERVA);
        }
      },
      {
        className: "text-nowrap dt-fecha_inicio",
        render: function (data, type, dt) {
          return validarVacio(dt.RESERVA_INICIO);
        }
      },
      {
        className: "text-nowrap dt-fecha_termino",
        render: function (data, type, dt) {
          return validarVacio(dt.RESERVA_TERMINO);
        }
      },
      {
        className: "dt-valor_total",
        render: function (data, type, dt) {
          return validarVacio(dt.VALOR_TOTAL);
        }
      },
      {
        targets: -1,
        data: null,
        defaultContent: '<button class="btn-small remove"><i class="fa fa-trash"></i></button>',
      }
    ]
  });

  function validarVacio(txt)
  {
    let valor = txt;
    if (txt == null || txt == undefined || txt == '')
    {
      valor = 'Sin Información';
    }
    return valor;  
  }

  $('#dt_reserva').on('click', '.remove', function () {
    var table = $('#dt_reserva').DataTable();
    var data = table.rows(['tr']).data().toArray();
    var form = JSON.stringify( data );
    var confirmar = confirm("¿Desea cancelar la reserva seleccionada?");

    if(confirmar===true){
      $.ajax({
        data: { data: JSON.stringify(form) },
        url: "api/cuenta.php?a=3",
        type: 'POST',
        success: function (data) {
            if (data != null || data != '') {
                //LIMPIAR FORMULARIO
                table.row($(this).parents('tr')).remove().draw();
                let dt = $('#dt_maestro').DataTable();
                dt.ajax.reload();
            }
            else {
                toastConfig();
                Command: toastr["danger"]("Error de conexión", "Error");
            }
        }
      });
    }else{
      return false;
    }

  });
});