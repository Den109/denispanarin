
// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = function () {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //   stiky navbar
  let header = document.querySelector("header");
  header.classList.toggle("stiky", window.scrollY > 10);

  // remove nav icon and navbar when scrool
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
// scroll reveal doesn't work
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .about-content, h2.heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .about-img, .portfolio-box, .services-container", { origin: "bottom" });

console.log('');


// typed JS

let options = {
  strings: ["a lawyer", "a youtuber", "a programmer", "a real estate agent", "an insurance agent", "an English learner"],
  typeSpeed: 75,
  backSpeed: 40,
  backDelay: 1000,
  loop: true,
};
let optionsFooter = {
  strings: ["happy", "smart", "strong", "discreet", "qurious", "brave", "calm", "creative", "decent", "decisive", "honest", "diligent", "patient", "sociable", "wise"],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
};
let typed = new Typed(".multiple-text", options);
let typedFooter = new Typed(".multiple-text-footer", optionsFooter);
