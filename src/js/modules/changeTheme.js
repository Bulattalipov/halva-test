export default function() {
  const btn = document.querySelector('.header__theme');

  if(!btn) return;

  btn.addEventListener('click', function() {
    body.classList.toggle('body--dark');
  });
}
