export default function() {
  const btn = document.querySelector('.header__theme');
  const body = document.querySelector('body');

  if(!btn) return;

  btn.addEventListener('click', function() {
    body.classList.toggle('dark');
  });
}
