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

$(document).ready(function () {
  let reserva = sessionStorage.getItem("reserva");
  let obj = JSON.parse(reserva);
  if (reserva == null || reserva == 0 || reserva == '' || reserva == undefined) {
    window.location.replace("departamentos.php");
  } else {
    $("#nro_reserva").val(obj[0].value);
    $("#ver_total").text("$" + parseInt(obj[4].value) * 0.4);
    $("#monto").val(parseInt(obj[4].value) * 0.4);
  }
  //FECHA ACTUAL
  var ahora = moment().format('DD/MM/YYYY HH:mm');
  $('#fecha_pago').val(ahora);

  //COMPLETA SERVICIOS ASOCIADOS
  let id_pago = null;
  $.ajax({
    'async': false,
    'type': "GET",
    'global': false,
    'dataType': 'html',
    'url': "api/reserva.php?a=10",
    'data': { 'request': "", 'target': 'arrange_url', 'method': 'method_target' },
    'success': function (data) {
      id_pago = JSON.parse(data);
    }
  });

  console.log(id_pago);
  $(id_pago).each(function (i, item) {
    $("#pago").val(item.PAGO);
  });

});

$('#comprobante').on("change", function () {
  const [file] = comprobante.files;
  if (file) {
    img_comprobante.src = URL.createObjectURL(file);
    $('#img_comprobante').attr("height", "600");
    $('#subir_comprobante').prop('disabled', false);
  }

  //Read File
  var selectedFile = document.getElementById("comprobante").files;
  //Check File is not Empty
  if (selectedFile.length > 0) {
    // Select the very first file from list
    var fileToLoad = selectedFile[0];
    // FileReader function for read the file.
    var fileReader = new FileReader();
    var base64;
    // Onload of file read the file content
    fileReader.onload = function (fileLoadedEvent) {
      base64 = fileLoadedEvent.target.result;
      let string_base64 = fileReader.result.replace("data:","").replace(/^.+,/, "");
            // Print data in console
            console.log(string_base64);
      $("#comprobante_base64").val(string_base64);
    };
    // Convert data to base64
    fileReader.readAsDataURL(fileToLoad);
  }
});

$('#subir_comprobante').on("click", async function () {
  let formData = new FormData();
  formData.append("file", comprobante.files[0]);
  await fetch('api/upload.php', {
    method: "POST",
    body: formData
  });
});

$('#subir_comprobante').on("click", function () {

  let reserva = $("#nro_reserva").val();
  let id_pago = $("#pago").val();
  let comprobante = $("#comprobante_base64").val();
  var pago_reserva = [{ "name": "id_reserva", "value": reserva }, { "name": "id_pago", "value": id_pago }, { "name": "comprobante_64", "value": comprobante }];

  sessionStorage.setItem("pago_reserva", JSON.stringify(pago_reserva));

  let pagar = $("#comprobante_pago").serializeArray();
  sessionStorage.setItem("Pago", JSON.stringify(pagar));

  $.ajax({
    data: { data: JSON.stringify(pagar) },
    url: "api/reserva.php?a=9",
    type: 'POST',
    success: function () { },
    complete: function () {
      $.ajax({
        data: { data: JSON.stringify(pago_reserva) },
        url: "api/reserva.php?a=11",
        type: 'POST',
        complete: function () {
          /*toastConfig();
          Command: toastr["success"]('El comprobante se envió con éxito', "ENVIADO!");
          setTimeout(function () {
            window.location.replace("cuenta.php");
          }, 2000);*/
        }
      });
    }
  });

});