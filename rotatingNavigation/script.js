let close = document.getElementById('close');
let open = document.getElementById('open');
let container = document.querySelector('.container');


open.addEventListener('click', () => {
  container.classList.add('show-nav');
})

close.addEventListener('click', () => {
  container.classList.remove('show-nav');
})