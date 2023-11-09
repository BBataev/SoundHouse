<?php

$target = "../users_media/" . $_COOKIE['user_id'] . '.jpg';

unlink($target);

header('Location: ../user/profile');
exit;