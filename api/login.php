<?php
require ('login_data.php');

$uname =  oci_real_escape_string($con,$_POST['username']);
$password = oci_real_escape_string($con,$_POST['password']);

if ($uname != "" && $password != ""){

    $sql_query = "select count(*) as cntUser from users where username='".$uname."' and password='".$password."'";
    $result = oci_query($con,$sql_query);
    $row = oci_fetch_array($result);

    $count = $row['cntUser'];

    if($count > 0){
        $_SESSION['uname'] = $uname;
        echo 1;
    }else{
        echo 0;
    }

}

$accion = $_GET['a'];
if($accion == 1)
{
    $data = db_getActividad();
    echo $data;
}
?>