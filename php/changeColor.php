<?php

require_once('dbRegister.php');

$accentColor = $_POST['accentColor'];
$profileColor = $_POST['profileColor'];
$mainColor = $_POST['mainColor'];
$textColor = $_POST['textColor'];

$id = $_COOKIE['user_id'];

$sql = "UPDATE `style` SET `accent` =  '$accentColor', `profile` =  '$profileColor', `main` =  '$mainColor', `text` =  '$textColor' WHERE `id` = '$id'";
$result = $conn->query($sql);

if ($result === false) {
    echo json_encode(['error' => 'Database error: ' . $conn->error]);
    exit;
}

$conn->close();

header('Location: ../user/profile');
exit;