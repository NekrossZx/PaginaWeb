<?php
require ('data_deptos.php');
$accion = $_GET['a'];

//AGREGAR NUEVO REGISTRO
if($accion == 1)
{
    $data = db_getDeptos();
    echo $data;
}

//AGREGAR NUEVO REGISTRO
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
?>