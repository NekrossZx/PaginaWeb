<?php

function db_getDeptos(){
    $connection = oci_connect('ADMINS', '123', '192.168.56.1');
    $sql = "SELECT d.id_departamento, d.nombre, d.arriendo_diario, r.nombre as NOMBRE_REGION
    FROM departamento D 
    JOIN ubicacion U ON d.ubicacion_id_ubicacion = u.id_ubicacion 
    JOIN region R ON u.region_id_region = r.id_region
    ORDER BY id_departamento";

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
    $sql = "SELECT r.nombre
    FROM region R
    JOIN ubicacion U ON r.id_region = u.region_id_region
    GROUP BY r.nombre
    ORDER BY r.nombre";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getRegion");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_getRango(){
    $connection = oci_connect('ADMINS', '123', '192.168.56.1');
    $sql = "SELECT (MAX(arriendo_diario)) as MAX, (MIN(arriendo_diario)) AS MIN FROM departamento";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getRango");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_getCarrusel(){

    $connection = oci_connect('ADMINS', '123', '192.168.56.1');
    $sql = "SELECT f.url_imagen, f.descripcion 
    FROM foto F 
    JOIN departamento D ON f.departamento_id_departamento = d.id_departamento 
    WHERE d.id_departamento = 1";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getCarrusel");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_getDetails(){
    $connection = oci_connect('ADMINS', '123', '192.168.56.1');
    $sql = "SELECT d.id_departamento, d.nombre, d.arriendo_diario, r.nombre as NOMBRE_REGION, d.banos, d.metros_cuadrados, d.habitaciones, d.descripcion
    FROM departamento D 
    JOIN ubicacion U ON d.ubicacion_id_ubicacion = u.id_ubicacion 
    JOIN region R ON u.region_id_region = r.id_region
    WHERE d.id_departamento = 1 ";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getDetails");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}


?>