<?php
//CONECTAMOS CON LA BBDD
$conn = oci_connect('ADMINS', '1234', 'localhost');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}else{
    echo "<script>console.log('conexion realizada');</script>";
}

//oci_close($conn);
?>
