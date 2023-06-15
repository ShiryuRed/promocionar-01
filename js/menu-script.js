
const mobilMenu = document.querySelector(".mobil-menu");
const openMenu = document.querySelector(".responsive-menu");

const iOpenMenu = document.querySelector(".fa-bars");
const iCloseMenu = document.querySelector(".fa-xmark");

const body = document.querySelector(".body")

const responsiveLi = document.querySelectorAll(".responsive-li")

mobilMenu.addEventListener("click", ()=> {
	openMenu.classList.toggle("open-menu");
    body.classList.toggle("no-scroll");
    closeIcon();
});

function closeIcon() {
    iOpenMenu.classList.toggle("close");
    iCloseMenu.classList.toggle("close");
}
function closeMenu() {
    openMenu.classList.remove("open-menu");
    body.classList.remove("no-scroll");
}

responsiveLi.forEach(li =>{
    li.addEventListener('click', ()=>{
        setTimeout(function(){
        closeMenu();
        closeIcon();
        },500)
    })
  })