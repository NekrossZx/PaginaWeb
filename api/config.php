<?php

$databasetype		=	"oracle";		
$databaselocation	=	"portafolio.c3w7sjz0g5nj.sa-east-1.rds.amazonaws.com";	
$databasename	=	"portafolio";		
$databaseuser		=	"admin_javier";			
$databasepass	=	"micontrasena";			

$conexion = mysql_connect($databaselocation, $databaseuser, $databasepass);  
mysql_select_db($databasename,$conexion); 
mysql_query("SET NAMES 'utf8'");
if (!$conexion) {
    die('No pudo conectarse: ' . mysql_error());
}

?>