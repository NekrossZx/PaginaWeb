<?php
require ('data_login.php');
$accion = $_GET['a'];

if($accion == 1)
{
    $form = json_decode($_POST['data']);

    db_addUsuario(
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
}

if($accion == 2){
  $form = json_decode($_POST['data']);

  db_login(
    //RUT
    $form[0]->value,
    //NOMBRES
    $form[1]->value
  );
}

?>