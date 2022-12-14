<?php 
session_start();
if(isset($_SESSION['emailuser'])){
    echo "<script> alert('SESION INICIADA');</script>";
}

if(isset($_POST['btn_login'])){

    $connection = oci_connect('TURISMOREAL', '123', 'localhost');

    $email = $_POST['email'];
    $clave = $_POST['contrasena'];

    $sql = "SELECT * FROM cliente WHERE email = '".$email."' AND contrasena = '".$clave."' ";
    $stid = oci_parse($connection,$sql);
    oci_execute($stid);

    $nro = oci_num_rows($stid);

    if(!isset($_SESSION['emailuser'])){
        if($nro==1){
            $_SESSION['emailuser'] = $email;
            echo "<script> alert('USUARIO ENCONTRADO');</script>";
        }else{
            echo "<script> alert('USUARIO no ENCONTRADO');</script>";
        }
    }
    
}
?>  
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
      <title>LOG IN</title>
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
    <body class="main-layout">
        <user-header></user-header>
        <!-- six_box-->
        <div class="container-fluid">
            <div class="container">
                <div class="formulario">
                    <!--LOGIN-->
                    <form class="form" id="login">
                        <h1 class="form_title">Ingresar</h1><br>
                        <div class="form_input-group">
                            <input type="email" id="email" name="email" class="form-control" placeholder="Email">                    
                        </div>
                        <div class="form_input-group">
                            <input type="password" id="contrasena" name="contrasena" class="form-control" placeholder="Contrase??a">                   
                        </div>
                        <button type="button" class="form_button" id="btn_login">Ingresar</button>
                        <p class="form_text">
                            <a href="#" class="form_link" id="lostPass">??Olvidaste tu contrase??a?</a>
                        </p>
                        <p class="form_text">
                            <a class="form_link" href="./" id="linkCreateAccount">??No tienes una cuenta a??n? Crear cuenta</a>
                        </p>
                    </form>
                    <!--SIGN UP-->
                    <form class="form form-hidden" id="signup">
                        <h1 class="form_title">Crear Cuenta</h1><br>
                        <div class="form_input-group">  
                            <input type="text" id="signupRut" name="signupRut" class="form-control" placeholder="Rut">                  
                        </div>
                        <div class="form_input-group">
                            <input type="text" id="signupNombre" name="signupNombre" class="form-control" placeholder="Nombre(s)">                  
                        </div>
                        <div class="form_input-group">
                            <input type="text" id="signupApellido" name="signupApellido" class="form-control" placeholder="Apellido(s)">                  
                        </div>
                        <div class="form_input-group">
                            <input type="text" id="signupEmail" name="signupEmail" class="form-control" placeholder="Email">                    
                        </div>
                        <div class="form_input-group">
                            <input type="password" id="signupPass" name="signupPass" class="form-control" placeholder="Password">
                            <span>La contrase??a debe tener m??nimo 8 caracteres.</span>           
                        </div>
                        <button type="button" class="form_button" id="btn_createAcc">Crear Cuenta</button>
                        <p class="form_text">
                            <a class="form_link" href="./" id="linkLogin">??Ya tienes una cuenta? Ingresar</a>
                        </p>
                    </form>
                    <!--RECUPERAR-->
                    <form class="form form-hidden" id="recuperar">
                        <h1 class="form_title">Recuperar contrase??a</h1><br>
                        <div class="form_input-group">
                            <input type="email" id="recuperarEmail" name="recuperarEmail" class="form-control" placeholder="Email de Recuperaci??n">
                        </div>
                        <button class="form_button" type="submit">Recuperar</button>
                        <p class="form_text">
                            <a class="form_link" href="./" id="backLogin">Regresar</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        <!-- end six_box-->
        <my-footer></my-footer> 
        <!-- Javascript files-->
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/funciones_login.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
        <script src="js/custom.js"></script>
        <script src="js/jquery-3.0.0.min.js"></script>
        <script src="js/template.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
        <script src="js/jquery.rut.chileno.min.js"></script>
    </body>
</html>


