<?php 
require ('config.php');
//GUARDAR EN LA BDD
function db_set()
{
    $sql = "INSERT INTO  () VALUES ()";

    $result = mysql_query($sql) or die("Query failed: ".mysql_error()." Actual db_set");
    
}

function db_getActividad(){
    $sql = "SELECT actividad_tour FROM portafolio GROUP BY actividad";

    $result = mysql_query($sql) or die("Query failed: ".mysql_error()." Actual db_getActividad");

    $data = array();

    while($_row = mysql_fetch_object($result))
    {
        $data[]  = $_row;     
    }
    echo json_encode($data);
}

?>