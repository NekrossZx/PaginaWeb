<?php

  if(isset($_POST['logout']))
  {
    session_destroy();
    header("location:index.php");
  }else{
    header("location:login.php");
  }

?>