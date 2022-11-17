<?php
    session_start();
    $conn = oci_connect('ADMINS', '123', '192.168.56.1');

    if(isset($_SESSION['logged'])){
        header('Location:index.html');
        exit();
    }

    if(isset($_POST['login'])){
        $user = $_POST['email'];
        $pass = $_POST['password'];
        $sql = "SELECT * FROM CLIENTE WHERE email='$user' AND password='$pass'";
        $s = oci_parse($conn, $sql);       
        oci_execute($s);
        $row = oci_fetch_all($s, $res);
        if($row){
            $_SESSION['logged'] = '1';
            $_SESSION['user'] = $user;
            exit("<p color='green'>Ingresado correctamente</p>");
        }else{
            exit("<p color='red'>Campo invalido</p>");
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
      <link rel="stylesheet" href="css/toastr.css">
      <!-- responsive-->
      <link rel="stylesheet" href="css/responsive.css">
      <!-- awesome fontfamily -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   </head>
   <!-- body -->
   <body class="main-layout">
      <my-header></my-header>
      <!-- six_box-->
      <div class="banner_main2">
         <div class="container">
            <!--LOGIN-->
            <form class="form" id="login">
                <h1 class="form_title">Ingresar</h1><br>
                <div class="form_input-group">
                    <input type="email" id="email" name="email" class="form-control" autofocus placeholder="Email">                    
                </div>
                <div class="form_input-group">
                    <input type="password" id="password" name="password" class="form-control" autofocus placeholder="Contraseña">                   
                </div>
                <button class="form_button" id="btn_login">Ingresar</button>
                <p class="form_text">
                    <a href="#" class="form_link" id="lostPass">¿Olvidaste tu contraseña?</a>
                </p>
                <p class="form_text">
                    <a class="form_link" href="./" id="linkCreateAccount">¿No tienes una cuenta aún? Crear cuenta</a>
                </p>
            </form>
            <!--SIGN UP-->
            <form class="form form-hidden" id="signup" method="POST">
                <h1 class="form_title">Crear Cuenta</h1><br>
                <div class="form_input-group">
                    <input type="text" id="signupRut" name="signupRut" class="form-control" autofocus placeholder="Rut">                  
                </div>
                <div class="form_input-group">
                    <input type="text" id="signupNombre" name="signupNombre" class="form-control" autofocus placeholder="Nombre(s)">                  
                </div>
                <div class="form_input-group">
                    <input type="text" id="signupApellido" name="signupApellido" class="form-control" autofocus placeholder="Apellido(s)">                  
                </div>
                <div class="form_input-group">
                    <input type="text" id="signupEmail" name="signupEmail" class="form-control" autofocus placeholder="Email">                    
                </div>
                <div class="form_input-group">
                    <input type="password" id="signupPass" name="signupPass" class="form-control" autofocus placeholder="Password">                    
                </div>
                <button class="form_button" id="createAcc">Crear Cuenta</button>
                <p class="form_text">
                    <a class="form_link" href="./" id="linkLogin">¿Ya tienes una cuenta? Ingresar</a>
                </p>
            </form>
            <!--RECUPERAR-->
            <form class="form form-hidden" id="recuperar">
               <h1 class="form_title">Recuperar contraseña</h1><br>
               <div class="form_input-group">
                   <input type="email" id="recuperarEmail" name="recuperarEmail" class="form-control" autofocus placeholder="Email de Recuperación">
               </div>
               <button class="form_button" type="submit">Recuperar</button>
               <p class="form_text">
                   <a class="form_link" href="./" id="backLogin">Regresar</a>
               </p>
           </form>
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
