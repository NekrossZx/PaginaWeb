<?php
//CONECTAMOS CON LA BBDD
$connection = oci_connect('ADMINS', '123', '192.168.56.1');
if (!$connection) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}else{
    echo"conexion realizada";
}

//oci_close($conn);
?>
