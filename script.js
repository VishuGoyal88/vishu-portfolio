document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault()

document.querySelector(this.getAttribute('href'))
.scrollIntoView({
behavior:'smooth'
})

})

})

const toggle = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav-links")

toggle.addEventListener("click", () => {
nav.classList.toggle("active")
})