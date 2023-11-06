// page load animation

(() => {
  // creating objects
  const body = document.querySelector('.page');
  const overlay = document.createElement('div');
  const anim = document.createElement('div');
  const logo = document.createElement('img');
  const animtext = document.createElement('p');

  logo.src = '../img/logo.svg'
  // the phrase
  animtext.textContent = 'BATEEV';

  // styles add
  overlay.classList.add('overlay');
  anim.classList.add('animation');
  logo.classList.add('animation-logo');
  animtext.classList.add('animation-text');

  // put the obj into each other objects
  body.append(overlay);
  overlay.append(anim);
  anim.append(logo);
  anim.append(animtext);

  // add no-scroll
  document.body.classList.add("no-scroll");

  setTimeout(function () {
    document.body.classList.remove("no-scroll");
    overlay.remove();
    anim.remove();
    logo.remove();
    animtext.remove();
  }, 2000); 
})();
