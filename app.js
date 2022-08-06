const sideBar = document.querySelector(".sidebar-toggle");
const menu = document.querySelector(".links");
const aside = document.querySelector(".sidebar");
const closeSideBar = document.querySelector(".close-btn")

sideBar.addEventListener('click', ()=>{
    aside.classList.toggle("show-sidebar");
});

closeSideBar.addEventListener('click', ()=>{
    aside.classList.remove("show-sidebar");
})