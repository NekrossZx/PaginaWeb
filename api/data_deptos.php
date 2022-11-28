<?php

function db_getDeptos(){
    $connection = oci_connect('ADMINS', '1234', '192.168.56.1');
    $sql = "SELECT d.id_departamento, d.nombre, d.arriendo_diario, r.nombre as NOMBRE_REGION,f.url_imagen AS IMAGEN
    FROM departamento D 
    JOIN ubicacion U ON d.ubicacion_id_ubicacion = u.id_ubicacion 
    JOIN region R ON u.region_id_region = r.id_region
    JOIN foto_muestra F ON f.departamento_id_departamento = d.id_departamento
    WHERE d.id_departamento != 0
    ORDER BY id_departamento";

    $stid = oci_parse($connection,$sql);
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_getRegion(){
    $connection = oci_connect('ADMINS', '1234', '192.168.56.1');
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

function db_getRango(){
    $connection = oci_connect('ADMINS', '1234', '192.168.56.1');
    $sql = "SELECT arriendo_diario FROM departamento WHERE id_departamento != '0' GROUP BY arriendo_diario ORDER BY arriendo_diario ASC";

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

    $connection = oci_connect('ADMINS', '1234', '192.168.56.1');
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
    $connection = oci_connect('ADMINS', '1234', '192.168.56.1');
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

function db_getAsociados(){
    $connection = oci_connect('ADMINS', '1234', '192.168.56.1');
    $sql = "SELECT sa.nombre_servicio, sa.descripcion
    FROM departamento D 
    JOIN ubicacion U ON d.ubicacion_id_ubicacion = u.id_ubicacion 
    JOIN region R ON u.region_id_region = r.id_region
    JOIN DEPA_ASOC A ON a.departamento_id_departamento = d.id_departamento
    JOIN servicio_asociado SA ON a.servicio_asociado_id_servicio = sa.id_servicio
    WHERE d.id_departamento = 1 ";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getAsociados");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}
?>