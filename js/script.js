(() => {
  const loginBtn = document.getElementById('login');

  const registerBtn = document.getElementById('register');

  const papa = document.querySelector('.main-block-elements-list-text');
  const backBtn = document.querySelector('.main-block__btn-img');

  const loginForm = document.querySelector('.main-block-formLog');
  const registerForm = document.querySelector('.main-block-formReg');

  loginBtn.addEventListener('click', () => {
    papa.classList.remove('register');
    papa.classList.add('login');

    registerForm.classList.remove('register');
    loginForm.classList.add('login');

    backBtn.classList.add('active');
  });

  registerBtn.addEventListener('click', () => {
    papa.classList.remove('login');
    papa.classList.add('register');

    loginForm.classList.remove('login');
    registerForm.classList.add('register');

    backBtn.classList.add('active');
  });

  backBtn.addEventListener('click', () => {
    papa.classList.remove('register');
    papa.classList.remove('login');

    loginForm.classList.remove('login');
    registerForm.classList.remove('register');
    
    backBtn.classList.remove('active');
  })

})();