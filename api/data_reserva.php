<?php

function db_getServicio(){
    $connection = oci_connect('ADMINS', '123', '192.168.56.1');
    $sql = "SELECT * FROM servicio_extra WHERE disponibilidad != 'N'";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getServicio");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_getActividad(){
    $connection = oci_connect('ADMINS', '123', '192.168.56.1');
    $sql = "SELECT * FROM actividad_tour";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getActividad");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}



?>