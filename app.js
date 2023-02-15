let mainContainer=document.querySelector('.container')
let thanksContainer=document.querySelector('.thankyou-state')
const submitButton=document.getElementById('submit')
let rateAgain=document.querySelector('.rate-again')

const rated=document.getElementById('rated')
const rates=document.querySelectorAll('.btn')

submitButton.addEventListener('click',()=>{
    thanksContainer.classList.remove('hidden')
    mainContainer.style.display="none"
})

rateAgain.addEventListener('click', ()=>{
    thanksContainer.classList.add("hidden")
    mainContainer.style.display="block"
})


rates.forEach((rate)=>{
    rate.addEventListener('click', ()=>{
        rated.innerHTML=rate.innerHTML
    })
})
