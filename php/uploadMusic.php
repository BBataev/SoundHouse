<?php

require_once('dbRegister.php');

$title = $_POST['title'];
$artist = $_POST['artist'];
$filename = rand(1000000000000, 10000000000000);

$stmt = $conn->prepare("INSERT INTO `music` (id, filename, title, artist) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $_COOKIE['user_id'], $filename, $title, $artist);
$stmt->execute();
$stmt->close();

if (isset($_FILES["mp3"]) && $_FILES["mp3"]["error"] == 0) {
    $target = "../users_media/music/" . $filename . '_MUSIC.mp3';
    move_uploaded_file($_FILES["mp3"]["tmp_name"], $target);
    header('Location: ../main#music');
    exit;
}