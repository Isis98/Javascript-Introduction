const switchButton = document.querySelector(".switchButton")
const video = document.querySelector(".videoContainer")

switchButton.addEventListener("click", function(){
    if(!switchButton.classList.contains("slide")){
        switchButton.classList.add("slide")
        video.pause();
    }else{
        switchButton.classList.remove("slide")
        video.play()
    }
})

const preloader = document.querySelector('.preloader')

window.addEventListener('load', function(){
    preloader.classList.add('hidePreloader')
})