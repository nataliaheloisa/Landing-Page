const hamburger = document.querySelector(".c-hamburger");
const navMenu = document.querySelector(".c-nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
function openNav() {
  document.getElementById("contact").style.width = "100%";
}

const navLink = document.querySelectorAll(".c-nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
