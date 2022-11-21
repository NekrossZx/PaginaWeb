<?php

function db_getUsuario(){
    $connection = oci_connect('ADMINS', '1234', '192.168.56.1');
    $sql = "SELECT * FROM cliente WHERE rut_cliente = '17465789-3' ";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getUsuario");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_getReservas(){
    $connection = oci_connect('ADMINS', '1234', '192.168.56.1');
    $sql = "SELECT *  FROM RESERVA WHERE cliente_rut_cliente = '18459267-3' ";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getReservas");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

?>