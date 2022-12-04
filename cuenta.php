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
        <link rel="stylesheet" href="css/style-cuenta.css">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
        <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/jq-3.6.0/dt-1.13.1/af-2.5.1/b-2.3.2/b-colvis-2.3.2/b-html5-2.3.2/cr-1.6.1/date-1.2.0/fc-4.2.1/fh-3.3.1/kt-2.8.0/r-2.4.0/rg-1.3.0/rr-1.3.1/sc-2.0.7/sb-1.4.0/sp-2.1.0/sl-1.5.0/sr-1.2.0/datatables.min.css"/>
        <link rel="stylesheet" href="css/toastr.css">
        <!-- responsive-->
        <link rel="stylesheet" href="css/responsive.css">
        <!-- awesome fontfamily -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
     <!-- body -->
    <body class="main-layout">
      <user-header></user-header>
      <div class="container">
        <div class="view-account" id="fondo">
            <section class="module">
                <div class="module-inner">
                    <div class="side-bar">
                        <div class="user-info">
                            <h1 class="label label-info">MI CUENTA</h1>
                        </div>
                    <nav class="side-menu">
                        <ul class="nav">
                            <li class="active" id="perfil_btn" ><a href="#" id="perfil"><span id="icon_perfil" class="fa fa-user"></span>Perfil</a></li>
                            <li id="reservas_btn" ><a href="#" id="reservas"><span id="icon_reserva" class="fa fa-credit-card"></span>Mis reservas</a></li>
                        </ul>
                    </nav>
                    </div>
                    <div class="content-panel" id="form_perfil">
                        
                    </div>
                    <div class="content-panel form-hidden" id="mis_reservas">
                        <fieldset class="fieldset">
                            <h3 class="fieldset-title">Historial Reservas</h3>
                            <div class="form-horizontal">     
                                <div class="col-md-12 ">
                                    <table class="table table-bordered display nowrap" cellspacing="0" width="100%" id="dt_reserva">
                                        <thead>
                                            <th>Número Reserva</th>
                                            <th>Estado</th>
                                            <th>Nombre Departamento</th>
                                            <th>Fecha Registro</th>
                                            <th>Fecha Inicio</th>
                                            <th>Fecha Termino</th>
                                            <th>Valor Total</th>
                                            <th>Acciones</th>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </section>
        </div>
    </div>


        <my-footer></my-footer>
        <!-- Javascript files-->
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/custom.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
        <script src="js/jquery-3.0.0.min.js"></script>
        <script src="js/template.js"></script>
        <script src="js/funciones_cuenta.js"></script>
        <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
        <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/jq-3.6.0/dt-1.13.1/af-2.5.1/b-2.3.2/b-colvis-2.3.2/b-html5-2.3.2/cr-1.6.1/date-1.2.0/fc-4.2.1/fh-3.3.1/kt-2.8.0/r-2.4.0/rg-1.3.0/rr-1.3.1/sc-2.0.7/sb-1.4.0/sp-2.1.0/sl-1.5.0/sr-1.2.0/datatables.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
        <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
   </body>
</html>