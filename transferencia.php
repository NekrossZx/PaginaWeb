<!DOCTYPE html>
<html lang="en">
   <head>
      <!-- basic -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <!-- mobile metas -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1">
      <!-- site metas -->
      <title>TRANSFERENCIA</title>
      <meta name="keywords" content="">
      <meta name="description" content="">
      <meta name="author" content="">
      <!-- bootstrap css -->
      <link rel="stylesheet" href="css/bootstrap.css">
      <!-- style css -->
      <link rel="stylesheet" href="css/style.css">
      <link rel="stylesheet" href="css/style-custom.css">
      <link rel="stylesheet" href="css/toastr.css">
      <link rel="stylesheet" href="css/style-reserva.css">
      <!-- responsive-->
      <link rel="stylesheet" href="css/responsive.css">
      <!-- awesome fontfamily -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   </head>
   <!-- body -->
    <body class="main-layout fondo">
        <user-header></user-header>
        <!-- six_box-->
        <div class="container-fluid">
            <div class="container">
                <form id="comprobante_pago"></form>
                <div class="comprobante col-md-12">
                    <h1 class="form_title" style="color: white;">Ingresar Comprobante</h1><br>
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <h1 class="text_align_center">TU NÚMERO DE RESERVA ES:</h1>
                            <input type="number" id="nro_reserva" name="nro_reserva" class="form-control" readonly>
                        </div>
                        <div class="col-md-3"></div>
                    </div><br>
                    <details class="detalles" id="datos_transferencia">
                        <summary>DATOS DE TRANSFERENCIA</summary>
                        <div>
                            <p><strong>BANCO:</strong> Santander</p>
                            <p><strong>TIPO DE CUENTA:</strong> Corriente</p>
                            <p><strong>NÚMERO DE CUENTA:</strong> 12345698</p>
                            <p><strong>RUT:</strong> 76. 657. 489-5</p>
                            <p><strong>NOMBRE:</strong> Turismo Real spa</p>
                            <p><strong>CORREO ELECTRÓNICO:</strong> reservas@turismoreal.cl</p>
                            <p><strong>ASUNTO:</strong> Indicar el número de reserva</p></p>
                            <p><strong>TOTAL RESERVA (40% DEL TOTAL FINAL):</strong></p>
                            <h2 id="ver_total"></h2>
                        </div>
                    </details>
                    <h2>El archivo del comprobante debe tener como nombre: <em>RUT CLIENTE_NUMERO RESERVA</em></h2>
                    <div class="row">
                        <input type="file" id="comprobante" class="col-md-12" accept=".pdf, .png, .jpg">
                        <embed id="img_comprobante" height="500px">
                        <button type="button" id="subir_comprobante" class="btn btn-custom-light col-md-12" disabled>Subir comprobante</button>                   
                    </div><br>
                    <input type="text" id="pago" name="pago" class="form-control" form="comprobante_pago" hidden>
                    <input type="text" id="fecha_pago" name="fecha_pago" class="form-control" form="comprobante_pago" hidden>
                    <input type="text" id="monto" name="monto" class="form-control" form="comprobante_pago" hidden>
                    <input type="text" id="comprobante_base64" name="comprobante_base64" class="form-control">
                </div>
            </div>
        </div>
      <!-- end six_box-->
      <my-footer></my-footer> 
      <!-- Javascript files-->
      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/funciones_transf.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
      <script src="js/custom.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      <script src="js/template.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
   </body>
</html>
