// This project uses event bubeling instead of looping through each clickable element to add an event listner 
const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisified'

panel.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')){
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerText
        
    }
})

function removeActive() {
    ratings.forEach(rating => {
        rating.classList.remove('active')
    })
}