// page load animation

(() => {
  // creating objects
  const AnimCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('animation='));
  const Anim = AnimCookie ? AnimCookie.split('=')[1] : null;

  if (Anim !== "1") {
    const body = document.querySelector('.page');
    const overlay = document.createElement('div');
    const anim = document.createElement('div');
    const logo = document.createElement('img');
    const animtext = document.createElement('p');

    logo.src = '../img/logo.svg'
    // the phrase
    animtext.textContent = 'ANALFUCK';

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

    document.cookie = "animation = 1; max-age =" + 30 * 60 * 30 + "; path=/";
  }

})();
