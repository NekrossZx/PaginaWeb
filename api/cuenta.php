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

//ACTUALIZAR USUARIO
if($accion == 4)
{
    $form = json_decode($_POST['data']);
    $data = db_updateUser(
        $form[0]->value,
        $form[1]->value,
        $form[2]->value,
        $form[3]->value,
        $form[4]->value
    );
    echo $data;
}
//ACTUALIZAR CONTRASEÑA
if($accion == 5)
{
    $form = json_decode($_POST['data']);
    $data = db_updatePass(
        $form[0]->value,
        $form[1]->value,
        $form[2]->value,
        $form[3]->value,
        $form[4]->value,
        $form[5]->value
    );
    echo $data;
}

?>