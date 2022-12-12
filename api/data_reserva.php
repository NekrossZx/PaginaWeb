<?php

function db_getServicio(){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
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
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
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

function db_getDep($detalle_depto){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "SELECT d.id_departamento, d.nombre, d.arriendo_diario, r.nombre as NOMBRE_REGION, d.descripcion, u.direccion
    FROM departamento D 
    JOIN ubicacion U ON d.ubicacion_id_ubicacion = u.id_ubicacion 
    JOIN region R ON u.region_id_region = r.id_region
    WHERE d.id_departamento = '$detalle_depto' ";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getDep");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_getAsoc($detalle_depto){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "SELECT sa.nombre_servicio, sa.descripcion 
    FROM DEPA_ASOC A 
    JOIN servicio_asociado SA ON a.servicio_asociado_id_servicio = sa.id_servicio  
    WHERE a.departamento_id_departamento = '$detalle_depto' ";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getAsoc");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_addReserva($nro_reserva,$total_personas,$fecha_reserva,$valor_dias,$valor_total,$rut_cliente2,$cantidad_ninos,$cantidad_adultos){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "INSERT INTO reserva (nro_reserva, total_personas, fecha_reserva , valor_dias, valor_total, cliente_rut_cliente,cantidad_ninos,cantidad_adultos,estado) 
    VALUES ('$nro_reserva','$total_personas', '$fecha_reserva', '$valor_dias', '$valor_total','$rut_cliente2','$cantidad_ninos','$cantidad_adultos','REGISTRADA')";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_addReserva");
    oci_execute($stid);
}

function db_addReserva_Depto($nro_reserva_depto,$id_depto,$fecha_inicio,$fecha_termino){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "INSERT INTO reserva_depto (reserva_nro_reserva, departamento_id_departamento, reserva_inicio , reserva_termino) 
    VALUES ('$nro_reserva_depto','$id_depto','$fecha_inicio','$fecha_termino')";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_addReserva_Depto");
    oci_execute($stid);
}
?>