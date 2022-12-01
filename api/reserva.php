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

//AGREGAR NUEVO REGISTRO
if($accion == 3)
{
    $data = db_getDep();
    echo $data;
}
//AGREGAR NUEVO REGISTRO
if($accion == 4)
{
    $data = db_getAsoc();
    echo $data;
}
//                                              SUBIR FORMULARIOS

if($accion == 5)
{
    $data = db_setTransporte();
    echo $data;
}

if($accion == 6)
{
    $form = json_decode($_POST['data']);
    $data = db_addReserva(
        //RUT
        $form[0]->value,
        //NOMBRES
        $form[1]->value,
        //APELLIDOS
        $form[2]->value,
        //EMAIL
        $form[3]->value,
        //PASSWORD
        $form[4]->value
  );
  echo $data;
}


?>