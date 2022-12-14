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
                    <h2>El archivo del comprobante debe tener como nombre: <em>NOMBRE CLIENTE_RUT CLIENTE_NUMERO RESERVA</em></h2>
                    <div class="row">
                        <input type="file" id="comprobante" class="col-md-12" accept=".pdf,.jpg,.png">
                        <embed id="img_comprobante">
                        <button type="button" id="subir_comprobante" class="btn btn-custom-light col-md-12" disabled>Subir comprobante</button>                   
                    </div>
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
      <script src="js/jquery.rut.chileno.min.js"></script>
   </body>
</html>
