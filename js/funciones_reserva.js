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
