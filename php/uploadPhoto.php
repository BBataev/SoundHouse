<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_FILES["image"]) && $_FILES["image"]["error"] == 0) {
        $target = "../users_media/" . $_COOKIE['user_id'] . '.jpg';
        move_uploaded_file($_FILES["image"]["tmp_name"], $target);
        header('Location: ../user/profile');
        exit;
    } else {
        echo "No file uploaded or an error occurred.";
    }
} else {
    echo "request method non POST";
}