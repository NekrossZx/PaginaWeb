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

    //                                                                                 FORMULARIO PRINCIPAL
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
        $("#servicio_extra").append('<option value="'+item.NOMBRE+'" data-target="'+item.DESCRIPCION+'" data-value="'+item.VALOR+'">'+item.NOMBRE+'</option>')
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
        });

        var t = $('#extra_service').DataTable();
        var counter = 1;
     
        $('#btn_addServicio').on('click', function () {
            var servicio = document.getElementById("servicio_extra").value;
            var valor = document.getElementById("valor_extra").value;

            let nombre = $("td").find("").html();

            let form = $("#md_extras").serializeArray();
            let error = 0;
            console.log(error);
  
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
                $("#md_extras .form-control").removeClass('bg-success');
                $("#md_extras .form-control").removeClass('bg-danger');
                $("option[value='"+nombre+"']").remove(); 
            }
        });
    });

    //                                                                               ACOMPAÑANTES
    //AGREGAR A LA TABLA ACOMPAÑANTE
    $(document).ready(function () {
        
        $('#acompanante').DataTable( {
            searching: false, paging: false, info: false,
            "language": {
                "emptyTable": "SIN DATOS INGRESADOS"
            },
            columnDefs: [
                {
                    targets: -1,
                    data: null,
                    defaultContent: '<button class="btn-small remove"><i class="fa fa-trash"></i></button> <button class="btn-small editar"><i class="fa fa-edit"></i></button>',
                }
            ],
        });

        $('#acompanante').on('click', '.remove', function () {
            var table = $('#acompanante').DataTable();
            table
                .row($(this).parents('tr'))
                .remove()
            .draw();
        });


        var t = $('#acompanante').DataTable();
        var counter = 1;

        $('#btn_addPersona').on('click', function () {
            var rut = document.getElementById("rut_acompanante").value;
            var nombres = document.getElementById("nombres_acompanante").value;
            var apellidos = document.getElementById("apellidos_acompanante").value;

            let form = $("#md_otros").serializeArray();
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
                t.row.add([rut, nombres , apellidos, counter]).draw(false);
                $("#md_otros")[0].reset();
                $("#md_otros .form-control").removeClass('bg-success');
                $("#md_otros .form-control").removeClass('bg-danger'); 
            }
        });

        $('#rut_acompanante').rut({
            fn_error : function(input){
                toastConfig();
                    Command: toastr["warning"]('El rut: ' + input.val() + ' es incorrecto', "Atención");
                    error = 1;      
            },
            placeholder: false,
            blur:false,
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
            ],
        } );

        $('#actividad').on('click', '.remove', function () {
            var table = $('#actividad').DataTable();
            table
                .row($(this).parents('tr'))
                .remove()
            .draw();
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
            console.log(error);
  
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
                $("#md_turismo .form-control").removeClass('bg-success');
                $("#md_turismo .form-control").removeClass('bg-danger'); 
            }
        });

        $("body").on("click", "#btn_saveActividad", function (e) {
            e.preventDefault();
             
            var table = $('#actividad').DataTable();
            var data = table.rows(['tr']).data().toArray();
            var json = JSON.stringify( data );
    
            console.log(json);
    
        });

            $("body").on('click', '#btn_Cancelar_tour', function () {
                let confirmar = confirm('¿Limpiar datos ingresados?');
                var table = $('#actividad').DataTable();
                if(confirmar==true){
                    table.clear().draw();
                }else{
                    return false;
                }
            });

    });


    
});