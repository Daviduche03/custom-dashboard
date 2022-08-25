let menuBtn = document.querySelector('.menu');
let closeBtn = document.querySelector('#close-btn')
let sideBar = document.querySelector('aside')
const theme = document.querySelector('.theme-toggler')

menuBtn.addEventListener('click', () => {
  sideBar.style.display = 'inline-block'
})


closeBtn.addEventListener('click', () =>{
  sideBar.style.display = 'none'
})

theme.addEventListener('click', () =>{
  document.body.classList.toggle('dark-theme-variables')
  
  theme.querySelector('i:nth-child(1)').classList.toggle('active')
  theme.querySelector('i:nth-child(2)').classList.toggle('active')
})

let u = 'j'
let h = localStorage.u
console.log(h);