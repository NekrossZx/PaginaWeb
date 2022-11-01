<?php 
require ('config.php');
//GUARDAR EN LA BDD
function db_setLicencias($mes,$sap,$nombre_trabajador,$folio,$genero,$plataforma,$tramitada,$ingresada,$fecha_recepcion,$fecha_inicio,$fecha_termino,$dias,$especialidad_medica,
$tipo_licencia,$nombre_medico,$rut_medico,$direccion_licencia,$telefono, $estado, $isapre, $motivo, $afiliacion_afp, $formato, $gerencia, $superintendencia, $jornada, $contrato, $estamento)
{
    $sql = "INSERT INTO app_licencias (mes, sap, nombre_trabajador, folio, genero, plataforma, tramitada, ingresada, fecha_recepcion, fecha_inicio, fecha_termino, dias, especialidad_medica, tipo_licencia, nombre_medico, rut_medico,
    direccion_licencia, telefono, estado, isapre, motivo, afiliacion_afp, formato, gerencia, superintendencia, jornada, contrato, estamento)
    VALUES ('$mes','$sap','$nombre_trabajador','$folio','$genero','$plataforma','$tramitada','$ingresada','$fecha_recepcion','$fecha_inicio','$fecha_termino','$dias','$especialidad_medica','$tipo_licencia','$nombre_medico','$rut_medico',
    '$direccion_licencia','$telefono','$estado','$isapre','$motivo','$afiliacion_afp','$formato','$gerencia','$superintendencia','$jornada','$contrato','$estamento')";

    $result = mysql_query($sql) or die("Query failed: ".mysql_error()." Actual db_setLicencias");    
}

function db_update($id, $mes, $sap, $nombre_trabajador, $folio, $genero, $plataforma, $tramitada, $ingresada, $fecha_recepcion, $fecha_inicio, $fecha_termino, $dias, $especialidad_medica, $tipo_licencia, $nombre_medico,
$rut_medico, $direccion_licencia, $telefono, $estado, $isapre, $motivo, $afiliacion_afp, $formato, $gerencia, $superintendencia, $jornada, $contrato, $estamento)
{
    $sql = "UPDATE app_licencias SET mes='".$mes."', sap = '".$sap."', nombre_trabajador = '".$nombre_trabajador."', folio = '".$folio."', genero = '".$genero."', plataforma = '".$plataforma."',  
    tramitada = '".$tramitada."', ingresada = '".$ingresada."',fecha_recepcion = '".$fecha_recepcion."', fecha_inicio = '".$fecha_inicio."', fecha_termino = '".$fecha_termino."', dias = '".$dias."', especialidad_medica = '".$especialidad_medica."', 
    tipo_licencia = '".$tipo_licencia."', rut_medico = '".$rut_medico."', nombre_medico = '".$nombre_medico."', direccion_licencia = '".$direccion_licencia."', telefono = '".$telefono."' , estado = '".$estado."' , 
    isapre = '".$isapre."', motivo = '".$motivo."', afiliacion_afp = '".$afiliacion_afp."', formato = '".$formato."', gerencia = '".$gerencia."', superintendencia = '".$superintendencia."', jornada = '".$jornada."', 
    contrato = '".$contrato."', estamento = '".$estamento."' 
    WHERE id = '".$id."' " ;

    $result = mysql_query($sql) or die("Query failed: ".mysql_error()." Actual db_update");
}

//CONSULTA PARA ELIMINAR INFORMACIÓN DE LA TABLA
function db_cambiarEstado($id,$estado){

    $sql = "UPDATE app_licencias SET estado = '".$estado."' WHERE id = '".$id."' ";
    $result = mysql_query($sql) or die("Query failed: ".mysql_error()." Actual db_cambiarEstado");
}

