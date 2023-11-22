<?php

require_once('dbRegister.php');

$id = $_COOKIE['user_id'];

$sql = "SELECT * FROM `music` WHERE `id` = '$id'";
$result = $conn->query($sql);

$tracks = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $tracks[] = $row;
    }
}

$conn->close();

if (empty($tracks)) {
    // Вернуть ошибку в формате JSON
    header('Content-Type: application/json');
    echo json_encode(array('error' => 'No tracks found for the user'));
} else {
    // Вернуть данные в формате JSON
    header('Content-Type: application/json');
    echo json_encode($tracks);
}