<?php
//CONECTAMOS CON LA BBDD
$conn = oci_connect('TURISMOREAL', '123', 'localhost');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}else{
    echo "conexion realizada";
}

//oci_close($conn);
?>
