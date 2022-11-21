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


  function format(d) {
    return (
        'Full name: ' +
        d.first_name +
        ' ' +
        d.last_name +
        '<br>' +
        'Salary: ' +
        d.salary +
        '<br>' +
        'The child row can contain any data you wish, including links, images, inner tables etc.'
    );
}
 
$(document).ready(function () {
    var dt = $('#example').DataTable({
        processing: true,
        serverSide: true,
        ajax: 'scripts/ids-objects.php',
        columns: [
            {
                class: 'details-control',
                orderable: false,
                data: null,
                defaultContent: '',
            },
            { data: 'first_name' },
            { data: 'last_name' },
            { data: 'position' },
            { data: 'office' },
        ],
        order: [[1, 'asc']],
    });
 
    // Array to track the ids of the details displayed rows
    var detailRows = [];
 
    $('#dt_reserva tbody').on('click', 'tr td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = dt.row(tr);
        var idx = detailRows.indexOf(tr.attr('id'));
 
        if (row.child.isShown()) {
            tr.removeClass('details');
            row.child.hide();
 
            // Remove from the 'open' array
            detailRows.splice(idx, 1);
        } else {
            tr.addClass('details');
            row.child(format(row.data())).show();
 
            // Add to the 'open' array
            if (idx === -1) {
                detailRows.push(tr.attr('id'));
            }
        }
    });
 
    // On each draw, loop over the `detailRows` array and show any child rows
    dt.on('draw', function () {
        detailRows.forEach(function(id, i) {
            $('#' + id + ' td.details-control').trigger('click');
        });
    });
});

    $("#dt_reserva").DataTable({
        "ajax": {
          "url": "api/cuenta.php?a=1",
          "type": "POST",
          "dataSrc": ""
        },
        dom: 'Bfrtip',
        buttons: [
          {text: 'Recargar Reservas',
            action: function ( e, dt, node, config ) 
              {dt.ajax.reload();}
          },
          {
            extend: 'selected',
            text: 'Editar',
            action: function ( e, dt, button, config ) {
              $("#modalEditar").modal('show');
            }
          },
          {
            extend: 'selected',
            text: 'Eliminar',
            action: function ( e, dt, button, config ) {
              $("#modalEliminar").modal('show');
            }
          },
          {
            extend: 'selected',
            text: 'Sin Iniciar',
            action: function ( e, dt, button, config ) {
              $("#modalIniciar").modal('show');
            }
          },
          {
            extend: 'selected',
            text: 'En Proceso',
            action: function ( e, dt, button, config ) {
              $("#modalProceso").modal('show');
            }
          },
          {
            extend: 'selected',
            text: 'Finalizada',
            action: function ( e, dt, button, config ) {
              $("#modalFinalizar").modal('show');
            }
          },
          {
            extend: 'selected',
            text: 'Rechazada',
            action: function ( e, dt, button, config ) {
              $("#modalRechazar").modal('show');
            }
          },
          {
            extend: 'selected',
            text: 'Aceptada',
            action: function ( e, dt, button, config ) {
              $("#modalAceptar").modal('show');
            }
          },
        ],
        aaSorting: [0, 'desc'],
          bDestroy: true,
          processing: false,
          serverSide: false,
          pageLength: 7,
          lengthChange: true,
          paging: true,
          searching: true,
          ordering: true,
          info: true,
          autoWidth: true,
          select: 'single',
        language: {
          search: '<i class="fa fa-search"></i>',
          searchPlaceholder: "Buscar...",
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
                className: "dt-nombre_depto",
                  render: function (data, type, dt) {
                      return validarVacio(dt.NOMBRE);
                  }
            },
            {
                className: "text-nowrap dt-region",
                  render: function (data, type, dt) {
                      return validarVacio(dt.REGION);
                  }
            },
            {
                className: "dt-fecha_reserva",
                  render: function (data, type, dt) {
                      return validarVacio(dt.FECHA_RESERVA);
                  }
              },
              {
                className: "dt-fecha_inicio",
                  render: function (data, type, dt) {
                      return validarVacio(dt.RESERVA_INICIO);
                  }
              },
              {
                className: "dt-fecha_termino",
                  render: function (data, type, dt) {
                      return validarVacio(dt.RESERVA_TERMINO);
                  }
              },
              {
                className: "text-nowrap dt-acompanantes",
                  render: function (data, type, dt) {
                      return validarVacio(dt.ACOMPANANTES);
                  }
              },
            
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


});