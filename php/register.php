<?php 

require_once('dbRegister.php');

function generateRandomString($length) {
    $characters = array_merge(range('a', 'z'), range('A', 'Z'));
    $randomString = '';

    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[array_rand($characters)];
    }

    return $randomString;
}

$accent = '#ff4b4b';
$profile = '#565656';
$main = '#383838';
$text = '#ffffff';

$randomValue = generateRandomString(44);

if (isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['reppassword'])) {
    $id = rand(1000000000, 10000000000) . "_" . $randomValue;
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $reppassword = $_POST['reppassword'];

    $sql_users = "INSERT INTO `users` (id, username, email, password) VALUES ('$id', '$username', '$email', '$password')";
    $sql_styles = "INSERT INTO `style` (id, accent, profile, main, text) VALUES ('$id', '$accent', '$profile', '$main', '$text')";
    
    $result = $conn->query($sql_styles);

    if ($password === $reppassword) {
        if ($conn -> query($sql_users) === TRUE) {
            session_start();

            $cookie_name = 'remember_me';
            $cookie_value = base64_encode($username . ':' . $password);
            setcookie($cookie_name, $cookie_value, time() + 30 * 24 * 60 * 60, '/'); // 30 дней

            $cookie_name_id = 'user_id';
            setcookie($cookie_name_id, $id, time() + 30 * 24 * 60 * 60 * 12 * 60, '/'); // 60 лет лол

            header('Location: ../main');
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

