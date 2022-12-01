<?php
function db_addUsuario($signupRut,$signupNombre, $signupApellido, $signupEmail, $signupPass){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "INSERT INTO cliente (rut_cliente, nombres, apellidos,email,contrasena) VALUES ('$signupRut','$signupNombre', '$signupApellido', '$signupEmail', '$signupPass')";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_addUsuario");
    oci_execute($stid);
}
?>