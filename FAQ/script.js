let btn = document.querySelectorAll('.faq-toggle');

btn.forEach(current => {
  current.addEventListener('click', () => {
    current.parentNode.classList.toggle('active')
  })
})

console.log(btn)