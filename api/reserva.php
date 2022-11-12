<?php
require ('data_reserva.php');
$accion = $_GET['a'];

//AGREGAR NUEVO REGISTRO
if($accion == 1)
{
    $data = db_getServicio();
    echo $data;
}

//AGREGAR NUEVO REGISTRO
if($accion == 2)
{
    $data = db_getActividad();
    echo $data;
}
?>