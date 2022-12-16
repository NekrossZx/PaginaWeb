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

  let confirmar_user = sessionStorage.getItem("user");
  if (confirmar_user == undefined || confirmar_user == '' || confirmar_user == null) {
    window.location.replace('login.php');
  }

  let login = sessionStorage.getItem("login");
  let obj = JSON.parse(login);
  let rut = obj[0].RUT_CLIENTE;

  let rut_login = `[{"name":"rut_cliente","value":"` + rut + `"}]`;

  //COMPLETA DEPARTAMENTOS
  let usuario = null;
  $.ajax({
    'async': false,
    'type': "POST",
    'global': false,
    'dataType': 'html',
    'url': "api/cuenta.php?a=2",
    'data': { data: rut_login },
    'success': function (data) {
      usuario = JSON.parse(data);
    }
  });

  $(usuario).each(function (i, item) {
    $("#form_perfil").append(`
    <form id="actualizar_perfil" class="form-horizontal">
      <fieldset class="fieldset">
          <h3 class="fieldset-title">Información Personal</h3>
          <div class="form-group">
              <label class="col-md-2 col-sm-3 col-xs-12 control-label">RUT</label>
              <div class="col-md-12 col-sm-9 col-xs-10">
                  <input type="text" class="form-control" id="rut" name="rut" value="`+ item.RUT_CLIENTE + `" readonly>
              </div>
          </div>
          <div class="form-group">
              <label class="col-md-2 col-sm-3 col-xs-12 control-label">Nombres</label>
              <div class="col-md-12 col-sm-9 col-xs-10">
                  <input type="text" class="form-control" id="nombres" name="nombres" value="`+ item.NOMBRES + `">
              </div>
          </div>
          <div class="form-group">
              <label class="col-md-2 col-sm-3 col-xs-12 control-label">Apellidos</label>
              <div class="col-md-12 col-sm-9 col-xs-10">
                  <input type="text" class="form-control" id="apellidos" name="apellidos" value="`+ item.APELLIDOS + `">
              </div>
          </div>
          <div class="form-group">
              <label class="col-md-2 col-sm-3 col-xs-12 control-label">Télefono</label>
              <div class="col-md-12 col-sm-9 col-xs-10">
                  <input type="text" class="form-control" id="telefono" name="telefono" value="`+ item.TELEFONO + `">
              </div>
          </div>
      </fieldset>
      <fieldset class="fieldset">
          <h3 class="fieldset-title">Información de Cuenta</h3>
          <div class="form-group">
              <label class="col-md-2  col-sm-3 col-xs-12 control-label">Email</label>
              <div class="col-md-12 col-sm-9 col-xs-10">
                  <input type="email" class="form-control" id="correo" name="correo" value="`+ item.EMAIL + `"> 
              </div>
          </div>
          <div class="form-group">
              <label class="col-md-2  col-sm-3 col-xs-12 control-label">Contraseña Actual</label>
              <div class="col-md-12 col-sm-9 col-xs-10">
                  <input type="password" class="form-control" id="pass" name="pass">
              </div>
          </div>
      </fieldset>
      <hr>
      <div class="form-group">
          <div class="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
              <button type="button" id="actualizar" class="btn btn-custom-light">Actualizar cuenta</button>
          </div>
      </div>
    </form>`);
  });

  let fono = $("#telefono").val();
  if (fono == 0 || fono == null || fono == undefined || fono == '') {
    $("#telefono").val("NO REGISTRADO");
  }
  $("#dt_reserva").DataTable({
    "ajax": {
      "url": "api/cuenta.php?a=1",
      "type": "POST",
      "dataSrc": "",
      "data": { data: rut_login }
    },
    aaSorting: [0, 'desc'],
    bDestroy: false,
    processing: true,
    serverSide: false,
    pageLength: 10,
    lengthChange: false,
    paging: false,
    searching: false,
    ordering: true,
    info: false,
    autoWidth: false,
    responsive: true,
    language: {
      search: '<i class="fa fa-search"></i>',
      searchPlaceholder: "Buscar...",
      emptyTable: "SIN HISTORIAL DE RESERVAS",
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

  function validarVacio(txt) {
    let valor = txt;
    if (txt == null || txt == undefined || txt == '') {
      valor = 'Sin Información';
    }
    return valor;
  }

  $('#dt_reserva tbody').on('click', '.remove', function () {
    var table = $('#dt_reserva').DataTable();
    var data = table.row($(this).parents('tr')).data();
    var obj = data;
    var cancelacion = `[{"name":"nro_reserva","value":"` + obj.NRO_RESERVA + `"}]`;
    var confirmar = confirm("¿Desea cancelar la reserva seleccionada? N° Reserva: " + obj.NRO_RESERVA);

    if (confirmar === true) {
      $.ajax({
        'data': { data: cancelacion },
        'url': "api/cuenta.php?a=3",
        'type': 'POST',
        complete: function () {
          setTimeout(function () {
            table.ajax.reload();
          }, 2000);
        }
      });
    } else {
      return false;
    }
  });

  $('#actualizar').on('click', function () {
    let form = $("#actualizar_perfil").serializeArray();
    sessionStorage.setItem("update", JSON.stringify(form));
    let error = 0;
    //VALIDACION
    $(form).each(function (i, item) {
      if (item.value == '' || item.value == null || item.value == undefined) {
        error = 1;
        $("#" + item.name).addClass('bg-danger');

      }
    });

    if (error == 1) {
      toastConfig();
      Command: toastr["warning"]("Faltan Datos Por Completar", "Atención");
    }
    else {
      var confirmar = confirm("¿Desea actualizar la información?");
      if (confirmar === true) {
        $.ajax({
          data: { data: JSON.stringify(form) },
          url: "api/cuenta.php?a=4",
          type: 'POST',
          complete: function () {
            sessionStorage.setItem("login", `[{RUT_CLIENTE: "` + form[0].value + `", NOMBRES: "` + form[1].value + `", APELLIDOS: "` + form[2].value + `", TELEFONO: "` + form[3].value + `", EMAIL:"` + form[4].value + `", PASS:"` + form[5].value + `"}]`);
            window.location.reload();
          }
        });
      } else {
        return false;
      }
    }

  });
});