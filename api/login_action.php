<?php
    include ("api/config.php");
    session_start();
    if(isset($_POST['login']))
    {
        if(empty($_POST['email']) || empty($_POST['password']))
        {
            header("location:login.php?Empty=ingresar datos");
        }else{
            $sql="SELECT * FROM cliente WHERE email='".$_POST['email']."' AND contrasena = '".$_POST['password']."' ";
            $stid = oci_parse($conn,$sql) or die("Query failed: ".oci_error()." Actual");
            oci_execute($stid);

            if(oci_fetch_assoc($stid))
            {
                $_SESSION['user'] = $_POST['email'];
                header("location:index.php");
            }
            else{
                header("location:index.php?invalid");
            }
        }
    }
?>