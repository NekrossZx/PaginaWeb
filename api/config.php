<?php
//CONECTAMOS CON LA BBDD
$conn = oci_connect('ADMINS', '123', '192.168.56.1');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}else{
    echo "<script>console.log('conexion realizada');</script>";
}

//oci_close($conn);
?>
