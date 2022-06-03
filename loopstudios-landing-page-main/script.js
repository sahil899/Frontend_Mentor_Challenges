const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-display");
console.log(menuBtn);
function openMenu() {
  menu.classList.toggle("show-menu");
  if (menu.classList.contains("show-menu")) {
    menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    menuBtn.innerHTML = ` <i class="fa-solid fa-bars"></i>`;
  }
}
function forWidth() {
  if (this.outerWidth >= 552) {
    console.log("checking::::::::::::");
    menu.classList.remove("menu-display");
    menuBtn.classList.add("menu-btn-hide");
  } else {
    console.log("checking;:::::::222");
    menu.classList.add("menu-display");
    menuBtn.classList.remove("menu-btn-hide");
  }
}
window.addEventListener("load", forWidth);

window.addEventListener("resize", forWidth);

menuBtn.addEventListener("click", openMenu);
