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
    $sql = "SELECT r.nro_reserva, r.estado, d.nombre, re.nombre AS nombre_region, r.fecha_reserva, r.valor_total, rd.reserva_inicio, rd.reserva_termino 
    FROM RESERVA R 
    JOIN reserva_depto RD ON r.nro_reserva = rd.reserva_nro_reserva 
    JOIN departamento D ON rd.departamento_id_departamento = d.id_departamento 
    JOIN ubicacion U ON u.id_ubicacion = d.ubicacion_id_ubicacion 
    JOIN region RE ON re.id_region = u.region_id_region 
    WHERE cliente_rut_cliente = '17465789-3' ";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getReservas");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_updateReserva(){
    $connection = oci_connect('ADMINS', '1234', '192.168.56.1');
    $sql = "UPDATE reserva SET estado = 'estado' WHERE id_reserva = '1' ";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getReservas");
    oci_execute($stid);
}

function db_updateUser($rut,$nombres, $apellidos, $correo, $pass){
    $connection = oci_connect('ADMINS', '1234', '192.168.56.1');
    $sql = "UPDATE cliente SET nombres = '".$nombres."', apellidos = '".$apellidos."', email = '".$correo."'  WHERE rut_cliente = '".$rut."' AND contrasena = ".$pass." ";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_updateUser");
    oci_execute($stid);
}


?>