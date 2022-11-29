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

    $("body").on("blur", ".form-control", function (e) {
        e.preventDefault();
        let valor = $(this).val();
  
        if (valor == '' || valor == null || valor == undefined)
        {
            $(this).addClass('bg-danger');
        }
        else
        {
            $(this).removeClass('bg-danger'); 
     }
    }); 

    //                                                                                 FORMULARIO PRINCIPAL

    //COMPLETA SERVICIO
    let datos_dep = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/reserva.php?a=3",
        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
        'success': function (data) {
            datos_dep = JSON.parse(data);
        }
    }); 

    $(datos_dep).each(function (i, item) {
        $("#datos_depto").append(`
        <div class="col-md-12">
        <h4 style="color: black;">DATOS DEPARTAMENTO</h4><br>
        <div class="row">
           <!--ID-->
           <div class="col-md-2"><label for="">ID Departamento</label>
              <input type="text" id="id" name="id" class="form-control" value="`+item.ID_DEPARTAMENTO+`" readonly><br>
           </div>
           <!--NOMBRE-->
           <div class="col-md-2"><label for="">Nombre Departamento</label>
              <input type="text" id="nombre" class="form-control" value="`+item.NOMBRE+`" readonly><br>
           </div>
           <!--REGION-->
           <div class="col-md-2"><label for="">Región</label>
              <label id="region" class="form-control">`+item.NOMBRE_REGION+`</label>
           </div>
           <!--DIRECCION-->
           <div class="col-md-4"><label for="">Dirección</label>
              <input type="text" id="direccion" class="form-control" value="`+item.DIRECCION+`" readonly><br>
           </div>
           <!--ARRIENDO DIARIO-->
           <div class="col-md-2"><label for="">Arriendo Diario</label>
              <input type="number" id="arriendo" class="form-control" value="`+item.ARRIENDO_DIARIO+`" readonly><br>
           </div>
           <!--DESCRIPCION-->
           <div class="col-md-12"><label for="">Descripción</label>
              <textarea type="text" id="descripcion" class="form-control"readonly>`+item.DESCRIPCION+`</textarea>
           </div>
           <!--SERVICIOS-->
           <details>
                <summary>SERVICIOS INCLUIDOS</summary>
                    <!--Servicios incluidos-->
                    <div class="col-md-12">
                        <div class="row" id="servicios">
                        </div>
                    </div>
            </details>
        </div><br>
     </div>`)
    });

    //COMPLETA SERVICIOS ASOCIADOS
    let asociados = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/reserva.php?a=4",
        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
        'success': function (data) {
            asociados = JSON.parse(data);
        }
    }); 

    if(asociados === null || asociados == 0 || asociados == undefined || asociados == ''){
        $("#servicios").append('<p>DEPARTAMENTO SIN SERVICIO ASOCIADO</p>')
    }else{
        $(asociados).each(function (i, item) {
            $("#servicios").append(`<a type="button" class="btn btn-secondary col-md-3" data-toggle="tooltip" data-placement="bottom" title="`+item.DESCRIPCION+`">`+item.NOMBRE_SERVICIO+`</a>`)
        });
    }

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

    /*CALCULAR DIFERENCIA ENTRE FECHAS
    $("body").on("change", "#daterange", function (e){  
        //define two variables and fetch the input from HTML form  
        let date1 = new Date(document.getElementById("daterange").value);  
        let date2 = new Date(document.getElementById("daterange").value);  
  
        if (date1.getTime()&& date2.getTime()){
          let timeDifference = date2.getTime() - date1.getTime();
          let dayDifference = Math.abs((timeDifference / (1000 * 3600 * 24))+1);
          $("#cantidad_dias").val(dayDifference);
          //console.log(dayDifference);
        }
      });
    */
    $(function() {
        $('input[name="daterange"]').daterangepicker({
            opens: 'center',
            drops: 'up',
            autoApplay: true,
            timePicker: true,
            timePicker24Hour: true,
            locale: {
                format: 'DD/MM/YYYY hh:mm'
            }
        });
    });

    //FUNCIONALIDAD ACORDION DETALLES
    $(document).ready(function () {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
            panel.style.display = "none";
            } else {
            panel.style.display = "block";
            }
            });
        }
    });

    //ENVIAR RESERVA
    $("body").on("click", ".btn_guardar", function (e) {
        e.preventDefault();

        //OBTENEMOS DATOS DEL FORMULARIO
        let form = $("#reserva").serializeArray();
        
        //IMPRIME DEL NAVEGADOR 
        //console.log(form);
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
                                $("#")[0].reset();
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

    $("body").on("click", ".btn_Cancelar", function (e) {
        e.preventDefault();
         let confirmar = confirm("¿Realmente deseas salir de esta página?");

        if(confirmar === true){
            history.back();
        }else{
            return false;
        }

    });

    $('#resumen_servicios').DataTable( {
        searching: false, 
        paging: false, 
        info: false,
        "language": {
            "emptyTable": "SIN DATOS INGRESADOS",
        }
    } );
    $('#resumen_otros').DataTable( {
        searching: false, 
        paging: false, 
        info: false,
        "language": {
            "emptyTable": "SIN DATOS INGRESADOS",
        }
    } );
    $('#resumen_tour').DataTable( {
        searching: false, 
        paging: false, 
        info: false,
        "language": {
            "emptyTable": "SIN DATOS INGRESADOS",
        }
    } );
    //                                                       TRANSPORTE

    $(function() {
        $('input[name="vuelta_hora"]').daterangepicker({
          opens: 'center',
          singleDatePicker: true,
          timePicker:true,
          timePicker24Hour:true,
          locale: {
            format: 'DD/MM hh:mm'
          }
        });
        $('input[name="ida_hora"]').daterangepicker({
            opens: 'center',
            singleDatePicker: true,
            timePicker:true,
            timePicker24Hour:true,
            locale: {
              format: 'DD/MM hh:mm'
            }
          });
      });
  
      $(function(){
        var miCheckbox = document.getElementById('same_data');
        var vuelta = document.getElementById('vuelta');
        var ida = document.getElementById('ida');

        var origen = document.getElementById('ida_origen');
        var destino = document.getElementById('ida_destino');
        var horario = document.getElementById('ida_hora');

        miCheckbox.addEventListener('click', function() {
            if(miCheckbox.checked) {
                vuelta.classList.add('hidden');
                ida.setAttribute('open', true);
                origen.classList.add('ida');
                destino.classList.add('ida');
                horario.classList.add('ida');
            } else {
                vuelta.classList.remove('hidden');
                vuelta.setAttribute('open', true);
                ida.removeAttribute('open');
                origen.classList.remove('ida');
                destino.classList.remove('ida');
                horario.classList.remove('ida');
            }
        });
      });

      $("#modalTransporte").on("blur",".ida",function(){
        let ida_origen = document.getElementById("ida_origen").value;
        let ida_destino = document.getElementById("ida_destino").value;
        let ida_hora = document.getElementById("ida_hora").value;
        let ida_valor = document.getElementById("ida_valor").value;
        let ida_region_origen = document.getElementById("ida_region_origen").value;
        let ida_region_destino = document.getElementById("ida_region_destino").value;
        //console.log(ida_origen, ida_destino, ida_hora);

        $("#vuelta_destino").val(ida_origen);
        $("#vuelta_origen").val(ida_destino);
        $("#vuelta_hora").val(ida_hora);
        $("#vuelta_valor").val(ida_valor);
        $("#vuelta_region_destino").val(ida_region_origen);
        $("#vuelta_region_origen").val(ida_region_destino);
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
            $("#ida_region_destino").append('<option value="'+item.NOMBRE+'">'+item.NOMBRE+'</option>');
            $("#ida_region_origen").append('<option value="'+item.NOMBRE+'">'+item.NOMBRE+'</option>');
            $("#vuelta_region_destino").append('<option value="'+item.NOMBRE+'">'+item.NOMBRE+'</option>');
            $("#vuelta_region_origen").append('<option value="'+item.NOMBRE+'">'+item.NOMBRE+'</option>');
        });

      $("#btn_addTransporte").on("click",function(){
        let form = $("#md_transporte").serializeArray();
  
        //IMPRIME DEL NAVEGADOR 
        //console.log(form);
  
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
            localStorage.setItem("transporte", JSON.stringify(form));
  
            //CONFIRMACION
            let confirmar = confirm('¿Estas seguro/a de realizar esta acción?');
  
            if (confirmar == true) {
                //LLAMADA POR AJAX A API
                $.ajax({
                    data: { data: JSON.stringify(form) },
                    url: "api/reserva.php?a=4",
                    type: 'POST',
                    success: function (data) {
                        if (data != null || data != '') {
                            toastConfig();
                            Command: toastr["success"]("Se ha guardado la información", "Operación Exitosa");
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


    //                                                    SERVICIOS EXTRAS
    //COMPLETA SERVICIO
    let servicio = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/reserva.php?a=1",
        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
        'success': function (data) {
            servicio = JSON.parse(data);
        }
    }); 

    $(servicio).each(function (i, item) {
        $("#servicio_extra").append('<option id="'+item.ID_SERVICIOEXTRA+'" value="'+item.NOMBRE+'" data-target="'+item.DESCRIPCION+'" data-value="'+item.VALOR+'">'+item.NOMBRE+'</option>')
    });

    

    //VALORES SEGUN SERVICIO INGRESADO
    $("#servicio_extra").on("change", function (e) {	
        let descripcion = $(this).find('option:selected').data('target');
        let valor = $(this).find('option:selected').data('value');

        $("#descripcion_extra").val(descripcion);
        $("#valor_extra").val(valor);
    });

    //AGREGAR A LA TABLA SERVICIOS EXTRA
    $(document).ready(function () {
        $('#extra_service').DataTable( {
            searching: false, 
            paging: false, 
            info: false,
            "language": {
                "emptyTable": "SIN DATOS INGRESADOS",
                "thousands": "."
            },
            columnDefs: [
                {
                    targets: 2,
                    data: null,
                    defaultContent: '<button class="btn-small remove"><i class="fa fa-trash"></i></button>',
                }
            ]
        } );

        $('#extra_service').on('click', '.remove', function () {
            var table = $('#extra_service').DataTable();
            table.row($(this).parents('tr')).remove().draw();

            var data = table.rows(['tr']).data().toArray();
            var json = JSON.stringify( data );
    
            //console.log(json);

            localStorage.setItem("servicios_extra", JSON.stringify(json));
        });

        var t = $('#extra_service').DataTable();
     
        $('#btn_addServicio').on('click', function () {
            var servicio = document.getElementById("servicio_extra").value;
            var valor = document.getElementById("valor_extra").value;
            let form = $("#md_extras").serializeArray();
            let error = 0;
            //console.log(error);
  
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
                t.row.add([servicio, valor]).draw(false);
                $("#md_extras")[0].reset();
                $("#md_extras .form-control").removeClass('bg-danger');
                //$("option[value='"+nombre+"']").remove(); 

                var data = t.rows(['tr']).data().toArray();
                var json = JSON.stringify( data );
                //console.log(json);
                localStorage.setItem("servicios_extra", JSON.stringify(json));
            }
        });
        
        $("body").on('click', '#btn_Limpiar_Servicio', function () {
            let confirmar = confirm('¿Limpiar datos ingresados?');
            var table = $('#extra_service').DataTable();
            if(confirmar==true){
                table.clear().draw();
            }else{
                return false;
            }

            var data = table.rows(['tr']).data().toArray();
            var json = JSON.stringify( data );
            localStorage.setItem("servicios_extra", JSON.stringify(json));
        });
    });

    //                                                                               ACOMPAÑANTES
    //AGREGAR A LA TABLA ACOMPAÑANTE
    $(document).ready(function () {
        $("#cantidad_ninos").val(0);
        $("#cantidad_adultos").val(0);
        let form = $("#md_otros").serializeArray();
        localStorage.setItem("acompanante", JSON.stringify(form));

        $('#md_otros').on("change", ".form-control", function (e) {
            e.preventDefault();
             
            let form = $("#md_otros").serializeArray();
            localStorage.setItem("acompanante", JSON.stringify(form));
            //console.log(form);
    
        });

        $("#modalAcompanante").on("change", ".form-control", function (e){
            var ninos = parseInt(document.getElementById('cantidad_ninos').value);
            var adultos = parseInt(document.getElementById('cantidad_adultos').value);
            var personas = ninos + adultos;

            $("#nro").val(personas + 1);
        });
    });

    //                                                           TOUR
    //COMPLETA ACTIVIDAD TOUR
    let tour = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/reserva.php?a=2",
        'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
        'success': function (data) {
            tour = JSON.parse(data);
        }
    }); 

    $(tour).each(function (i, item) {
        $("#actividad_nombre").append('<option value="'+item.NOMBRE+'" data-target="'+item.DESCRIPCION+'" data-value="'+item.VALOR+'" data-long="'+item.DURACION+'">'+item.NOMBRE+'</option>')
    });

    //VALORES SEGUN ACTIVIDAD TOUR
    $("#actividad_nombre").on("change", function (e) {	
        let descripcion = $(this).find('option:selected').data('target');
        let duracion = $(this).find('option:selected').data('long');
        let valor = $(this).find('option:selected').data('value');

        $("#actividad_descripcion").val(descripcion);
        $("#actividad_duracion").val(duracion);
        $("#actividad_valor").val(valor);
    });

    //AGREGAR A LA TABLA ACTIVIDAD
    $(document).ready(function () {
        $('#actividad').DataTable( {
            searching: false, paging: false, info: false,
            "language": {
                "emptyTable": "SIN DATOS INGRESADOS",
                "thousands": "."
            },
            columnDefs: [
                {
                    targets: 3,
                    data: null,
                    defaultContent: '<button class="btn-small remove"><i class="fa fa-trash"></i></button>',
                }
            ]
        } );

        $('#actividad').on('click', '.remove', function () {
            var table = $('#actividad').DataTable();
            table
                .row($(this).parents('tr'))
                .remove()
            .draw();

            var data = table.rows(['tr']).data().toArray();
            var json = JSON.stringify( data );
            //console.log(json);

            localStorage.setItem("tour", JSON.stringify(json));
        });

        var t = $('#actividad').DataTable();
        var counter = 1;
     
        $('#btn_addActividad').on('click', function () {
            //VARIABLES
            var actividad = document.getElementById("actividad_nombre").value;
            var duracion = document.getElementById("actividad_duracion").value;
            var valor = document.getElementById("actividad_valor").value;

            let form = $("#md_turismo").serializeArray();
            let error = 0;
            //console.log(error);
  
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
                t.row.add([actividad, duracion , valor]).draw(false);
                $("#md_turismo")[0].reset();
                $("#md_turismo .form-control").removeClass('bg-danger');

                var data = t.rows(['tr']).data().toArray();
                var json = JSON.stringify( data );
                //console.log(json);
    
                localStorage.setItem("tour", JSON.stringify(json));
            }
        });

        $("body").on("click", "#btn_saveActividad", function (e) {
            e.preventDefault();
             
            var table = $('#actividad').DataTable();
            var data = table.rows(['tr']).data().toArray();
            var json = JSON.stringify( data );
            //console.log(json);

            localStorage.setItem("tour", JSON.stringify(json));
    
        });

        $("body").on('click', '#btn_Limpiar_Tour', function () {
            let confirmar = confirm('¿Limpiar datos ingresados?');
            var table = $('#actividad').DataTable();
            if(confirmar==true){
                table.clear().draw();

                var data = table.rows(['tr']).data().toArray();
                var json = JSON.stringify( data );
                //console.log(json);
    
                localStorage.setItem("tour", JSON.stringify(json));
            }else{
                return false;
            }
        }); 

    });

    //                                                                          PAGO
    $(document).ready(function () { 
        var datos = document.getElementById("datos_trans");
        if( $('input[id="transferencia"]:checked').length != 0){
            datos.classList.remove("hidden");
            console.log("holi");
        }else{
            datos.classList.add("hidden");
        }
    });

});