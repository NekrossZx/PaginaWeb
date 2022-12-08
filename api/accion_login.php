<?php 

session_start();
if(isset($_SESSION['emailUser'])){
    echo "<script> alert('SESION INICIADA');</script>";
}

if(isset($_POST['btn_login'])){

    $connection = oci_connect('TURISMOREAL', '123', 'localhost');

    $email = $_POST['email'];
    $clave = $_POST['contrasena'];

    $sql = "SELECT * FROM cliente WHERE email = '.$email.' AND contrasena = '.$clave.' ";
    $stid = oci_parse($connection,$sql);
    oci_execute($stid);

    $nro = oci_num_rows($stid);

    if(!isset($_SESSION['emailUser'])){
        if($nro==1){
            $_SESSION['emailUser']=$email;
            echo "<script> alert('USUARIO ENCONTRADO');</script>";
        }else{
            echo "<script> alert('USUARIO no ENCONTRADO');</script>";
        }
    }
    
}

?>  