import "./styles/main.scss";

// src/main.js
const menuBtn = document.getElementById("menu-btn");
const navList = document.getElementById("nav-list");

if (menuBtn && navList) {
  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("is-open");
  });
}
