<?php

require_once('db.php');

$newName = $_POST['username'];

$id = $_COOKIE["user_id"];

$sql = "UPDATE `users` SET `username` = '$newName' WHERE `id` = '$id'";
$result = $conn->query($sql);

header('Location: ../user/profile');
exit;