<?php

function db_getUsuario($rut_cliente){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "SELECT * FROM cliente WHERE rut_cliente = '$rut_cliente'";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getUsuario");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_getLogin($email, $contrasena){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "SELECT * FROM cliente WHERE email = '$email' AND contrasena = '$contrasena'";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getLogin");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_getReservas($rut_cliente){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "SELECT r.nro_reserva, r.estado, d.nombre, r.fecha_reserva, r.valor_total, rd.reserva_inicio, rd.reserva_termino 
    FROM RESERVA R 
    JOIN reserva_depto RD ON r.nro_reserva = rd.reserva_nro_reserva 
    JOIN departamento D ON rd.departamento_id_departamento = d.id_departamento
    WHERE cliente_rut_cliente = '$rut_cliente' ";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getReservas");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_updateReserva($nro_reserva){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "UPDATE reserva SET estado = 'CANCELADA' WHERE nro_reserva = '.$nro_reserva.'";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_updateReserva");
    oci_execute($stid);
}

function db_updateUser($rut,$nombres, $apellidos, $telefono, $correo, $pass){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "UPDATE cliente SET nombres = '".$nombres."', apellidos = '".$apellidos."', telefono = '".$telefono."', email = '".$correo."'  WHERE rut_cliente = '".$rut."' AND contrasena = ".$pass." ";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_updateUser");
    oci_execute($stid);
}
?>