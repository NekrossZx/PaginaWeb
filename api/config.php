<?php

// [username], [password], //[hostname]:[port]/[DB service name]
$c = oci_pconnect("ADMINS", "1234", "//192.168.56.1:1521/XE");
$s = oci_parse($c, "SELECT 'Hello World!' FROM dual");
oci_execute($s);
oci_fetch_all($s, $res);
echo "<pre>\n"
var_dump($res);
echo "</pre>\n";

?>
