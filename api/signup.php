<?php
require ('data_signup.php');
$accion = $_GET['a'];

if($accion == 1)
{
  $form = json_decode($_POST['data']);
  $data = db_addUsuario(
    //RUT
    $form[0]->value,
    //NOMBRES
    $form[1]->value,
    //APELLIDOS
    $form[2]->value,
    //EMAIL
    $form[3]->value,
    //PASSWORD
    $form[4]->value
  );
  echo $data;
}

if($accion == 2)
{
  $form = json_decode($_POST['data']);
  $data = db_getUser(
    //EMAIL
    $form[0]->value,
    //CONTRASENA
    $form[1]->value
  );
  echo $data;
}

?>