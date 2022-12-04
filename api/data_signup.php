<?php
function db_addUsuario($signupRut,$signupNombre, $signupApellido, $signupEmail, $signupPass){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    
    $verificar = "SELECT rut_cliente, email FROM cliente WHERE rut_cliente = '.$signupRut.' OR email = '.$signupEmail.' ";
    $verificar_stid = oci_parse($connection,$verificar) or die("Query failed: ".oci_error()." Actual db_addUsuario");
    oci_execute($verificar_stid);

    if(oci_num_rows($verificar_stid) === 0){
        echo "0";
    }else{
        echo "1";
    }


    /*$sql = "INSERT INTO cliente (rut_cliente, nombres, apellidos,email,contrasena) VALUES ('$signupRut','$signupNombre', '$signupApellido', '$signupEmail', '$signupPass')";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_addUsuario");
    oci_execute($stid);*/
}
?>