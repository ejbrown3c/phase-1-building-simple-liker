// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {

FULL_HEART.class = ".activated-heart"

let heartbutton = document.querySelectorAll("span.like-glyph")

heartbutton.forEach(heartbutton => heartbutton.addEventListener("click", handleLikeButton))

function handleLikeButton() {
  console.log(heartbutton.target)
  mimicServerCall()
  .then (() => {
      if(heartbutton.target.innertext === EMPTY_HEART) {
          heartbutton.target.innertext = FULL_HEART}
      else if (heartbutton.target.innertext === FULL_HEART) {
        heartbutton.target.innertext = EMPTY_HEART
      }  
  })
  .catch(() => {
    const errorMessage = document.querySelector("#modal")
    console.log(errorMessage)
    errorMessage.className = "show-message"

  setTimeout(() => {
    const errorMessage = document.querySelector("#modal")
    errorMessage.className = "hidden"}, 3000)}
  )}
  })


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
