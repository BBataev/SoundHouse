function checkCookie(cookieName) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName + '=') === 0) {
        return true; // Куки найдено
      }
    }
    return false; // Куки не найдено
}
  
// Проверяем наличие определенного куки
var myCookieName = 'remember_me';
if (!checkCookie(myCookieName)) {
    window.location.href = '../login';
}