<?php

function db_getReservas(){
    $connection = oci_connect('ADMINS', '123', '192.168.56.1');
    $sql = "SELECT * FROM reserva";

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