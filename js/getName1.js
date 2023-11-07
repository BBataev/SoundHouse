document.addEventListener('DOMContentLoaded', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../php/getUserName.php', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            var username = xhr.responseText;
            document.querySelector('.profile-name').textContent = username;
            document.querySelector('.main-profile__name').textContent = username;
        }
    };
    xhr.send();
});