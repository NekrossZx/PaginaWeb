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

    $(window).bind('beforeunload', function(){
        return "¿Estás seguro/a de querer abandonar? Se perderan los datos ingresados";
      });
    
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

    $(document).ready(function () {
        let confirmar_depto = sessionStorage.getItem("detalle");
        if(confirmar_depto == undefined || confirmar_depto == '' || confirmar_depto == null){
            console.log(confirmar_depto);
            window.location.replace('departamentos.php');
        }

        let confirmar_user = sessionStorage.getItem("user");
        if(confirmar_user == undefined || confirmar_user == '' || confirmar_user == null){
            console.log(confirmar_user);
            window.location.replace('login.php');
        }

        let login = sessionStorage.getItem("login");
        let obj = JSON.parse(login);
        $("#rut_cliente").val(obj[0].RUT_CLIENTE);
    });

    function sin_transporte() {
        let ida =  $("#ida_region_origen").val();
        let vuelta = $("#vuelta_region_origen").val();

        if(ida == 0){
            $("#ida_region_origen").val(1);
            $("#ida_region_destino").val(1);
            $("#ida_origen").val("NO TRANSPORTE");
            $("#ida_destino").val("NO TRANSPORTE");
        }else{
            return false;
        }

        if( vuelta == 0){
            $("#vuelta_region_origen").val(1);
            $("#vuelta_region_destino").val(1);
            $("#vuelta_origen").val("NO TRANSPORTE");
            $("#vuelta_destino").val("NO TRANSPORTE");
        }else{
            return false;
        }
    };

    function sin_extras() {
        let servicio1 = $("#servicio_extra1").val();
        let servicio2 = $("#servicio_extra2").val();
        let servicio3 = $("#servicio_extra3").val();

        if(servicio1 == 0){
            $("#servicio_extra1").val(1);
        }
        if(servicio2 == 0){
            $("#servicio_extra2").val(1);
        }
        if(servicio3 == 0){
            $("#servicio_extra2").val(1);
        }
    };

    function sin_tour() {
        let actividad1 = $("#actividad1").val();
        let actividad2 = $("#actividad2").val();
        let actividad3 = $("#actividad3").val();

        if(actividad1 == 0){
            $("#actividad1").val(1);
        }
        if(actividad2 == 0){
            $("#actividad2").val(1);
        }
        if(actividad3 == 0){
            $("#actividad3").val(1);
        }
    };

    //                                                                                 FORMULARIO PRINCIPAL
    $(document).ready(function () {
        var date_time = moment().format('HHmmss')
        $("#nro_reserva").val("1"+date_time);
        $("#nro_reserva_transporte").val("1"+date_time);
        $("#nro_reserva_depto").val("1"+date_time);
        $("#nro_reserva_tour").val("1"+date_time);
        $("#nro_reserva_extras").val("1"+date_time);
    });

    $('#rut_cliente').rut({
        fn_error : function(input){
            toastConfig();
                Command: toastr["warning"]('El rut: ' + input.val() + ' es incorrecto', "Atención");      
        },
        placeholder: false,
        blur:false
    });

    $("body").on("blur", "#email_cliente", function ()
    {
        var email = document.getElementById("email_cliente").value;
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(email.match(pattern))
        {
            return true;
        }else{
            toastConfig();
                Command: toastr["warning"]('Email no valido', "Atención");
        }
    });

    let info_dep = sessionStorage.getItem('detalle');

    //COMPLETA SERVICIO
    let datos_dep = null;
    $.ajax({
        'async': false,
        'type': "GET",
        'global': false,
        'dataType': 'html',
        'url': "api/reserva.php?a=3",
        'data': { data : info_dep },
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
              <input type="text" id="id_depto" name="id_depto" form="reserva_depto" class="form-control" value="`+item.ID_DEPARTAMENTO+`" readonly><br>
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
              <input type="number" id="arriendo" class="form-control" value="`+item.ARRIENDO_DIARIO+`" data-value="`+item.ARRIENDO_DIARIO+`" readonly><br>
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
        'data': { data : info_dep },
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

    //FECHA ACTUAL
    $(document).ready(function () {
        var ahora = moment().format('DD/MM/YYYY HH:mm');
        $('#fecha_reserva').val(ahora);
    });

    //CALCULAR DIFERENCIA ENTRE FECHAS
    $(document).ready(function () {
        $('input[name="fecha_inicio"]').daterangepicker({
          opens: 'center',
          singleDatePicker: true,
          timePicker:true,
          timePicker24Hour:true,
          locale: {
            format: 'DD/MM HH:mm'
          }
        });
        $('input[name="fecha_termino"]').daterangepicker({
            opens: 'center',
            singleDatePicker: true,
            timePicker:true,
            timePicker24Hour:true,
            locale: {
              format: 'DD/MM HH:mm'
            }
        });
    });

    $(document).ready(function () {
        $('#daterange').daterangepicker({
            opens: 'center',
            drops: 'up',
            autoApplay: true,
            timePicker: true,
            timePicker24Hour: true,
            startDate:moment().startOf('hour'),
            endDate:moment().endOf('hour').add(72, 'hour'),
            minDate:moment().startOf('hour'),
            locale: {
                format: 'DD/MM/YYYY HH:mm'
            }
        });

        $('#daterange').on('apply.daterangepicker', function(ev, picker) {
            let fecha_inicio = picker.startDate.format('DD/MM/YYYY HH:mm');
            let fecha_termino = picker.endDate.format('DD/MM/YYYY HH:mm');

            $("#fecha_inicio").val(fecha_inicio);
            $("#fecha_termino").val(fecha_termino);
        });

        $('#daterange').on('apply.daterangepicker', function(ev, picker) {
            let fecha_inicio = new Date(picker.startDate);
            let fecha_termino = new Date(picker.endDate);

            let total_transporte = $("#valor_transporte").val();
            let total_extras = $("#total_extra").val();
            let total_tour = $("#total_tour").val();

            if (fecha_inicio.getTime()&& fecha_termino.getTime()){
                let timeDifference = fecha_termino.getTime() - fecha_inicio.getTime();
                let dayDifference = Math.abs(Math.round(timeDifference / (1000 * 3600 * 24))+1);
                $("#cantidad_dias").val(dayDifference);

                let arriendo_diario = $("body").find('#arriendo').data('value');
                let valor_dias = parseInt(arriendo_diario * dayDifference);
                $("#valor_dias").val(valor_dias);
                $("#valor_total").val(parseInt(valor_dias) + parseInt(total_transporte) + parseInt(total_extras) + parseInt(total_tour));
                $('#pagar').prop('disabled', false);
            }
            
        });
    });

    //FUNCIONALIDAD ACORDION DETALLES
    $(document).ready(function () {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
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
    $("#pagar").on("click", function (e) {
        e.preventDefault();
        //PREVENIR MODULOS VACIOS
        sin_transporte();
        sin_extras();
        sin_tour();

        let reserva = $("#reserva").serializeArray();
        let transporte = $("#md_transporte").serializeArray();
        let departamento = $("#reserva_depto").serializeArray();

        sessionStorage.setItem("reserva", JSON.stringify(reserva));
        sessionStorage.setItem("transporte", JSON.stringify(transporte));
        sessionStorage.setItem("reserva_depto", JSON.stringify(departamento));

        let total = $("input[name=valor_total]").val();
        let porcentaje = total*0.4;
        $("#ver_total").text('$'+porcentaje);
    });

    //                                                       TRANSPORTE
    
    $(document).ready(function () {
        $('input[name="vuelta_hora"]').daterangepicker({
            opens: 'center',
            singleDatePicker: true,
            timePicker:true,
            timePicker24Hour:true,
            minDate:moment().startOf('hour').add(24,'hour'),
            locale: {
                format: 'DD/MM/YYYY HH:mm'
            }
        });
        $('input[name="ida_hora"]').daterangepicker({
            opens: 'center',
            singleDatePicker: true,
            timePicker:true,
            timePicker24Hour:true,
            minDate:moment().startOf('hour').add(3,'hour'),
            locale: {
                format: 'DD/MM/YYYY HH:mm '
            }
        });
    });

    $(document).ready(function () {
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

    $("body").on("blur",".ida",function () {
        let ida_origen = document.getElementById("ida_origen").value;
        let ida_destino = document.getElementById("ida_destino").value;
        let ida_hora = document.getElementById("fecha_termino").value;
        let ida_valor = document.getElementById("ida_valor").value;
        let ida_region_origen = document.getElementById("ida_region_origen").value;
        let ida_region_destino = document.getElementById("ida_region_destino").value;

        $("#vuelta_destino").val(ida_origen);
        $("#vuelta_origen").val(ida_destino);
        $("#vuelta_hora").val(ida_hora);
        $("#vuelta_valor").val(ida_valor);
        $("#vuelta_region_destino").val(ida_region_origen);
        $("#vuelta_region_origen").val(ida_region_destino);
    });

    $("body").on("blur",".form-control", function () { 

        if($("#ida_region_destino").val() != 0 && $("#ida_region_origen").val() != 0 && $("#ida_region_destino").val() != 1 && $("#ida_region_origen").val() != 1){
            $("#ida_valor").val(10000);
        }else{
            $("#ida_valor").val(0);
        }

        if($("#vuelta_region_destino").val() != 0 && $("#vuelta_region_origen").val() != 0 && $("#vuelta_region_destino").val() != 1 && $("#vuelta_region_origen").val() != 1){
            $("#vuelta_valor").val(10000);
        }else{
            $("#vuelta_valor").val(0);
        }

        //VALORES NULL REGION DESTINO IDA
        if($("#ida_region_destino").val() == 1){
            $("#ida_destino").val("NO TRANSPORTE");
            $("#ida_destino").attr('readonly', true);
        }else{
            $("#ida_destino").attr('readonly', false);
        }
        //VALORES NULL REGION ORIGEN IDA
        if($("#ida_region_origen").val() == 1){
            $("#ida_origen").val("NO TRANSPORTE");
            $("#ida_origen").attr('readonly', true);
        }else{
            $("#ida_origen").attr('readonly', false);
        }
        //VALORES NULL REGION DESTINO VUELTA
        if($("#vuelta_region_destino").val() == 1){
            $("#vuelta_destino").val("NO TRANSPORTE");
            $("#vuelta_destino").attr('readonly', true);
        }else{
            $("#vuelta_destino").attr('readonly', false);
        }
        //VALORES NULL REGION ORIGEN VUELTA
        if($("#vuelta_region_origen").val() == 1){
            $("#vuelta_origen").val("NO TRANSPORTE");
            $("#vuelta_origen").attr('readonly', true);
        }else{
            $("#vuelta_origen").attr('readonly', false);
        }

        $("#valor_transporte").val( parseInt($("#ida_valor").val()) + parseInt( $("#vuelta_valor").val() ));
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

    $("#btn_addTransporte").on("click",function () {
        let form = $("#md_transporte").serializeArray();
        let error = 0;
  
        //VALIDACION
        $(form).each(function (i, item) {
            if (item.value == '' || item.value == null || item.value == undefined )
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
            console.log(form);
            sessionStorage.setItem("transporte", JSON.stringify(form));

            toastConfig();
            Command: toastr["success"]("Datos guardados!", "Exito");
        }
    });


    //                                                    SERVICIOS EXTRAS
    $(document).ready(function () {
        let form_extra = $("#form_extra").serializeArray();
        sessionStorage.setItem("servicios", JSON.stringify(form_extra));

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
            $("#servicio_extra").append('<option id="'+item.NOMBRE+'" value="'+item.NOMBRE+'" data-target="'+item.DESCRIPCION+'" data-value="'+item.VALOR+'">'+item.NOMBRE+'</option>');
            $("#servicio_extra1").append('<option id="'+item.NOMBRE+'" value="'+item.NOMBRE+'" data-value="'+item.VALOR+'">'+item.NOMBRE+'</option>')
            $("#servicio_extra2").append('<option id="'+item.NOMBRE+'" value="'+item.NOMBRE+'" data-value="'+item.VALOR+'">'+item.NOMBRE+'</option>')
            $("#servicio_extra3").append('<option id="'+item.NOMBRE+'" value="'+item.NOMBRE+'" data-value="'+item.VALOR+'">'+item.NOMBRE+'</option>')
        });

        //VALORES SEGUN SERVICIO INGRESADO
        $("#servicio_extra").on("change", function (e) {	
            let descripcion = $(this).find('option:selected').data('target');
            let valor = $(this).find('option:selected').data('value');

            $("#descripcion_extra").val(descripcion);
            $("#valor_extra").val(valor);
        });

        $("#modalExtra").on("change", '.required', function (e) {	
            let servicio1 = $("#servicio_extra1").find('option:selected').data('value');
            let servicio2 = $("#servicio_extra2").find('option:selected').data('value');
            let servicio3 = $("#servicio_extra3").find('option:selected').data('value');
            $("#total_extra").val(servicio1 + servicio2 + servicio3);
        });

        $("#servicio_extra").on("change", function (e) {	
            let descripcion = $(this).find('option:selected').data('target');
            let valor = $(this).find('option:selected').data('value');

            $("#descripcion_extra").val(descripcion);
            $("#valor_extra").val(valor);
        });

        $("#modalExtra").on("change", '.form-control',function (e) {
            let form = $("#form_extra").serializeArray();
            sessionStorage.setItem("servicios", JSON.stringify(form));
        });

        $('#btn_Limpiar_Servicio').on("click", function (e) { 
            var confirmar = confirm("¿Desea eliminar los servicios?");

            if(confirmar === true){
                $("#servicio_extra1").val(0);
                $("#servicio_extra2").val(0);
                $("#servicio_extra3").val(0);
                $("#total_extra").val(0);

                let form = $("#form_extra").serializeArray();
                sessionStorage.setItem("servicios", JSON.stringify(form));
            }else{
                return false;
            }
        });
    });
    //                                                                               ACOMPAÑANTES
    //AGREGAR A LA TABLA ACOMPAÑANTE
    $(document).ready(function () {
        $("#cantidad_ninos").val(0);
        $("#cantidad_adultos").val(0);
        let form = $("#reserva").serializeArray();
        sessionStorage.setItem("reserva", JSON.stringify(form));

        $('#md_otros').on("change", ".form-control", function (e) {
            e.preventDefault();
             
            let form = $("#reserva").serializeArray();
            sessionStorage.setItem("reserva", JSON.stringify(form));
        });

        $("#md_otros").on("change", ".form-control", function (e) {
            var ninos = parseInt(document.getElementById('cantidad_ninos').value);
            var adultos = parseInt(document.getElementById('cantidad_adultos').value);
            var personas = ninos + adultos;

            $("#total_personas").val(personas + 1);
        });

        $('#btn_Limpiar_otro').on("click", function (e) { 
            var confirmar = confirm("¿Desea eliminar acompañantes?");

            if(confirmar === true){
                $("#cantidad_ninos").val(0);
                $("#cantidad_adultos").val(0);

                let form = $("#reserva").serializeArray();
                sessionStorage.setItem("reserva", JSON.stringify(form));
            }else{
                return false;
            }
        });

    });

    //                                                           TOUR
    $(document).ready(function () {
        let form_tour = $("#form_tour").serializeArray();
        sessionStorage.setItem("tour", JSON.stringify(form_tour));

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
            $("#actividad").append('<option value="'+item.NOMBRE+'" data-target="'+item.DESCRIPCION+'" data-value="'+item.VALOR+'" data-long="'+item.DURACION+'">'+item.NOMBRE+'</option>');
            $("#actividad1").append('<option value="'+item.NOMBRE+'" data-value="'+item.VALOR+'" data-long="'+item.DURACION+'">'+item.NOMBRE+'</option>');
            $("#actividad2").append('<option value="'+item.NOMBRE+'" data-value="'+item.VALOR+'" data-long="'+item.DURACION+'">'+item.NOMBRE+'</option>');
            $("#actividad3").append('<option value="'+item.NOMBRE+'" data-value="'+item.VALOR+'" data-long="'+item.DURACION+'">'+item.NOMBRE+'</option>');
        });

        //VALORES SEGUN ACTIVIDAD TOUR
        $("#actividad").on("change", function (e) {	
            let descripcion = $(this).find('option:selected').data('target');
            let duracion = $(this).find('option:selected').data('long');
            let valor = $(this).find('option:selected').data('value');

            $("#actividad_descripcion").val(descripcion);
            $("#actividad_duracion").val(duracion);
            $("#actividad_valor").val(valor);
        });

        $("#modalTurismo").on("change", '.required', function (e) {	
            let valor_actividad1 = $("#actividad1").find('option:selected').data('value');
            let valor_actividad2 = $("#actividad2").find('option:selected').data('value');
            let valor_actividad3 = $("#actividad3").find('option:selected').data('value');
            let duracion_actividad1 = $("#actividad1").find('option:selected').data('long');
            let duracion_actividad2 = $("#actividad2").find('option:selected').data('long');
            let duracion_actividad3 = $("#actividad3").find('option:selected').data('long');

            $("#total_tour").val(valor_actividad1 + valor_actividad2 + valor_actividad3);
            $("#duracion_tour").val(duracion_actividad1 + duracion_actividad2 + duracion_actividad3);
        });

        $("#modalTurismo").on("change", '.form-control',function (e) {
            let form = $("#form_tour").serializeArray();
            sessionStorage.setItem("tour", JSON.stringify(form));
        });

        $('#btn_Limpiar_Tour').on("click", function (e) { 
            var confirmar = confirm("¿Desea eliminar las actividades?");
            if(confirmar === true){
                $("#actividad1").val(0);
                $("#actividad2").val(0);
                $("#actividad3").val(0);
                $("#total_tour").val(0);
                $("#duracion_tour").val(0);

                let form = $("#form_tour").serializeArray();
                sessionStorage.setItem("tour", JSON.stringify(form));
            }else{
                return false;
            }
        });
    });

    //                                                                          PAGO
    
    $("#btn_completar").on("click",function () { 

        //CONFIRMACION
        let reserva = $("#reserva").serializeArray();
        let reserva_depto = $("#reserva_depto").serializeArray();
        let reserva_transporte = sessionStorage.getItem("transporte");
        let reserva_servicios = sessionStorage.getItem("servicios");
        let reserva_tour = sessionStorage.getItem("tour");

        console.log(reserva_transporte);

        sessionStorage.setItem("reserva", JSON.stringify(reserva));
        sessionStorage.setItem("reserva_depto", JSON.stringify(reserva_depto));
        

        let confirmar = confirm('¿Estas seguro/a de realizar esta acción?');
            
        if (confirmar == true) {
            //LLAMADA POR AJAX A API
            $.ajax({
                data: { data: JSON.stringify(reserva)},
                url: "api/reserva.php?a=6",
                type: 'POST',
                success: function (data) {
                },
                complete: function(){ 
                    $.ajax({
                        data: { data: JSON.stringify(reserva_depto) },
                        url: "api/reserva.php?a=7",
                        type: 'POST',
                        success: function (data) { 
                        },
                        
                    });
                    $.ajax({
                        data: { data: reserva_transporte },
                        url: "api/reserva.php?a=5",
                        type: 'POST',
                        success: function (data) {
                        }
                    });
                    $.ajax({
                        data: { data: reserva_servicios },
                        url: "api/reserva.php?a=8",
                        type: 'POST',
                        success: function (data) {
                        }
                    });
                    $.ajax({
                        data: { data: reserva_tour },
                        url: "api/reserva.php?a=",
                        type: 'POST',
                        success: function (data) {
                        }
                    });
                    $(window).unbind('beforeunload');
                    window.location.replace('transferencia.php');
                }
            });
        }
        else {
            return false;
        }
    });
});