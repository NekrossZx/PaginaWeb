<?php

//CONECTAMOS CON LA BBDD
$conn = oci_connect('ADMINS', '1234', '192.168.56.1/XE');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}else{
    echo"conexion realizada";
}

?>
