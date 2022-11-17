<?php
    session_start();
    $conn = oci_connect('ADMINS', '123', '192.168.56.1');
    if(isset($_POST['submit'])){
        $user = $_POST['email'];
        $pass = $_POST['password'];
        $sql = "SELECT * FROM CLIENTE WHERE email='$user' AND password='$pass'";
        $s = oci_parse($conn, $sql);       
        oci_execute($s);
        $row = oci_fetch_all($s, $res);
        if($row){
            $_SESSION['user']=$user;
            $_SESSION['time_start_login'] = time();
                header("location: index.html");
        }else{
            echo "wrong password or username";
        }
    }
?>



