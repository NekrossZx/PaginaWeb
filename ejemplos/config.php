<?php

$databasetype		=	"mysql";		
$databaselocation	=	"delfostalent-instance-1.cmw5apadqru8.us-west-2.rds.amazonaws.com";	
$databasename	=	"app_javier";		
$databaseuser		=	"javier";			
$databasepass	=	"B7zMH47mmw^MA#Rb";			

$conexion = mysql_connect($databaselocation, $databaseuser, $databasepass);  
mysql_select_db($databasename,$conexion); 
mysql_query("SET NAMES 'utf8'");
if (!$conexion) {
    die('No pudo conectarse: ' . mysql_error());
}

?>