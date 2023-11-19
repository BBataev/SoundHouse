<?php

require_once('dbRegister.php');

$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);
$remember = isset($_POST['remember']) ? true : false;

$sql = "SELECT * FROM `users` WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);

$row = $result->fetch_assoc();
$id = $row["id"];

if ($result === false) {
    echo 'Ошибка SQL: ' . $conn->error;
} else {
    if ($result->num_rows > 0) {
        session_start();
        $_SESSION['username'] = $username;
        $cookie_name = 'remember_me';
        $cookie_value = base64_encode($username . ':' . $password);

        if ($remember) {
            setcookie($cookie_name, $cookie_value, time() + 30 * 24 * 60 * 60, '/');
            
            $cookie_name_id = 'user_id';
            setcookie($cookie_name_id, $id, time() + 30 * 24 * 60 * 60 * 60 * 60, '/');
        } else {
            setcookie($cookie_name, $cookie_value, time() + 1, '/');
        }
        header('Location: ../main');
        exit;
    } else {
        echo 'Пошел нахуй';
    }
}
