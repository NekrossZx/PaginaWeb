<?php

require ('data_cuenta.php');
$accion = $_GET['a'];

//AGREGAR NUEVO REGISTRO
if($accion == 1)
{
    $data = db_getReservas();
    echo $data;
}


?>