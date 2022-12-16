<?php
function db_addUsuario($signupRut, $signupNombre, $signupApellido, $signupEmail, $signupPass){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');

    $sql = "INSERT INTO cliente (rut_cliente, nombres, apellidos,email,contrasena) VALUES ('$signupRut','$signupNombre', '$signupApellido', '$signupEmail', '$signupPass')";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_addUsuario");
    oci_execute($stid);
}

function db_getUser($email,$contrasena){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "SELECT * FROM cliente WHERE email = '$email' AND contrasena='$contrasena' ";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getUser");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}
?>