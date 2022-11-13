document.addEventListener("DOMContentLoaded", () => {
    const perfil = document.querySelector("#form_perfil");
    const reservas = document.querySelector("#mis_reservas");
    const p_btn = document.querySelector("#perfil_btn");
    const r_btn = document.querySelector("#reservas_btn");

    document.querySelector("#reservas").addEventListener("click", e => {
        e.preventDefault();
        perfil.classList.add("form-hidden");
        p_btn.classList.remove("active");
        reservas.classList.remove("form-hidden");
        r_btn.classList.add("active")
    });

    document.querySelector("#perfil").addEventListener("click", e => {
        e.preventDefault();
        reservas.classList.add("form-hidden");
        r_btn.classList.remove("active");
        perfil.classList.remove("form-hidden");
        p_btn.classList.add("active");
    });
});

$(document).ready(function () {    

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