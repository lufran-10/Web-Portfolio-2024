const menuIcon = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");
const navbar = document.querySelector(".navbar");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

const form = document.getElementById("form");

// Reset the form fields when the page loads
window.onload = function () {
  form.reset();
};

// Keep track of active webpage section
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Open navbar for when screen width is 750px or less
menuIcon.onclick = () => {
  navbar.style.display = "flex";
  closeIcon.style.display = "block";
};

// Close navbar for when screen width is 750px or less
function closeNav() {
  navbar.style.display = "none";
}

// Close the navbar when clicking on a link if the screen width is 750px or less
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 750) {
      closeNav();
    }
  });
});
