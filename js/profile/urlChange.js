(() => {
    
    const userIdCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('user_id='));
    const userId = userIdCookie ? userIdCookie.split('=')[1] : null;

    if (userId && window.location.href.indexOf('userId=') === -1) {
        const newUrl = window.location.href + (window.location.href.indexOf('?') !== -1 ? '&' : '?') + 'userId=' + userId;
        window.history.replaceState({}, document.title, newUrl);
    }

})();
