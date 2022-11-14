<?php
function db_addUsuario($rut,$nombres,$apellidos,$email,$password)
{
    $connection = oci_connect('ADMINS', '123', '192.168.56.1');
    $sql = "INSERT INTO cliente (rut,nombres,apellidos,email,contrasena)
    VALUES ('$rut','$nombres','$apellidos','$email','$password')";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_addUsuario");
    oci_execute($stid);    
}

?>

