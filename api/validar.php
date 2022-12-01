<?php
function db_login($email,$contrasena){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql= "SELECT * FROM cliente WHERE email='$email' AND contrasena='$contrasena'";
    $stid = oci_parse($connection,$sql);
    oci_execute($stid);

    $row=oci_num_rows($stid);

    if ($row>0){
        echo "Exito en la autenticación";
    }else{
        echo "Error en la autenticación";
    }
}
?>