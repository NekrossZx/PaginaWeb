<?php

function db_getServicio(){
    $connection = oci_connect('ADMINS', '1234', 'localhost');
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
    $connection = oci_connect('ADMINS', '1234', 'localhost');
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

function db_getDep(){
    $connection = oci_connect('ADMINS', '1234', 'localhost');
    $sql = "SELECT d.id_departamento, d.nombre, d.arriendo_diario, r.nombre as NOMBRE_REGION, d.descripcion, u.direccion
    FROM departamento D 
    JOIN ubicacion U ON d.ubicacion_id_ubicacion = u.id_ubicacion 
    JOIN region R ON u.region_id_region = r.id_region
    WHERE d.id_departamento = 1 ";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getDep");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_getAsoc(){
    $connection = oci_connect('ADMINS', '1234', 'localhost');
    $sql = "SELECT sa.nombre_servicio, sa.descripcion FROM DEPA_ASOC A JOIN servicio_asociado SA ON a.servicio_asociado_id_servicio = sa.id_servicio  WHERE a.departamento_id_departamento = 1";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getAsoc");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

?>