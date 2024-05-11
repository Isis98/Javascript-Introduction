const toggleButton = document.querySelector(".sidebarToggleButton");
const closeButton = document.querySelector(".closeButton");
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener('click', function(){
    console.log(sidebar.classList)
    // if(sidebar.classList.contains('showSidebar')){
    //     sidebar.classList.remove('showSidebar')
    // }else{
    //     sidebar.classList.add('showSidebar')
    // }
    sidebar.classList.toggle('showSidebar')
})

closeButton.addEventListener('click', function(){
    sidebar.classList.remove('showSidebar')
})