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
    $form = json_decode($_GET['data']);
    $data = db_getDep($form[0]->value);
    echo $data;
}
//AGREGAR NUEVO REGISTRO
if($accion == 4)
{
    $form = json_decode($_GET['data']);
    $data = db_getAsoc($form[0]->value);
    echo $data;
}
//                                              SUBIR FORMULARIOS

if($accion == 5)
{
    $form = json_decode($_POST['data']);
    $data = db_addTransporte(
        //NRO RESERVA
        $form[0]->value,
        //IDA HORA
        $form[1]->value,
        //IDA VALOR
        $form[2]->value,
        //IDA REGION ORIGEN
        $form[3]->value,
        //IDA ORIGEN
        $form[4]->value,
        //IDA REGION DESTINO
        $form[5]->value,
        //IDA DESTINO
        $form[6]->value,
        //VUELTA HORA
        $form[7]->value,
        //VUELTA VALOR
        $form[8]->value,
        //VUELTA REGION ORIGEN
        $form[9]->value,
        //VUELTA ORIGEN
        $form[10]->value,
        //VUELTA REGION DESTINO
        $form[11]->value,
        //VUELTA DESTINO
        $form[12]->value,
        //VALOR TRANSPORTE
        $form[13]->value
  );
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