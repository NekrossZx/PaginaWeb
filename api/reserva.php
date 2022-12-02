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
        //NRO RESERVA
        $form[0]->value,
        //TOTAL PERSONAS
        $form[1]->value,
        //FECHA RESERVA
        $form[2]->value,
        //VALOR DIAS
        $form[3]->value,
        //VALOR TOTAL
        $form[4]->value,
        //RUT CLIENTE
        $form[5]->value,
        //CANTIDAD NIÑOS
        $form[6]->value,
        //CANTIDAD ADULTOS
        $form[7]->value
  );
  echo $data;
}

if($accion == 7)
{
    $form = json_decode($_POST['data']);
    $data = db_addReserva_Depto(
        //ID DEPARTAMENTO
        $form[0]->value,
        //NRO RESERVA
        $form[1]->value,
        //FECHA INICIO
        $form[2]->value,
        //FECHA TERMINO
        $form[3]->value
  );
  echo $data;
}


?>