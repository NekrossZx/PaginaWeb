//FECHA VALOR 'TODAY'
$(document).ready( function() {
    var now = new Date();
    var month = (now.getMonth() + 1);               
    var day = now.getDate();
    if (month < 10) 
        month = "0" + month;
    if (day < 10) 
        day = "0" + day;
    var today = now.getFullYear() + '-' + month + '-' + day;
    $('#fecha_reserva').val(today);
  });


$("body").on("click", ".btn_guardar", function (e) {
    e.preventDefault();
    //OBTENEMOS DATOS DEL FORMULARIO
    let form = $("#reserva").serializeArray();
    
    //IMPRIME DEL NAVEGADOR 
    console.log(form);
    let error = 0;
        
    //VALIDACION
    $(form).each(function (i, item) {
        if (item.value == '' || item.value == null || item.value == undefined || item.value == 0 )
            {
                error = 1;
                $("#" + item.name).addClass('bg-danger');
        
            }
        });
        
        if (error == 1) {
            toastConfig();
            Command: toastr["warning"]("Faltan Datos Por Completar", "Atención");
        }
        else {
            localStorage.setItem("reserva", JSON.stringify(form));
            //CONFIRMACION
            let confirmar = confirm('¿Estas seguro/a de realizar esta acción?');
        
            if (confirmar == true) {
                //LLAMADA POR AJAX A API
                $.ajax({
                    data: { data: JSON.stringify(form) },
                    url: "",
                    type: 'POST',
                    success: function (data) {
                        if (data != null || data != '') {
                            toastConfig();
                            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
                            //LIMPIAR FORMULARIO
                            $("#licencias")[0].reset();
                            $(".form-control").removeClass('bg-success');
                            $(".form-control").removeClass('bg-danger');  
                        }
                        else {
                            toastConfig();
                            Command: toastr["danger"]("Error de conexión", "Error");
                        }
                    }
                });
            
            }
            else {
                return false;
            }

        }
    });

    $(document).ready(function () {
        var t = $('#acompanante').DataTable();
        var counter = 1;
        var rut = $('#rut_acompanante').value();
        var nombres = $('#nombres_acompanante').value();
        var apellidos = $('#apellidos_acompanante').value();
     
        $('#btn_addPersona').on('click', function () {
            t.row.add([rut, nombres, apellidos]).draw();
     
            counter++;
        });
     
        // Automatically add a first row of data
        $('#btn_addPersona').click();
    });

    $("#extra_service").DataTable({
        "ajax": {
          "url": "api/index_tablero.php?a=2",
          "type": "POST",
          "dataSrc": ""
        },
        dom: 'Bfrtip',
        buttons: [
          'excel',
          {text: 'Recargar',
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
            text: 'Finalizado',
            action: function ( e, dt, button, config ) {
              $("#modalFinalizar").modal('show');
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
          url: "js/sp.lang",
          search: '<i class="fa fa-search"></i>',
          searchPlaceholder: "Buscar...",
        },
          columns: [
            {
              className: "text-nowrap dt_id",
                render: function (data, type, dt) {
                    return validarVacio(dt.id);
                }
            },         
            {
              className: "text-nowrap dt_estado",
                render: function (data, type, dt) {
                    return validarVacio(nombreEstadoColor(dt.estado,dt.estado_nombre));
                }
            },
            {
              className: "text-nowrap dt_sap",
                render: function (data, type, dt) {
                    return validarVacio(dt.sap);
                }
            },
            {
              className: "text-nowrap dt_nombre",
                render: function (data, type, dt) {
                    return validarVacio(dt.nombre);
                }
            },
            {
              className: " dt_tipo_solicitud",
                render: function (data, type, dt) {
                    return validarVacio(dt.tipo_solicitud);
                }
            },
            {
              className: "text-nowrap dt_locacion",
                render: function (data, type, dt) {
                    return validarVacio(dt.locacion);
                }
            },
            {
              className: "text-nowrap dt_duracion",
                render: function (data, type, dt) {
                    return validarVacio(dt.duracion);
                }
            },
            {
              className: "text-nowrap dt_tipo_duracion",
                render: function (data, type, dt) {
                    return validarVacio(dt.tipo_duracion);
                }
            },
            {
              className: " dt_observaciones",
                render: function (data, type, dt) {
                    return validarVacio(dt.observaciones);
                }
            },
            {
              className: " dt_acciones",
                render: function (data, type, dt) {
                    return dt.acciones;
                }
            },
        ],
        drawCallback: function (settings) { 
        },
      });