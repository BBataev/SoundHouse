(() => {
    const loginBtn = document.getElementById('login');
    const registerBtn = document.getElementById('register');

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginBtn.addEventListener('click', () => {
        if (loginBtn.classList.contains('login-btn-active')) {
          const formDataL = new FormData(loginForm);

          const emailL = formDataL.get('email');
          const passwordL = formDataL.get('password');
          
          if (emailL && passwordL) {
            loginForm.submit();
          } else {
            console.log('Я гей');
          }
        }
      });
    
      registerBtn.addEventListener('click', () => {
        if (registerBtn.classList.contains('register-btn-active')) {
          const formDataR = new FormData(registerForm);

          const usernameR = formDataR.get('username');
          const emailR = formDataR.get('email');
          const passwordR = formDataR.get('password');

          if (usernameR && emailR && passwordR) {
            registerForm.submit();
          } else {
            console.log('Я гей');
          }
        }
      });
    
})();