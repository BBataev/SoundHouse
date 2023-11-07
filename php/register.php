<?php 

require_once('db.php');

if (isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['reppassword'])) {
    $id = rand(1000000000, 10000000000);
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $reppassword = $_POST['reppassword'];

    $sql = "INSERT INTO `users` (id, username, email, password) VALUES ('$id', '$username', '$email', '$password')";
    
    if ($password === $reppassword) {
        if ($conn -> query($sql) === TRUE) {
            session_start();

            $cookie_name = 'remember_me';
            $cookie_value = base64_encode($username . ':' . $password);
            setcookie($cookie_name, $cookie_value, time() + 30 * 24 * 60 * 60, '/'); // 30 дней

            $cookie_name_id = 'user_id';
            setcookie($cookie_name_id, $id, time() + 30 * 24 * 60 * 60 * 12 * 60, '/'); // 60 лет лол

            header('Location: ../home');
            exit;
        } else {
            echo 'Error';
        }
    } else {
        echo 'Пароли не совпадают';
    }    
} else {
    echo "Не все данные были отправлены через форму.";
}

?>
