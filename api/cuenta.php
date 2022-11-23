<?php

require ('data_cuenta.php');
$accion = $_GET['a'];

//AGREGAR NUEVO REGISTRO
if($accion == 1)
{
    $data = db_getReservas();
    echo $data;
}
//MOSTRAR CLIENTE
if($accion == 2)
{
    $data = db_getUsuario();
    echo $data;
}
//ACTUALIZAR RESERVA
if($accion == 3)
{
    $data = db_updateReserva();
    echo $data;
}


?>