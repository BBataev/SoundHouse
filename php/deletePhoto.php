<?php

$target = "../users_media/profileImage/" . $_COOKIE['user_id'] . '_PROF.jpg';

unlink($target);

header('Location: ../user/profile');
exit;