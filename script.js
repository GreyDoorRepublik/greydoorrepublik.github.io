'use strict';
const experience = document.querySelector('#door-experience');
const toggle = document.querySelector('#door-toggle');
const reset = document.querySelector('#reset-door');
const caption = document.querySelector('#door-reveal');
function setDoor(open) {
  experience.classList.toggle('is-open', open);
  document.querySelector('.room-message').setAttribute('aria-hidden', String(!open));
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close the grey door' : 'Open the grey door');
  reset.hidden = !open;
  caption.textContent = open ? 'Door status: open. Everything appears to be in order.' : 'Door status: closed. Curiosity: encouraged.';
}
toggle.addEventListener('click', () => setDoor(toggle.getAttribute('aria-expanded') !== 'true'));
reset.addEventListener('click', () => { setDoor(false); toggle.focus({preventScroll: true}); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setDoor(false);
    toggle.focus({preventScroll: true});
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();

