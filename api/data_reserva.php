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

function db_addReserva_Depto($id_depto,$nro_reserva_depto,$fecha_inicio,$fecha_termino){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "INSERT INTO reserva_depto (reserva_nro_reserva, departamento_id_departamento, reserva_inicio , reserva_termino) 
    VALUES ('$nro_reserva_depto','$id_depto','$fecha_inicio','$fecha_termino')";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_addReserva_Depto");
    oci_execute($stid);
}

function db_addTransporte($nro_reserva_transporte, $ida_hora, $ida_valor, $ida_region_origen, $ida_origen, $ida_region_destino, $ida_destino, $vuelta_hora, $vuelta_valor, $vuelta_region_origen, $vuelta_origen, $vuelta_region_destino, $vuelta_destino, $valor_total){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "INSERT INTO transporte_reserva (VEHI_COND_VEHICULO_PATENTE, VEHI_COND_COND_RUT_CONDUCTOR, reserva_nro_reserva, ida_horario, ida_region_origen, ida_origen, ida_region_destino, 
    ida_destino, vuelta_horario, vuelta_region_origen, vuelta_origen, vuelta_region_destino, vuelta_destino, valor_ida, valor_vuelta, valor_total) 
    VALUES (null,null,'$nro_reserva_transporte', '$ida_hora', '$ida_region_origen', '$ida_origen', '$ida_region_destino', '$ida_destino', '$vuelta_hora', '$vuelta_region_origen', '$vuelta_origen', '$vuelta_region_destino', '$vuelta_destino', '$ida_valor', '$vuelta_valor', '$valor_total')";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_addTransporte");
    oci_execute($stid);
}

function db_addReserva_Extra($nro_reserva_extras, $total_extra, $servicio_extra1, $servicio_extra2, $servicio_extra3){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "INSERT INTO reserva_servicio_extra (reserva_nro_reserva, nombre_servicio_1, nombre_servicio_2, nombre_servicio_3, valor_total) 
    VALUES ('$nro_reserva_extras', '$total_extra', '$servicio_extra1', '$servicio_extra2', '$servicio_extra3')";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_addReserva_Extra");
    oci_execute($stid);
}

function db_addReserva_Tour($nro_reserva_tour, $actividad1, $actividad2, $actividad3, $duracion_tour, $total_tour){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "INSERT INTO tour (reserva_nro_reserva, nombre_actividad_1, nombre_actividad_2, nombre_actividad_3, duracion_total, valor_total) 
    VALUES ('$nro_reserva_tour', '$actividad1', '$actividad2', '$actividad3', '$total_tour', '$duracion_tour')";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_addReserva_Extra");
    oci_execute($stid);
}

function db_addPago($pago, $fecha_pago, $monto){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');

    $sql = "INSERT INTO pago (id_pago, fecha_pago, estado, monto) VALUES ('$pago', '$fecha_pago', 'RECIBIDO', '$monto')";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_addPago");
    oci_execute($stid);
}

function db_getPago(){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');
    $sql = "SELECT MAX(ID_PAGO)+1 AS PAGO FROM PAGO";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_getPago");
    oci_execute($stid);

    $data = array();
    while($row = oci_fetch_object($stid))
    {
        $data[] = $row;     
    }
    echo json_encode($data);
}

function db_addReserva_Pago($id_reserva, $id_pago, $comprobante_64){
    $connection = oci_connect('TURISMOREAL', '123', 'localhost');

    $sql = "INSERT INTO pago_reserva (reserva_nro_reserva, pago_id_pago, descripcion, medio_pago, comprobante_transferencia) 
    VALUES ('$id_reserva', '$id_pago', 'RESERVA', 'TRANSFERENCIA', '$comprobante_64')";

    $stid = oci_parse($connection,$sql) or die("Query failed: ".oci_error()." Actual db_addReserva_Pago");
    oci_execute($stid);
}
?>