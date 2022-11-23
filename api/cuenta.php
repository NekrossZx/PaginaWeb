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
    $form = json_decode($_POST['data']);
    $data = db_updateReserva(
        //ID
        $form[0]->value,
        //ID
        $form[1]->value
    );
    echo $data;

}


?>