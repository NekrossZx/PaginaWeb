<?php
require ('data_licencias.php');

$accion = $_GET['a'];

//AGREGAR NUEVO REGISTRO
if($accion == 1)
{
//RECIBIR EL POST
$form = json_decode($_POST['data']);

db_setLicencias(
  //MES
  $form[0]->value,
  //SAP
  $form[1]->value,
  //NOMBRE TRABAJADOR
  $form[2]->value,
  //FOLIO
  $form[3]->value,
  //GENERO
  $form[4]->value,
  //PLATAFORMA
  $form[5]->value,
  //TRAMITADA
  $form[6]->value,
  //INGRESADA
  $form[7]->value,
  //FECHA RECEPCION
  $form[8]->value,
  //FECHA INICIO
  $form[9]->value,
  //FECHA TERMINO
  $form[10]->value,
  //DIAS
  $form[11]->value,
  //ESPECIALIDAD
  $form[12]->value,
  //TIPO LICENCIA
  $form[13]->value,
  //NOMBRE MEDICO
  $form[14]->value,
  //RUT MEDICO
  $form[15]->value,
  //DIRECCIÓN
  $form[16]->value,
  //TELEFONO
  $form[17]->value,
  //ESTADO
  $form[18]->value,
  //ISAPRE
  $form[19]->value,
  //MOTIVO
  $form[20]->value,
  //AFILICION AFP
  $form[21]->value,
  //FORMATO
  $form[22]->value,
  //GERENCIA
  $form[23]->value,
  //SUPERINTENDENCIA
  $form[24]->value,
  //JORNADA
  $form[25]->value,
  //CONTRATO
  $form[26]->value,
  //ESTAMENTO
  $form[27]->value
);  
}

//UPDATE A LA BDD
if($accion == 2)
{
//RECIBIR EL POST
$form = json_decode($_POST['data']);
$data = db_update(
    //ID
    $form[0]->value,
    //MES
    $form[1]->value,
    //SAP
    $form[2]->value,
    //NOMBRE TRABAJADOR
    $form[3]->value,
    //FOLIO
    $form[4]->value,
    //GENERO
    $form[5]->value,
    //PLATAFORMA
    $form[6]->value,
    //DIAS
    $form[7]->value,
    //TRAMITADA
    $form[8]->value,
    //INGRESADA
    $form[9]->value,
    //FECHA RECEPCION
    $form[10]->value,
    //FECHA INICIO
    $form[11]->value,
    //FECHA TERMINO
    $form[12]->value,
    //ESPECIALIDAD
    $form[13]->value,
    //TIPO LICENCIA
    $form[14]->value,
    //NOMBRE MEDICO
    $form[15]->value,
    //RUT MEDICO
    $form[16]->value,
    //DIRECCIÓN
    $form[17]->value,
    //TELEFONO
    $form[18]->value,
    //ESTADO
    $form[19]->value,
    //ISAPRE
    $form[20]->value,
    //MOTIVO
    $form[21]->value,
    //AFILICION AFP
    $form[22]->value,
    //FORMATO
    $form[23]->value,
    //GERENCIA
    $form[24]->value,
    //SUPERINTENDENCIA
    $form[25]->value,
    //JORNADA
    $form[26]->value,
    //CONTRATO
    $form[27]->value,
    //ESTAMENTO
    $form[28]->value
);  
echo $data;
}

//CAMBIAR ESTADO
if($accion == 3)
{
  //RECIBIR EL POST
  $form = json_decode($_POST['data']);

  db_cambiarEstado(
    //ID
    $form[0]->value,
    //ESTADO
    $form[1]->value
  );
  echo $data;
}

//MOSTRAR DATA EN DATATABLE
if ($accion == 4)
{
  $data = db_getLicencias();
  echo $data;
}

//ACCIONES LLAMAR QUERY DROPDOWS

//OBTENER SAP
if ($accion == 5)
{
  $data = db_getSap();
  echo $data;
}
//OBTENER ESPECIALIDAD
if ($accion == 6)
{
  $data = db_getEspecialidad();
  echo $data;
}

//OBTENER TIPO LICENCIA
if ($accion == 7)
{
  $data = db_getTipo_Licencias();
  echo $data;
}
//OBTENER ISAPRE
if ($accion == 8)
{
  $data = db_getIsapre();
  echo $data;
}
//OBTENER MOTIVO
if ($accion == 9)
{
  $data = db_getMotivo();
  echo $data;
}
//OBTENER GERENCIA
if ($accion == 10)
{
  $data = db_getGerencia();
  echo $data;
}
//OBTENER SUPERINTENDENCIA
if ($accion == 11)
{
  $data = db_getSuperinte();
  echo $data;
}
//OBTENER JORNADA
if ($accion == 12)
{
  $data = db_getJornada();
  echo $data;
}

?>