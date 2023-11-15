<?php

require_once('dbRegister.php');

$id = $_COOKIE["user_id"];

$sql = "SELECT `username` FROM `users` WHERE `id` = '$id'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $username = $row["username"];
    
    echo $username;
}
