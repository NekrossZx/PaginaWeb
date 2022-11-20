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
{
    $data = db_getCarrusel();
    echo $data;
}

//DETALLES 
if($accion == 5)
{
    $data = db_getDetails();
    echo $data;
    
}

?>