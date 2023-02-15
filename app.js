let mainContainer=document.querySelector('.container')
let thanksContainer=document.querySelector('.thankyou-state')
const submitButton=document.getElementById('submit')
let rateAgain=document.querySelector('.rate-again')

submitButton.addEventListener('click',()=>{
    thanksContainer.classList.remove('hidden')
    mainContainer.style.display="none"
})

rateAgain.addEventListener('click', ()=>{
    thanksContainer.classList.add("hidden")
    mainContainer.style.display="block"
})

