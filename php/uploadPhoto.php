<?php

$image = $_FILES["image"]["name"];
$target = "../users_media/" . 'хуй';
move_uploaded_file($_FILES["image"]["tmp_name"], $target);

if (move_uploaded_file($_FILES["image"]["tmp_name"], $target)) {
    header('Location: ../user/profile');
    exit;
}