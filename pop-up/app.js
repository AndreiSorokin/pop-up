const burger = document.querySelector('.burger')
const dropdown = document.querySelector('.dropdown-menu')

burger.addEventListener('click', ()=>{
   dropdown.classList.toggle('active')
})