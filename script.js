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

//Me falta poder cerrar el navbar cuando aprieto un link

menuIcon.onclick = () => {
  navbar.style.display = "flex";
  closeIcon.style.display = "block";
  // navLinks.forEach((link) => {
  //   link.onclick = "closeNav()";
  // });
};

function closeNav() {
  navbar.style.display = "none";
  // navLinks.forEach((link) => {
  //   link.removeAttribute("onclick");
  // });
}
