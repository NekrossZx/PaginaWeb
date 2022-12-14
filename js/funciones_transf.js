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
  if(reserva == null || reserva == 0 || reserva == '' || reserva == undefined){
    window.location.replace("departamentos.php");
  }else{
    $("#nro_reserva").val(obj[0].value);
    $("#ver_total").text("$"+parseInt(obj[4].value)*0.4);
  }
  
});

$('#subir_comprobante').on("click", async function(){
    let formData = new FormData();           
    formData.append("file", comprobante.files[0]);
    await fetch('api/upload.php', {
      method: "POST", 
      body: formData
    });    
    toastConfig();
        Command: toastr["success"]('El comprobante se envió con éxito', "ENVIADO!");
        setTimeout(function () { 
          window.location.replace("cuenta.php");
        },2000);
});

$('#comprobante').on("change", function(){
  const [file] = comprobante.files
  if (file) 
  {
    src= URL.createObjectURL(event.target.files[0])
    img_comprobante.src = URL.createObjectURL(file)
    $('#subir_comprobante').prop('disabled', false);
  }
});

