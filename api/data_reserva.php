<?php

function db_getServicio(){
    $connection = oci_connect('ADMINS', '1234', '192.168.56.1/XE');
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
    $connection = oci_connect('ADMINS', '1234', '192.168.56.1/XE');
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

function db_getDeptos(){
    $connection = oci_connect('ADMINS', '1234', '192.168.56.1/XE');
    $sql = "SELECT id_departamento, nombre, arriendo_diario, habitaciones, banos, descripcion FROM departamento WHERE reservado != 'Y'";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getDeptos");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_getRegion(){
    $connection = oci_connect('ADMINS', '1234', '192.168.56.1/XE');
    $sql = "SELECT nombre FROM region";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getRegion");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

?>