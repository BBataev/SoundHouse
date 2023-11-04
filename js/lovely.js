// page load animation

// creating objects
const body = document.querySelector('.page');
const overlay = document.createElement('div');
const anim = document.createElement('div');
const animtext = document.createElement('p');

// the phrase
animtext.textContent = 'MusicProj';

// styles add
overlay.classList.add('overlay');
anim.classList.add('animation');
animtext.classList.add('animation-text');

// put the obj into each other objects
body.append(overlay);
overlay.append(anim);
anim.append(animtext);

// add no-scroll
document.body.classList.add("no-scroll");

setTimeout(function () {
  document.body.classList.remove("no-scroll");
  overlay.remove();
  anim.remove();
  animtext.remove();
}, 2500); 