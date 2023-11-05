<?php 

require_once('db.php');

if (isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['reppassword'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $reppassword = $_POST['reppassword'];

    $sql = "INSERT INTO `users` (username, email, password) VALUES ('$username', '$email', '$password')";

    if ($password === $reppassword) {
        if ($conn -> query($sql) === TRUE) {
            echo 'Success';
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
