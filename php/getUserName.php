<?php
require_once('db.php');

$sql = "SELECT `username` FROM `users` WHERE id = 8";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $username = $row["username"];
    
    // Отправьте имя пользователя как простой текст
    echo $username;
}
