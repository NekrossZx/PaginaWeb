$(document).ready(function () {

  //LLAMADA A SELECT 2 PARA HABILITAR BUSQUEDA
  setTimeout(function () {
    $(".slc").select2({width: '100%'});
  }, 1000);
  
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

    //COMPLETAR JSON FORMULARIO
  
    //COMPLETA ESPECIALIDAD
    let especialidad_medica = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=6",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        especialidad_medica = JSON.parse(data);
      }
    }); 
  
    $(especialidad_medica).each(function (i, item) {
        $("#especialidad_medica").append('<option value="'+item.especialidad+'">'+item.especialidad+'</option>')
    });

    //COMPLETA ESPECIALIDAD
    let edit_especialidad = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=6",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        edit_especialidad = JSON.parse(data);
      }
    }); 
  
    $(edit_especialidad).each(function (i, item) {
        $("#edit_especialidad_medica").append('<option value="'+item.especialidad+'">'+item.especialidad+'</option>')
    });

    //COMPLETA TIPO LICENCIA
    let licencia = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=7",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        licencia = JSON.parse(data);
      }
    }); 
  
    $(licencia).each(function (i, item) {
        $("#tipo_licencia").append('<option value="'+item.tipo_licencia+'">'+item.tipo_licencia+'</option>')
    });

    //COMPLETA TIPO LICENCIA
    let edit_licencia = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=7",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        edit_licencia = JSON.parse(data);
      }
    }); 
  
    $(edit_licencia).each(function (i, item) {
      $("#edit_tipo_licencia").append('<option value="'+item.tipo_licencia+'">'+item.tipo_licencia+'</option>')
    });

    //COMPLETA SAP
    let sap = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=5",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        sap = JSON.parse(data);
      }
    }); 
  
    $(sap).each(function (i, item) {
      $("#sap").append('<option value="'+item.nro+'" data-target="'+item.nombre+'" data-id="'+item.rut+'" data-value="1">'+item.nro+'</option>')
    });

    //COMPLETA SAP
    let edit_sap = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=5",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        edit_sap = JSON.parse(data);
      }
    }); 
  
    $(edit_sap).each(function (i, item) {
      $("#edit_sap").append('<option value="'+item.nro+'" data-target="'+item.nombre+'" data-id="'+item.rut+'" data-value="2">'+item.nro+'</option>')
    });

    //COMPLETA ISAPRE
    let isapre = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=8",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        isapre = JSON.parse(data);
      }
    }); 
  
    $(isapre).each(function (i, item) {
      $("#isapre").append('<option value="'+item.isapre+'">'+item.isapre+'</option>')
    });

    //COMPLETA ISAPRE
    let edit_isapre = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=8",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        edit_isapre = JSON.parse(data);
      }
    }); 
  
    $(edit_isapre).each(function (i, item) {
      $("#edit_isapre").append('<option value="'+item.isapre+'">'+item.isapre+'</option>')
    });

    //COMPLETA MOTIVO
    let motivo = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=9",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        motivo = JSON.parse(data);
      }
    }); 
  
    $(motivo).each(function (i, item) {
      $("#motivo").append('<option value="'+item.motivo+'">'+item.motivo+'</option>')
    });

    //COMPLETA MOTIVO
    let edit_motivo = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=9",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        edit_motivo = JSON.parse(data);
      }
    }); 
  
    $(edit_motivo).each(function (i, item) {
      $("#edit_motivo").append('<option value="'+item.motivo+'">'+item.motivo+'</option>')
    });

    //COMPLETA GERENCIA
    let gerencia = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=10",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        gerencia = JSON.parse(data);
      }
    }); 
  
    $(gerencia).each(function (i, item) {
      $("#gerencia").append('<option value="'+item.gerencia+'">'+item.gerencia+'</option>')
    });

    //COMPLETA GERENCIA
    let edit_gerencia = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=10",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        edit_gerencia = JSON.parse(data);
      }
    }); 
  
    $(edit_gerencia).each(function (i, item) {
      $("#edit_gerencia").append('<option value="'+item.gerencia+'">'+item.gerencia+'</option>')
    });

    //COMPLETA SUPERINTENDENCIA
    let superinte = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=11",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        superinte = JSON.parse(data);
      }
    }); 
  
    $(superinte).each(function (i, item) {
      $("#superintendencia").append('<option value="'+item.superintendencia+'">'+item.superintendencia+'</option>')
    });

    //COMPLETA SUPERINTENDENCIA
    let edit_superinte = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=11",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        superinte = JSON.parse(data);
      }
    }); 
  
    $(edit_superinte).each(function (i, item) {
      $("#edit_superintendencia").append('<option value="'+item.superintendencia+'">'+item.superintendencia+'</option>')
    });

    //COMPLETA JORNADA
    let jornada = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=12",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        jornada = JSON.parse(data);
      }
    }); 
  
    $(jornada).each(function (i, item) {
      $("#jornada").append('<option value="'+item.jornada+'">'+item.jornada+'</option>')
    });

    //COMPLETA JORNADA
    let edit_jornada = null;
    $.ajax({
      'async': false,
      'type': "GET",
      'global': false,
      'dataType': 'html',
      'url': "api/index_licencias.php?a=12",
      'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
      'success': function (data) {
        edit_jornada = JSON.parse(data);
      }
    }); 
  
    $(edit_jornada).each(function (i, item) {
      $("#edit_jornada").append('<option value="'+item.jornada+'">'+item.jornada+'</option>')
    });

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
      $('#fecha_recepcion').val(today);
    });

    //CALCULAR DIFERENCIA ENTRE FECHAS
    $("body").on("change", "#fecha_termino", function (e){  
      //define two variables and fetch the input from HTML form  
      let date1 = new Date(document.getElementById("fecha_inicio").value);  
      let date2 = new Date(document.getElementById("fecha_termino").value);  

      if (date1.getTime()&& date2.getTime()){
        let timeDifference = date2.getTime() - date1.getTime();
        let dayDifference = Math.abs((timeDifference / (1000 * 3600 * 24))+1);
        $("#dias").val(dayDifference);
      }
    });

    //CALCULAR DIFERENCIA ENTRE FECHAS
    $("body").on("change", "#edit_fecha_termino", function (e){  
      //define two variables and fetch the input from HTML form  
      let date1 = new Date(document.getElementById("edit_fecha_inicio").value);  
      let date2 = new Date(document.getElementById("edit_fecha_termino").value);  

      if (date1.getTime()&& date2.getTime()){
        let timeDifference = date2.getTime() - date1.getTime();
        let dayDifference = Math.abs((timeDifference / (1000 * 3600 * 24))+1);
        $("#edit_dias").val(dayDifference);
      }
    });
    
    //NOMBRE SEGÚN SAP INGRESADO
    $("body").on("change", ".slc", function (e) {	
      let select = $(this).find('option:selected').data('value');
      let nombre = $(this).find('option:selected').data('target');
      let rut = $(this).find('option:selected').data('id');
    
      if (select == 1)
      {
        $("#nombre_trabajador").val(nombre)
        $("#folio").val(rut)
      }
      else if (select == 2)
      {
        $("#edit_nombre_trabajador").val(nombre)
        $("#edit_folio").val(rut)
      }

    });

    $("body").on("click", ".btn_guardar", function (e) {
        e.preventDefault();
  
        //OBTENEMOS DATOS DEL FORMULARIO
    
  
        let form = $("#licencias").serializeArray();
  
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
        if(!document.querySelector('input[type="radio"]:checked')) {
          error = 1;
        }
  
        if (error == 1) {
            toastConfig();
            Command: toastr["warning"]("Faltan Datos Por Completar", "Atención");
        }
        else {
          $(".form-control").removeClass('bg-success');
            localStorage.setItem("licencias", JSON.stringify(form));
  
            //CONFIRMACION
            let confirmar = confirm('¿Estas seguro/a de realizar esta acción?');
  
            if (confirmar == true) {
                //LLAMADA POR AJAX A API
                $.ajax({
                    data: { data: JSON.stringify(form) },
                    url: "api/index_licencias.php?a=1",
                    type: 'POST',
                    success: function (data) {
                        if (data != null || data != '') {
                            toastConfig();
                            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
                            //LIMPIAR FORMULARIO
                            $("#licencias")[0].reset();
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

    //BOTON CANCELAR MODAL
    $("body").on("click", "#btn_Cancelar", function (e) {	
    //LIMPIAR FORMULARIO
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
            "url": "api/index_licencias.php?a=4",
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
                className: "text-nowrap dt_nombre_trabajador",
                  render: function (data, type, dt) {
                      return validarVacio(dt.nombre_trabajador);
                  }
              },
              {
                className: "text-nowrap dt_nro_licencia",
                  render: function (data, type, dt) {
                      return validarVacio(dt.nro_licencia);
                  }
              },
              {
                className: "text-nowrap dt_plataforma",
                  render: function (data, type, dt) {
                      return validarVacio(dt.plataforma);
                  }
              },
              {
                className: "text-nowrap dt_dias",
                  render: function (data, type, dt) {
                      return validarVacio(dt.dias);
                  }
              },
              {
                className: "text-nowrap dt_fecha_recepcion",
                  render: function (data, type, dt) {
                      return validarVacio(dt.fecha_recepcion);
                  }
              },
              {
                className: "text-nowrap dt_fecha_inicio",
                  render: function (data, type, dt) {
                      return validarVacio(dt.fecha_inicio);
                  }
              },
              {
                className: "text-nowrap dt_fecha_termino",
                  render: function (data, type, dt) {
                      return validarVacio(dt.fecha_termino);
                  }
              },
              {
                className: "text-nowrap dt_especialidad",
                  render: function (data, type, dt) {
                      return validarVacio(dt.especialidad);
                  }
              },
              {
                className: "text-nowrap dt_tipo_licencia",
                  render: function (data, type, dt) {
                      return validarVacio(dt.tipo_licencia);
                  }
              },
              {
                className: "text-nowrap dt_tipo_reposo",
                  render: function (data, type, dt) {
                      return validarVacio(dt.tipo_reposo);
                  }
              },
              {
                className: "text-nowrap dt_lugar_reposo",
                  render: function (data, type, dt) {
                      return validarVacio(dt.lugar_reposo);
                  }
              },
              {
                className: "text-nowrap dt_nombre_medico",
                  render: function (data, type, dt) {
                      return validarVacio(dt.nombre_medico);
                  }
              },
              {
                className: "text-nowrap dt_rut_medico",
                  render: function (data, type, dt) {
                      return validarVacio(dt.rut_medico);
                  }
              },
              {
                className: "text-nowrap dt_direccion",
                  render: function (data, type, dt) {
                      return validarVacio(dt.direccion);
                  }
              },
              {
                className: "text-nowrap dt_telefono",
                  render: function (data, type, dt) {
                      return validarVacio(dt.telefono);
                  }
              },
          ],
          drawCallback: function (settings) { 
          },
        });
        }, 1000);

    function validarVacio(txt)
    {
        let valor = txt;
        if (txt == null || txt == undefined || txt == '')
        {
            valor = 'Sin Información';
        }
  
        return valor;  
    }

    //LLENAR EDITAR
    $("body").on('shown.bs.modal', '#modalEditar', function (e) {
      e.preventDefault();
  
      let id = $(".selected").find(".dt_id").html();
      let mes = $(".selected").find(".dt_mes").html();
      let sap = $(".selected").find(".dt_sap").html();
      let nombre_trabajador = $(".selected").find(".dt_nombre_trabajador").html();
      let rut = $(".selected").find(".dt_rut").html();
      let inicio_reposo = $(".selected").find(".dt_fecha_inicio").html();
      let fin_reposo = $(".selected").find(".dt_fecha_termino").html();
      let dias = $(".selected").find(".dt_dias").html();
      let tramitada = $(".selected").find(".dt_tramitada").html();
      let ingresada = $(".selected").find(".dt_ingresada").html();
      let fecha_recepcion = $(".selected").find(".dt_fecha_recepcion").html();
      let tipo_licencia = $(".selected").find(".dt_tipo_licencia").html();
      let folio = $(".selected").find(".dt_folio").html();
      let isapre = $(".selected").find(".dt_isapre").html();
      let direccion_licencia = $(".selected").find(".dt_direccion_licencia").html();
      let nombre_medico = $(".selected").find(".dt_nombre_medico").html();
      let rut_medico = $(".selected").find(".dt_rut_medico").html();
      let especialidad_medica = $(".selected").find(".dt_especialidad_medica").html();
      let motivo = $(".selected").find(".dt_motivo").html();
      let afiliacion_afp = $(".selected").find(".dt_afiliacion_afp").html();
      let formato = $(".selected").find(".dt_formato").html();
      let telefono = $(".selected").find(".dt_telefono").html();
      let gerencia = $(".selected").find(".dt_gerencia").html();
      let superintendencia = $(".selected").find(".dt_superintendencia").html();
      let jornada = $(".selected").find(".dt_jornada").html();
      let contrato = $(".selected").find(".dt_contrato").html();
      let estamento = $(".selected").find(".dt_estamento").html();
      let genero = $(".selected").find(".dt_genero").html();
      let estado = $(".selected").find(".dt_estado").html();
      let plataforma = $(".selected").find(".dt_plataforma").html();
  
      $("#edit_id").val(id);
      //
      $("#edit_mes").val(mes);
      $("#edit_mes").trigger('change');
      //
      $("#edit_sap").val(sap);
      $("#edit_sap").trigger('change');
      //
      $("#edit_nombre_trabajador").val(nombre_trabajador);
      $("#edit_rut").val(rut);
      $("#edit_inicio_reposo").val(inicio_reposo);
      $("#edit_fin_reposo").val(fin_reposo);
      $("#edit_dias").val(dias);
      //
      $("#edit_tramitada").val(tramitada);
      if (tramitada == 'Si'){$("#edit_si").prop("checked", true);}
      if (tramitada == 'No'){$("#edit_no").prop("checked", true);}
      //
      $("#edit_ingresada").val(ingresada);
      if (ingresada == 'Si'){$("#edit_si").prop("checked", true);}
      if (ingresada == 'No'){$("#edit_no").prop("checked", true);}
      //
      $("#edit_fecha_recepcion").val(fecha_recepcion);
      //
      $("#edit_tipo_licencia").val(tipo_licencia);
      $("#edit_tipo_licencia").trigger('change');
      //
      $("#edit_folio").val(folio);
      //
      $("#edit_isapre").val(isapre);
      $("#edit_isapre").trigger('change');
      //
      $("#edit_direccion_licencia").val(direccion_licencia);
      $("#edit_nombre_medico").val(nombre_medico);
      $("#edit_rut_medico").val(rut_medico);
      $("#edit_especialidad_medica").val(especialidad_medica);
      $("#edit_especialidad_medica").trigger('change');
      //
      $("#edit_motivo").val(motivo);
      $("#edit_motivo").trigger('change');
      //
      $("#edit_afiliacion_afp").val(afiliacion_afp);
      //
      $("#edit_formato").val(formato);
      if (formato == 'Fisica'){$("#edit_fisica").prop("checked", true);}
      if (formato == 'Electronica'){$("#edit_electronica").prop("checked", true);}
      //
      $("#edit_telefono").val(telefono);
      //
      $("#edit_gerencia").val(gerencia);
      $("#edit_gerencia").trigger('change');
      //
      $("#edit_superintendencia").val(superintendencia);
      $("#edit_superintendencia").trigger('change');
      //
      $("#edit_jornada").val(jornada);
      $("#edit_jornada").trigger('change');
      //
      $("#edit_contrato").val(contrato);
      if (contrato == 'Indefinido'){$("#edit_indefinido").prop("checked", true);}
      if (contrato == 'Fijo'){$("#edit_fijo").prop("checked", true);}
      //
      $("#edit_estamento").val(estamento);
      $("#edit_estamento").trigger('change');
      //
      $("#edit_genero").val(genero);
      if (genero == 'M'){$("#edit_masculino").prop("checked", true);}
      if (genero == 'F'){$("#edit_femenino").prop("checked", true);}
      //
      $("#edit_plataforma").val(plataforma);
      $("#edit_plataforma").trigger('change');
      //
      $("#edit_estado").val(estado);
      $("#edit_estado").trigger('change');
    });

    //ACCION EDITAR
    $("#modalEditar").on("click", ".btn_modificar", function (e) {
      e.preventDefault();
  
      //OBTENEMOS DATOS DEL FORMULARIO
  
      let form = $("#mdl_licencias").serializeArray();
  
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
  
      if (error == 1) {
          toastConfig();
          Command: toastr["warning"]("Faltan Datos Por Completar", "Atención");
  
      }
      else {
        localStorage.setItem("mdl_licencias", JSON.stringify(form));
        //LLAMADA POR AJAX A API
        $.ajax({
          data: { data: JSON.stringify(form) },
          url: "api/index_licencias.php?a=2",
          type: 'POST',
          success: function (data) {
              if (data != null || data != '') {
                  toastConfig();
                  Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
                  //LIMPIAR FORMULARIO
                $("#mdl_licencias")[0].reset();
                $("#modalEditar").modal('hide'); 
                let dt = $('#dt_maestro').DataTable();
                dt.ajax.reload();
              }
              else {
                  toastConfig();
                  Command: toastr["danger"]("Error de conexión", "Error");
              }
          }
        });          
      }
    });
  //LLENAR ELIMINAR
  $("body").on('shown.bs.modal', '#modalEliminar', function (e) {
    e.preventDefault();
      
    let id = $(".selected").find(".dt_id").html();
    $("#borrar_id").val(id);
    $("#borrar_estado").val(9);  
  });

  //ACCION ELIMINAR
  $("#modalEliminar").on("click", ".btn_eliminar", function (e) {
    e.preventDefault();
  
    //OBTENEMOS DATOS DEL FORMULARIO
  
    let form = $("#mdl_eliminar").serializeArray();
  
    //IMPRIME DEL NAVEGADOR 
    console.log(form);
    
    localStorage.setItem("mdl_eliminar", JSON.stringify(form));
      //LLAMADA POR AJAX A API
      $.ajax({
        data: { data: JSON.stringify(form) },
        url: "api/index_licencias.php?a=",
        type: 'POST',               
        success: function (data) { 
          if (data != null || data != '') {
            toastConfig();
            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
            //LIMPIAR FORMULARIO
            $("#mdl_eliminar")[0].reset();
            
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
  //LLENAR SIN INICIAR
  $("body").on('shown.bs.modal', '#modalIniciar', function (e) {
    e.preventDefault();
      
    let id = $(".selected").find(".dt_id").html();
    $("#iniciar_id").val(id);
    $("#iniciar_estado").val(4);  
  });

  //ACCION SIN INICIAR
  $("#modalIniciar").on("click", ".btn_iniciar", function (e) {
    e.preventDefault();
  
    //OBTENEMOS DATOS DEL FORMULARIO

  
    let form = $("#mdl_iniciar").serializeArray();
  
    //IMPRIME DEL NAVEGADOR 
    console.log(form);
    
    localStorage.setItem("mdl_iniciar", JSON.stringify(form));
      //LLAMADA POR AJAX A API
      $.ajax({
        data: { data: JSON.stringify(form) },
        url: "api/index_licencias.php?a=",
        type: 'POST',               
        success: function (data) { 
          if (data != null || data != '') {
            toastConfig();
            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
            //LIMPIAR FORMULARIO
            $("#mdl_iniciar")[0].reset();
            
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

  //LLENAR PROCESO
  $("body").on('shown.bs.modal', '#modalProceso', function (e) {
    e.preventDefault();
      
    let id = $(".selected").find(".dt_id").html();
    $("#proceso_id").val(id);
    $("#proceso_estado").val(2);  
  });

  //ACCION PROCESO
  $("#modalProceso").on("click", ".btn_proceso", function (e) {
    e.preventDefault();
  
    //OBTENEMOS DATOS DEL FORMULARIO

    let form = $("#mdl_proceso").serializeArray();
  
    //IMPRIME DEL NAVEGADOR 
    console.log(form);
    
    localStorage.setItem("mdl_proceso", JSON.stringify(form));
      //LLAMADA POR AJAX A API
      $.ajax({
        data: { data: JSON.stringify(form) },
        url: "api/index_licencias.php?a=3",
        type: 'POST',               
        success: function (data) { 
          if (data != null || data != '') {
            toastConfig();
            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
            //LIMPIAR FORMULARIO
            $("#mdl_proceso")[0].reset();
            
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

  //LLENAR FINALIZAR
  $("body").on('shown.bs.modal', '#modalFinalizar', function (e) {
    e.preventDefault();
      
    let id = $(".selected").find(".dt_id").html();
    $("#finalizar_id").val(id);
    $("#finalizar_estado").val(5);  
  });

  //ACCION FINALIZAR
  $("#modalFinalizar").on("click", ".btn_finalizar", function (e) {
    e.preventDefault();
  
    //OBTENEMOS DATOS DEL FORMULARIO

    let form = $("#mdl_finalizar").serializeArray();
  
    //IMPRIME DEL NAVEGADOR 
    console.log(form);
    
    localStorage.setItem("mdl_finalizar", JSON.stringify(form));
      //LLAMADA POR AJAX A API
      $.ajax({
        data: { data: JSON.stringify(form) },
        url: "api/index_licencias.php?a=3",
        type: 'POST',               
        success: function (data) { 
          if (data != null || data != '') {
            toastConfig();
            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
            //LIMPIAR FORMULARIO
            $("#mdl_finalizar")[0].reset();
            
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

  //LLENAR RECHAZAR
  $("body").on('shown.bs.modal', '#modalRechazar', function (e) {
    e.preventDefault();
      
    let id = $(".selected").find(".dt_id").html();
    $("#rechazar_id").val(id);
    $("#rechazar_estado").val(3);  
  });

  //ACCION RECHAZAR
  $("#modalRechazar").on("click", ".btn_rechazar", function (e) {
    e.preventDefault();
  
    //OBTENEMOS DATOS DEL FORMULARIO

  
    let form = $("#mdl_rechazar").serializeArray();
  
    //IMPRIME DEL NAVEGADOR 
    console.log(form);
    
    localStorage.setItem("mdl_rechazar", JSON.stringify(form));
      //LLAMADA POR AJAX A API
      $.ajax({
        data: { data: JSON.stringify(form) },
        url: "api/index_licencias.php?a=3",
        type: 'POST',               
        success: function (data) { 
          if (data != null || data != '') {
            toastConfig();
            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
            //LIMPIAR FORMULARIO
            $("#mdl_rechazar")[0].reset();
            
            $("#modalRechazar").modal('hide'); 
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

  //LLENAR ACEPTAR
  $("body").on('shown.bs.modal', '#modalAceptar', function (e) {
    e.preventDefault();
      
    let id = $(".selected").find(".dt_id").html();
    $("#aceptar_id").val(id);
    $("#aceptar_estado").val(1);  
  });

  //ACCION ACEPTAR
  $("#modalAceptar").on("click", ".btn_aceptar", function (e) {
    e.preventDefault();
  
    //OBTENEMOS DATOS DEL FORMULARIO

  
    let form = $("#mdl_aceptar").serializeArray();
  
    //IMPRIME DEL NAVEGADOR 
    console.log(form);
    
    localStorage.setItem("mdl_aceptar", JSON.stringify(form));
      //LLAMADA POR AJAX A API
      $.ajax({
        data: { data: JSON.stringify(form) },
        url: "api/index_licencias.php?a=3",
        type: 'POST',               
        success: function (data) { 
          if (data != null || data != '') {
            toastConfig();
            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
            //LIMPIAR FORMULARIO
            $("#mdl_aceptar")[0].reset();
            
            $("#modalAceptar").modal('hide'); 
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
});