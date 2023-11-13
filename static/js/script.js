const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

// inspirations.js

const inspirations = [
  "Python is known for its simplicity and readability.",
  "It has a large standard library with modules for various tasks.",
  "Python is widely used in web development, data analysis, and artificial intelligence.",
  "Python has a strong and supportive community.",
  "It's a great language for beginners and experienced developers alike.",
  // Add more Python inspirations as needed
];

const inspirationsContainer = document.getElementById('python-inspirations');
let index = 0;

function displayNextInspiration() {
  inspirationsContainer.innerHTML = inspirations[index];
  index = (index + 1) % inspirations.length;
}

setInterval(displayNextInspiration, 3000); // Change inspiration every 3 seconds
displayNextInspiration(); // Initial display

// Add this JavaScript to toggle the menu links on and off
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});


const iconNames = ["fa-code", "fa-python", "fa-globe", "fa-git", "fa-chart-bar", "fa-flask", "fa-dna", "fa-database"];
const colors = ["#ff5733", "#33ff57", "#5733ff", "#ff33c6", "#33ff8c", "#ff7a33", "#33a5ff", "#ff3362"];

const backgroundIcons = document.getElementById("background-icons");

function createBlinkingIcon() {
  const icon = document.createElement("i");
  const randomIcon = iconNames[Math.floor(Math.random() * iconNames.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  icon.className = `icon fas ${randomIcon}`;
  icon.style.color = randomColor;

  const top = Math.random() * 100 + "%";
  const left = Math.random() * 100 + "%";
  icon.style.top = top;
  icon.style.left = left;

  backgroundIcons.appendChild(icon);
}

// Create a set of blinking icons
for (let i = 0; i < 100; i++) {
  createBlinkingIcon();
}
