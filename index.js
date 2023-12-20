const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-container");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(
  ".header-item-left, .header-item-right"
);

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// about page scripts start
var bioSection = document.getElementsByClassName("bio-section")[0];
var interestSection = document.getElementsByClassName("interest-section")[0];
var educationSection = document.getElementsByClassName("education-section")[0];

function showSection(section) {
  section.style.display = "flex";

  if (section !== bioSection) {
    bioSection.style.display = "none";
  }

  if (section !== interestSection) {
    interestSection.style.display = "none";
  }

  if (section !== educationSection) {
    educationSection.style.display = "none";
  }
}
// about page scripts ends
