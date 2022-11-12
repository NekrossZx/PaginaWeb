<?php
require ('data_dptos.php');
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
?>