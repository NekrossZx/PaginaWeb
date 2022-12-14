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
        <title>Departamentos - Turismo Real</title>
        <meta name="keywords" content="">
        <meta name="description" content="">
        <meta name="author" content="">
        <!-- bootstrap css -->
        <link rel="stylesheet" href="css/bootstrap.css">
        <!-- style css -->
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/style-custom.css">
        <link rel="stylesheet" href="css/style-deptos.css">
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
      <!--DETALLES DEPARTAMENTOS-->
        <!-- Container for the image gallery -->
        <div class="container-fluid">
            <a type="button" class="btn btn-custom btn-block btn_volver" href="departamentos.php">&#10094; Volver</a>
            <div class="carrusel">
                <div id="slide">
                </div>
                <!-- Next and previous buttons -->
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                <!-- Image text -->
                <div  class="caption-container">
                    <p id="caption">Imágenes</p>
                </div>
                <!-- Thumbnail images -->
                <div id="thumbnails" class="row">
                </div>
            </div>
            <div id="detalles" class="details">
            </div>
        </div>
      <!-- end DETALLES DEPARTAMENTOS-->
      <my-footer></my-footer>
      <!-- Javascript files-->
      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/custom.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      <script src="js/template.js"></script>
      <script src="js/funciones_detalle.js"></script>
   </body>
</html>