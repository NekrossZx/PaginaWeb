$(document).ready(function () {

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
  
    //COMPLETAR JSON FORMULARIO
  
    //COMPLETAR SOLICITUD
    let solicitud = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_tablero.php?a=4",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        solicitud = JSON.parse(data);
      }
    }); 
  
    $(solicitud).each(function (i, item) {
      $("#tipo_solicitud").append('<option value="'+item.tipo_solicitud+'">'+item.tipo_solicitud+'</option>')
    });

    //COMPLETAR SOLICITUD EDITAR
    let edit_solicitud = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_tablero.php?a=4",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        edit_solicitud = JSON.parse(data);
      }
    }); 
  
    $(edit_solicitud).each(function (i, item) {
      $("#edit_tipo_solicitud").append('<option value="'+item.tipo_solicitud+'">'+item.tipo_solicitud+'</option>')
    });
  
    $("body").on("click", ".btn_guardar", function (e) {
        e.preventDefault();
  
        //OBTENEMOS DATOS DEL FORMULARIO
        // serializeArray() TOMA TODOS LOS INPUTS QUE TENGAN NAME Y LOS AGREGA A UN ARREGLO DE OBJETOS QUEDA LISTO PARA TRABAJRLO COMO JSON
  
        let form = $("#tablero").serializeArray();
  
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

        //VALIDAR RADIOBUTTON  
        if(!document.querySelector('input[name="tipo_duracion"]:checked')) {
          error = 1;
        }
  
        if (error == 1) {
            toastConfig();
            Command: toastr["warning"]("Faltan Datos Por Completar", "Atención");
    
        }
        else {
  
            localStorage.setItem("tablero", JSON.stringify(form));
  
            //CONFIRMACION
            let confirmar = confirm('¿Estas seguro/a de realizar esta acción?');
  
            if (confirmar == true) {
                //LLAMADA POR AJAX A API
                $.ajax({
                    data: { data: JSON.stringify(form) },
                    url: "api/index_tablero.php?a=1",
                    type: 'POST',
                    success: function (data) {
                        if (data != null || data != '') {
                            toastConfig();
                            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
                            //LIMPIAR FORMULARIO
                            $("#tablero")[0].reset();
                            $('select').select2({allowClear: true});
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
  
  //ACCION EDITAR
    $("#modalEditar").on("click", ".btn_modificar", function (e) {
      e.preventDefault();
  
      //OBTENEMOS DATOS DEL FORMULARIO
      // serializeArray() TOMA TODOS LOS INPUTS QUE TENGAN NAME Y LOS AGREGA A UN ARREGLO DE OBJETOS QUEDA LISTO PARA TRABAJRLO COMO JSON
  
      let form = $("#md_tablero").serializeArray();
  
      //IMPRIME DEL NAVEGADOR 
      console.log(form);
  
      let error = 0;
  
      //VALIDACION
      $(form).each(function (i, item) {
          if (item.value == '' || item.value == null || item.value == undefined || item.value == 0)
          {
              error = 1;
              $("#" + item.name).addClass('bg-danger');
  
          }
      });

      //VALIDAR RADIOBUTTON  
      if(!document.querySelector('input[name="edit_tipo_duracion"]:checked')) {
        error = 1;
      }
  
      if (error == 1) {
          toastConfig();
          Command: toastr["warning"]("Faltan Datos Por Completar", "Atención");
  
      }
      else {
        localStorage.setItem("md_tablero", JSON.stringify(form));
  
            //CONFIRMACION
            let confirmar = confirm('¿Estas seguro/a de realizar esta acción?');
  
            if (confirmar == true) {
                //LLAMADA POR AJAX A API
                $.ajax({
                    data: { data: JSON.stringify(form) },
                    url: "api/index_tablero.php?a=5",
                    type: 'POST',
                    success: function (data) {
                        if (data != null || data != '') {
                            toastConfig();
                            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
                            //LIMPIAR FORMULARIO
                            $("#md_tablero")[0].reset();
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
  
  //ACCION ELIMINAR
  $("#modalEliminar").on("click", ".btn_eliminar", function (e) {
    e.preventDefault();
  
    //OBTENEMOS DATOS DEL FORMULARIO
    // serializeArray() TOMA TODOS LOS INPUTS QUE TENGAN NAME Y LOS AGREGA A UN ARREGLO DE OBJETOS QUEDA LISTO PARA TRABAJRLO COMO JSON
  
    let form = $("#md_eliminar").serializeArray();
  
    //IMPRIME DEL NAVEGADOR 
    console.log(form);
  

    localStorage.setItem("md_eliminar", JSON.stringify(form));
      //LLAMADA POR AJAX A API
      $.ajax({
        data: { data: JSON.stringify(form) },
        url: "api/index_tablero.php?a=6",
        type: 'POST',               
        success: function (data) { 
          if (data != null || data != '') {
            toastConfig();
            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
            //LIMPIAR FORMULARIO
            $("#md_eliminar")[0].reset();
            $("#modalEliminar").modal('hide'); 
            let dt = $('#dt_maestro').DataTable();
            dt.ajax.reload();
          }
          else {
            toastConfig();
            Command: toastr["danger"]("Error de conexión", "Error");
          }
        }
      });
  });
  //ACCION CAMBIAR ESTADO "EN PROCESO"
  $("#modalIniciar").on("click", ".btn_iniciar", function (e) {
    e.preventDefault();
  
    //OBTENEMOS DATOS DEL FORMULARIO
    // serializeArray() TOMA TODOS LOS INPUTS QUE TENGAN NAME Y LOS AGREGA A UN ARREGLO DE OBJETOS QUEDA LISTO PARA TRABAJRLO COMO JSON
  
    let form = $("#md_iniciar").serializeArray();
  
    //IMPRIME DEL NAVEGADOR 
    console.log(form);
    
    localStorage.setItem("md_iniciar", JSON.stringify(form));
      //LLAMADA POR AJAX A API
      $.ajax({
        data: { data: JSON.stringify(form) },
        url: "api/index_tablero.php?a=6",
        type: 'POST',               
        success: function (data) { 
          if (data != null || data != '') {
            toastConfig();
            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
            //LIMPIAR FORMULARIO
            $("#md_iniciar")[0].reset();
            $("#modalIniciar").modal('hide'); 
            let dt = $('#dt_maestro').DataTable();
            dt.ajax.reload();
          }
          else {
            toastConfig();
            Command: toastr["danger"]("Error de conexión", "Error");
          }
        }
      });
  });
  //ACCION CAMBIAR ESTADO "EN PROCESO"
  $("#modalProceso").on("click", ".btn_proceso", function (e) {
    e.preventDefault();
  
    //OBTENEMOS DATOS DEL FORMULARIO
    // serializeArray() TOMA TODOS LOS INPUTS QUE TENGAN NAME Y LOS AGREGA A UN ARREGLO DE OBJETOS QUEDA LISTO PARA TRABAJRLO COMO JSON
  
    let form = $("#md_proceso").serializeArray();
  
    //IMPRIME DEL NAVEGADOR 
    console.log(form);
  
    localStorage.setItem("md_proceso", JSON.stringify(form));
      //LLAMADA POR AJAX A API
      $.ajax({
        data: { data: JSON.stringify(form) },
        url: "api/index_tablero.php?a=6",
        type: 'POST',               
        success: function (data) { 
          if (data != null || data != '') {
            toastConfig();
            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
            //LIMPIAR FORMULARIO
            $("#md_proceso")[0].reset();
            $("#modalProceso").modal('hide'); 
            let dt = $('#dt_maestro').DataTable();
            dt.ajax.reload();
          }
          else {
            toastConfig();
            Command: toastr["danger"]("Error de conexión", "Error");
          }
        }
      });
  });
  //ACCION CAMBIAR ESTADO "FINALIZAR"
  $("#modalFinalizar").on("click", ".btn_finalizar", function (e) {
    e.preventDefault();
  
    //OBTENEMOS DATOS DEL FORMULARIO
    // serializeArray() TOMA TODOS LOS INPUTS QUE TENGAN NAME Y LOS AGREGA A UN ARREGLO DE OBJETOS QUEDA LISTO PARA TRABAJRLO COMO JSON
  
    let form = $("#md_finalizar").serializeArray();
  
    //IMPRIME DEL NAVEGADOR 
    console.log(form);

    localStorage.setItem("md_finalizar", JSON.stringify(form));
      //LLAMADA POR AJAX A API
      $.ajax({
        data: { data: JSON.stringify(form) },
        url: "api/index_tablero.php?a=6",
        type: 'POST',               
        success: function (data) { 
          if (data != null || data != '') {
            toastConfig();
            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
            //LIMPIAR FORMULARIO
            $("#md_finalizar")[0].reset();
            $("#modalFinalizar").modal('hide'); 
            let dt = $('#dt_maestro').DataTable();
            dt.ajax.reload();
          }
          else {
            toastConfig();
            Command: toastr["danger"]("Error de conexión", "Error");
          }
        }
      }); 
  });
    
  //BOTON CANCELAR MODAL
  $("body").on("click", "#btn_Cancelar", function (e) {	
    //LIMPIAR FORMULARIO
    $("#md_tablero")[0].reset();
    $('select').select2({allowClear: true});
    $(".form-control").removeClass('bg-success');
    $(".form-control").removeClass('bg-danger');
  });
  
  //CAMBIO DE COLOR SEGUN VERIFICACIÓN
    $("body").on("blur", ".form-control", function (e) {
        e.preventDefault();
        let valor = $(this).val();
  
        if (valor == '' || valor == null || valor == undefined || valor == 0)
        {
            $(this).addClass('bg-danger');
        }
        else
        {
            $(this).removeClass('bg-danger'); 
            $(this).addClass('bg-success');
     }
    });   
    //CREACION DATATABLE
    
    //TIMEOUT PARA QUE DESPUES DE X MILISEGUNDOS SE EJECUTE EL CODIGO
    setTimeout(function () {
      
  
    $("#dt_maestro").DataTable({
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
                  return validarVacio(dt.acciones);
              }
          },
      ],
      drawCallback: function (settings) { 
      },
    });
    }, 1000);
  
    $("body").on('shown.bs.modal', '#modalEditar', function (e) {
      e.preventDefault();
  
      let id = $(".selected").find(".dt_id").html();
      let sap = $(".selected").find(".dt_sap").html();
      let nombre = $(".selected").find(".dt_nombre").html();
      let tipo_solicitud = $(".selected").find(".dt_tipo_solicitud").html();
      let locacion = $(".selected").find(".dt_locacion").html();
      let duracion = $(".selected").find(".dt_duracion").html();
      let tipo_duracion = $(".selected").find(".dt_tipo_duracion").html();
      let estado = $(".selected").find(".dt_estado").html();
      let observaciones = $(".selected").find(".dt_observaciones").html();
      let acciones = $(".selected").find(".dt_acciones").html();
  
      $("#edit_id").val(id);
      $("#edit_sap").val(sap);
      $("#edit_nombre").val(nombre);
      $("#edit_tipo_solicitud").val(tipo_solicitud);
      $("#edit_tipo_solicitud").trigger('change');
      $("#edit_locacion").val(locacion);
      $("#edit_duracion").val(duracion);

      
      if (tipo_duracion == 'minuto'){
        $("#edit_minuto").prop("checked", true);
      }
      if (tipo_duracion == 'hora'){
        $("#edit_hora").prop("checked", true);
      }
      
      if (estado == '<span class="badge badge-danger">No Iniciado</span>' ){
        estado = 1;
      }
      if (estado == '<span class="badge badge-warning">En Proceso</span>' ){
        estado = 2;
      }
      if (estado == '<span class="badge badge-success">Finalizado</span>' ){
        estado = 3;
      }
      $("#edit_estado").val(estado);
      $("#edit_estado").trigger('change');
      $("#edit_observaciones").val(observaciones);
      $("#edit_acciones").val(acciones);
    });
  
    $("body").on('shown.bs.modal', '#modalEliminar', function (e) {
      e.preventDefault();
        
      let id = $(".selected").find(".dt_id").html();
      $("#borrar_id").val(id);
      $("#borrar_estado").val(9);  
    });

    $("body").on('shown.bs.modal', '#modalIniciar', function (e) {
      e.preventDefault();
        
      let id = $(".selected").find(".dt_id").html();
      $("#iniciar_id").val(id);
      $("#iniciar_estado").val(1);  
    });

    $("body").on('shown.bs.modal', '#modalProceso', function (e) {
      e.preventDefault();
        
      let id = $(".selected").find(".dt_id").html();
      $("#proceso_id").val(id);
      $("#proceso_estado").val(2);  
    });

    $("body").on('shown.bs.modal', '#modalFinalizar', function (e) {
      e.preventDefault();
        
      let id = $(".selected").find(".dt_id").html();
      $("#finalizar_id").val(id);
      $("#finalizar_estado").val(3);  
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

    function nombreEstadoColor(id,nombre)
    {
      let estado = '';
      
        if (id == null || id == undefined || id == '')
        {
          estado = nombre;
        }
        
      if (id == 1) { estado = '<span class="badge badge-danger">'+nombre+'</span'; }
      if (id == 2) { estado = '<span class="badge badge-warning">'+nombre+'</span'; }
      if (id == 3) { estado = '<span class="badge badge-success">'+nombre+'</span'; }

        return estado;
  
    }
  
    $("#excel").change(function(evt){
      var selectedFile = evt.target.files[0];
      var reader = new FileReader();
      reader.onload = function(event) {
        var data = event.target.result;
        var workbook = XLSX.read(data, {
          type: 'binary'
        });
        workbook.SheetNames.forEach(function(sheetName) {
          
            var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            const indexed = XL_row_object.map((item, index) => Object.assign(item, { index }))
            var json_object = JSON.stringify(indexed);

            //CREA LOCAL STORAGE CON LA DATA
            localStorage.setItem('masivo',json_object);

            //REDIRECCION A UNA VISTA PREVIA QUE DEBERAS
            location.href="vista_tablero.html";
          })
      };

      reader.onerror = function(event) {
        console.error("File could not be read! Code " + event.target.error);
      };

      reader.readAsBinaryString(selectedFile);
    });
  
    let datos = JSON.parse(localStorage.getItem('masivo'))
    
    setTimeout(() => {
      
      $("#dt_masivo").DataTable({
        data:  datos,
        bDestroy: true,
        processing: true,
        serverSide: false,
        pageLength: 10,
        lengthChange: false,
        paging: true,
        searching: true,
        ordering: true,
        info: true,
        autoWidth: false,
        responsive: false,
        language: {
          url: "js/sp.lang",
          search: '<i class="fa fa-search"></i>',
          searchPlaceholder: "Buscar...",
        },
        columns: [
          {
            className: "text-nowrap dt_estado",
              render: function (data, type, dt) {
                  return validarVacio(dt.estado);
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
            className: "dt_tipo_solicitud",
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
            className: "dt_observaciones",
              render: function (data, type, dt) {
                  return validarVacio(dt.observaciones);
              }
          },
          {
            className: "dt_acciones",
              render: function (data, type, dt) {
                  return validarVacio(dt.acciones);
              }
          },
        ]
      });
      
    }, 800);

    //ACCION GUARDAR MASIVO
    $("body").on("click", ".btn_masivo", function (e) {
      e.preventDefault();
      
      let datos = localStorage.getItem('masivo');

      //CONFIRMACION
      let confirmar = confirm('¿Estas seguro/a de realizar esta acción?');
      if (confirmar == true) {
        //LLAMADA POR AJAX A API
      
        $.ajax({
          data: { data: datos },
          url: "api/index_tablero.php?a=7",
          type: 'POST',     
          dataType: 'json',          
          success: function (data) {
              toastConfig();
            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
            if (data == 1)
            {
              setTimeout(() => {
                history.back();
              }, 1000);
            }
          }
        }); 
      }else {
        return false;
      }            
    });

  
    //LLAMADA A SELECT 2 PARA HABILITAR BUSQUEDA
    setTimeout(function () {
        $(".slc").select2({ width: '100%' });
      }, 1000);

});
  
