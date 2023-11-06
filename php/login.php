<?php

require_once('db.php');

$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);
$remember = isset($_POST['remember']) ? true : false;

$sql = "SELECT * FROM `users` WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);

if ($result === false) {
    // Обработка ошибки SQL
    echo 'Ошибка SQL: ' . $conn->error;
} else {
    if ($result->num_rows > 0) {
        session_start();
        $_SESSION['username'] = $username;

        // Если пользователь выбрал "Запомнить меня", создайте куку
        if ($remember) {
            $cookie_name = 'remember_me';
            $cookie_value = base64_encode($username . ':' . $password);
            setcookie($cookie_name, $cookie_value, time() + 30 * 24 * 60 * 60, '/'); // 30 дней
        }
        
        // Перенаправьте пользователя на защищенную страницу или домашнюю страницу
        header('Location: ../index.html');
        exit;
    } else {
        echo 'Пошел нахуй';
    }
}
