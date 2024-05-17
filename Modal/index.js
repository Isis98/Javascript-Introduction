const modalButton = document.querySelector(".modalButton")
const closeButton = document.querySelector(".closeButton")
const modalOverlay = document.querySelector(".modalOverlay")

modalButton.addEventListener("click", function (){
    
    modalOverlay.classList.toggle("openModal")
})

closeButton.addEventListener("click", function(){
    modalOverlay.classList.remove("openModal")
})