// Modal buttons

//get modal black element
const modal = document.querySelector ('.modal_black')
const mail = document.querySelector ('.mail_message')
const number = document.querySelector ('.number_message')
//get modal button
const mailBtn = document.querySelector ('.button_mail')
const numberBtn = document.querySelector ('.button_call')
//get close button
const closeBtn = document.querySelector ('.closeButton')
const closeBtn2 = document.querySelector ('.closeButton2')

//click
mailBtn.addEventListener ('click',
function openMail (){
  modal.classList.remove("closing")
  mail.classList.remove("closing")
  console.log('fre')
})
numberBtn.addEventListener ('click',
function openNumber (){
  modal.classList.remove("closing")
  number.classList.remove("closing")
  console.log('fre')
})

closeBtn.addEventListener ('click',

function () {modal.classList.add("closing")
mail.classList.add("closing")
}
)

closeBtn2.addEventListener ('click',
function () {
modal.classList.add("closing")
number.classList.add("closing")

}
)
//funciton
