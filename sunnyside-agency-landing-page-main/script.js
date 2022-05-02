const menuIcon = document.querySelector(".menu-icon");
const navLink = document.querySelector(".nav-link");
function showMenuIcon() {
  menuIcon.classList.toggle("display-icon", screen.width < 600);
  if (screen.width > 600) {
    if (navLink.classList.contains("show")) {
      navLink.classList.toggle("show");
    }
  }
}

const showMenuBar = function () {
  navLink.classList.toggle("show");
};

menuIcon.addEventListener("click", showMenuBar);

window.addEventListener("load", showMenuIcon);
window.addEventListener("resize", showMenuIcon);
