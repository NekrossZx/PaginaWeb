<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- basic -->
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!-- mobile metas -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="viewport" content="initial-scale=1, maximum-scale=1">
        <!-- site metas -->
        <title>Departamentos - Turismo Real</title>
        <meta name="keywords" content="">
        <meta name="description" content="">
        <meta name="author" content="">
        <!-- bootstrap css -->
        <link rel="stylesheet" href="css/bootstrap.css">
        <!-- style css -->
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/style-custom.css">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
        <!-- responsive-->
        <link rel="stylesheet" href="css/responsive.css">
        <!-- awesome fontfamily -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!--[if lt IE 9]-->
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif] 
    </head>
     <!-- body -->
    <body class="main-layout">
      <user-header></user-header>
      <!--FILTRO-->
      <div class="container-fluid">
        <div class="col-md-12">
          <form id="filtro">
            <div class="filtro">
              <div class="row">
                <h1 class="text_align_center">Filtrar</h1><br>
                <div class="col-md-4"><label for="">Región</label>
                  <select name="filtro_region" id="filtro_region"class="form-control">
                      <option value="0">Seleccione Región</option>
                  </select>
                </div>
                <div class="col-md-4"><label for="">Rango Precio</label>
                  <select name="filtro_precio" id="filtro_precio"class="form-control">
                    <option value="0">Seleccione Precio Máximo</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <button type="button" class="btn btn-filtro col-md-1">Filtrar</button>
                  <button type="reset" class="btn btn-filtro col-md-1" id="limpiar">Limpiar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <!--END FILTRO-->
      <!-- Departamentos-->
      <div class="container-fluid">
        <div class="row">
          <div class="deps" id="vista_depts">
          </div>
          <form id="detalle">
            <input id="detalle_depto" name="detalle_depto" type="text">
          </form>
        </div>
      </div>
      <!-- end Departamentos-->
      <my-footer></my-footer>
      <!-- Javascript files-->
      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/custom.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      <script src="js/template.js"></script>
      <script src="js/funciones_dep.js"></script>
      <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
   </body>
</html>

<?php 



?>