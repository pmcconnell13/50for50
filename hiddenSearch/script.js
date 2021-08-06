let search = document.querySelector('.search');
let btn = document.querySelector('.btn');
let input = document.querySelector('.input');
let active = false;

btn.addEventListener('click', () => {
  // if (active) {
  //   search.classList.remove('active');
  //   active = !active
  // } else {
  //   search.classList.add('active');
  //   active = !active
  // }
  search.classList.toggle('active');
  input.focus();
})