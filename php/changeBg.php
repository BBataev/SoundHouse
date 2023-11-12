<?php

require_once('db.php');

if (isset($_FILES["image"]) && $_FILES["image"]["error"] == 0) {
    $target = "../users_media/BgImage/" . $_COOKIE['user_id'] . '_BG.jpg';
    move_uploaded_file($_FILES["image"]["tmp_name"], $target);
    header('Location: ../user/profile');
    exit;
} else {
    echo "No file uploaded or an error occurred.";
}
