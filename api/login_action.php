<?php
    session_start();
    $conn = oci_connect('ADMINS', '123', '192.168.56.1');

    if(isset($_POST['email']) && isset($_POST['password']))
    {
        // username and password sent from Form
        $username=oci_real_escape_string($conn,$_POST['email']); 
        //Here converting passsword into MD5 encryption. 
        $password=oci_real_escape_string($conn,$_POST['password']); 

        $sql = "SELECT * FROM cliente WHERE email='$username' and password='$password'" ;
    
        $result=oci_parse($conn, $sql);
        oci_execute($result);
        $count=oci_num_rows($result);
        $row=oci_fetch_array($result);
        // If result matched $username and $password, table row  must be 1 row
        if($count==1)
        {
            $_SESSION['login_user']=$row['email']; //Storing user session value.
            echo $row['email'];
        }
    
    }
?>