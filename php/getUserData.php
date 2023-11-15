<?php

require_once('dbRegister.php');

$id = $_GET['userId'];

$sql = "SELECT * FROM `users` WHERE `id` = '$id'";
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

$conn->close();