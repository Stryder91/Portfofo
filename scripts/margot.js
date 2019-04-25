// Modal buttons

//get modal black element
const modal = document.querySelector ('.modal_black')
//get modal button
const modalBtn = document.querySelector ('.button_mail')
//get close button
const closeBtn = document.querySelector ('.closeButton')

//click
modalBtn.addEventListener ('click',
function openModal (){
  modal.classList.remove("closing")
  console.log('fre')
})

//funciton
