<?php
require ('data_deptos.php');
$accion = $_GET['a'];

//DEPARTAMENTO
if($accion == 1)
{
    $data = db_getDeptos();
    echo $data;
}

//REGION
if($accion == 2)
{
    $data = db_getRegion();
    echo $data;
}

//RANGO VALOR 
if($accion == 3)
{
    $data = db_getRango();
    echo $data;
}

//CARRUSEL 
if($accion == 4)
{   $form = json_decode($_GET['data']);
    $data = db_getCarrusel($form[0]->value);
    echo $data;
}

//DETALLES 
if($accion == 5)
{
    $form = json_decode($_GET['data']);
    $data = db_getDetails(
        $form[0]->value
    );
    echo $data;
}

//SERVICIOS ASOCIADOS 
if($accion == 6)
{
    $form = json_decode($_GET['data']);
    $data = db_getAsociados($form[0]->value);
    echo $data;
}

?>