//CONSULTA PARA LLENAR TABLA
function db_getLicencias()
{
    $sql = "SELECT l.*,es.nombre_estado AS estado
    FROM app_licencias l 
    INNER JOIN app_licencias_estado es ON es.id = l.estado
    WHERE l.estado != 'Eliminado'";

    $result = mysql_query($sql) or die("Query failed: ".mysql_error()." Actual db_getLicencias");

    $data = array();

    while($_row = mysql_fetch_object($result))
    {
        $data[]  = $_row;     
    }
    echo json_encode($data);
}


//CONSULTAS PARA DROPDOWN LIST

//CONSULTA PARA TRAER SAP
function db_getSap(){
    $sql = "SELECT nro, nombre, rut FROM app_personal_maestro GROUP BY nro";

    $result = mysql_query($sql) or die("Query failed: ".mysql_error()." Actual db_getSap");

    $data = array();

    while($_row = mysql_fetch_object($result))
    {
        $data[]  = $_row;     
    }
    echo json_encode($data);
}

//CONSULTA PARA TRAER ESPECIALIDAD
function db_getEspecialidad(){
    $sql = "SELECT especialidad FROM app_licencias_especialidad GROUP BY especialidad";

    $result = mysql_query($sql) or die("Query failed: ".mysql_error()." Actual db_getEspecialidad");

    $data = array();

    while($_row = mysql_fetch_object($result))
    {
        $data[]  = $_row;     
    }
    echo json_encode($data);
}

//CONSULTA PARA TRAER TIPO LICENCIAS
function db_getTipo_Licencias(){
    $sql = "SELECT tipo_licencia FROM app_licencias_tipo GROUP BY tipo_licencia";

    $result = mysql_query($sql) or die("Query failed: ".mysql_error()." Actual db_getTipo_Licencias");

    $data = array();

    while($_row = mysql_fetch_object($result))
    {
        $data[]  = $_row;     
    }
    echo json_encode($data);
}

//CONSULTA PARA TRAER ISAPRE
function db_getIsapre(){
    $sql = "SELECT isapre FROM app_licencias_isapre GROUP BY isapre";

    $result = mysql_query($sql) or die("Query failed: ".mysql_error()." Actual db_getIsapre");

    $data = array();

    while($_row = mysql_fetch_object($result))
    {
        $data[]  = $_row;     
    }
    echo json_encode($data);
}

//CONSULTA PARA TRAER MOTIVO
function db_getMotivo(){
    $sql = "SELECT motivo FROM app_licencias_motivo GROUP BY motivo";

    $result = mysql_query($sql) or die("Query failed: ".mysql_error()." Actual db_getMotivo");

    $data = array();

    while($_row = mysql_fetch_object($result))
    {
        $data[]  = $_row;     
    }
    echo json_encode($data);
}

//CONSULTA PARA TRAER GERENCIA
function db_getGerencia(){
    $sql = "SELECT gerencia FROM app_sobretiempo_aprobadores GROUP BY gerencia";

    $result = mysql_query($sql) or die("Query failed: ".mysql_error()." Actual db_getGerencia");

    $data = array();

    while($_row = mysql_fetch_object($result))
    {
        $data[]  = $_row;     
    }
    echo json_encode($data);
}

//CONSULTA PARA TRAER SUPERINTENDENCIA
function db_getSuperinte(){
    $sql = "SELECT superintendencia FROM app_licencias_superinte GROUP BY superintendencia";

    $result = mysql_query($sql) or die("Query failed: ".mysql_error()." Actual db_getSuperinte");

    $data = array();

    while($_row = mysql_fetch_object($result))
    {
        $data[]  = $_row;     
    }
    echo json_encode($data);
}

//CONSULTA PARA TRAER JORNADA
function db_getJornada(){
    $sql = "SELECT jornada FROM app_licencias_jornada GROUP BY jornada";

    $result = mysql_query($sql) or die("Query failed: ".mysql_error()." Actual db_getJornada");

    $data = array();

    while($_row = mysql_fetch_object($result))
    {
        $data[]  = $_row;     
    }
    echo json_encode($data);
}

?>