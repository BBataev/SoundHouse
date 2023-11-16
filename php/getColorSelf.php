<?php

require_once('dbRegister.php');

$id = $_COOKIE['user_id'];

$sql = "SELECT * FROM `style` WHERE `id` = '$id'";
$result = $conn->query($sql);

if ($result === false) {
    echo json_encode(['error' => 'Database error: ' . $conn->error]);
    exit;
}

if ($result->num_rows > 0) {
    $userData = $result->fetch_assoc();
    echo json_encode($userData);
} else {
    echo json_encode(['error' => 'User not found']);
}

header('Content-Type: application/json');
$conn->close();