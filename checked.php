<?php
$username=$_GET["username"];
$password=$_GET["password"];
if($username=="admin"&& $password=="111"){
    echo "success";
}else{
    echo "falied";
}
?>