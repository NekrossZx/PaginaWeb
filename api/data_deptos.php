<?php

function db_getDeptos(){
    $connection = oci_connect('ADMINS', '123', '192.168.56.1');
    $sql = "SELECT d.id_departamento, d.nombre, d.arriendo_diario, d.habitaciones, d.banos, d.descripcion, r.nombre as NOMBRE_REGION 
    FROM departamento D JOIN ubicacion U ON d.id_departamento = u.id_ubicacion JOIN region R ON u.region_id_region = r.id_region WHERE d.reservado !='Y' 
    ORDER BY r.nombre";

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
    $connection = oci_connect('ADMINS', '123', '192.168.56.1');
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