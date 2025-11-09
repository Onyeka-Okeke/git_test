console.log("Welcome to the Restaurant Page!");
// Additional JavaScript functionality can be added here.
import loadHomePage from "./home.js";
import loadContactPage from "./contact.js";
import loadMenuPage from "./menu.js";
import "./style.css";
document.addEventListener("DOMContentLoaded", () => {
  loadHomePage();
  const homeBtn = document.querySelector("#home");
  const contactBtn = document.querySelector("#contact");
  const menuBtn = document.querySelector("#menu");
  const buttons = document.querySelectorAll("nav button");

  function setActive(btn) {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  }

  homeBtn.addEventListener("click", () => {
    loadHomePage();
    setActive(homeBtn);
  });

  menuBtn.addEventListener("click", () => {
    loadMenuPage();
    setActive(menuBtn);
  });

  contactBtn.addEventListener("click", () => {
    loadContactPage();
    setActive(contactBtn);
  });

  // Default active tab
  setActive(homeBtn);
});
