<?php

if (isset($_FILES["image"]) && $_FILES["image"]["error"] == 0) {
    $target = "../users_media/profileImage/" . $_COOKIE['user_id'] . '_PROF.jpg';
    move_uploaded_file($_FILES["image"]["tmp_name"], $target);
    header('Location: ../user/profile');
    exit;
} else {
    echo "No file uploaded or an error occurred.";
}
