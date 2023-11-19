<?php
// Проверяем, был ли отправлен POST-запрос
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем новую фразу из формы
    $userInput = $_POST["newUrl"];

    // Проверяем, не является ли фраза пустой
    if (!empty($userInput)) {
        // Кодируем фразу для безопасного добавления в URL
        $encodedPhrase = urlencode($userInput);

        // Изменяем заголовок Location и перенаправляем на новый URL
        header("Location: http://bateev.com/user/profile/{$encodedPhrase}");
        exit(); // Убеждаемся, что скрипт завершается после перенаправления
    } else {
        // Если фраза пуста, можно выполнить какие-то дополнительные действия, например, вывести сообщение об ошибке
        echo "Please enter a valid input";
    }
}