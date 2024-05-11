/*=============== toggle icon navbar ============================================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
/*=============== scroll selections avtive link =================================*/
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

  /*=============== scroll selections avtive link =================================*/

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*==== remove toggle icon and navbar when click navbar link (scroll) ============*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*================================= scroll reveal =================================*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .courses-container, .portfolio-box, .contact form",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*================================= typed js =====================================*/
const typed = new Typed(".multiple-text", {
  strings: [
    "27 years of experience",
    "13000 success stories",
    "95% chance of scoring 6+ IELTS",
  ],
  typeSpeed: 100,
  backSpeed: 40,
  backDelay: 1000,
  loop: true,
});

/*====================== smptpJS contact form =====================================*/

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "infodssam@gmail.com",
    Password: "9EF39A221C4E43A37CB5E7FDBAC8D6AEA746",
    To: "infodssam@gmail.com",
    From: "infodssam@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});

/*====================== dark/light theme  =====================================*/

const icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "./images/color_modes/crescent-moon.png";
    secondImg.src = "./images/logo/main_logo_2light.png";
  } else {
    icon.src = "./images/color_modes/sun_button.png";
    secondImg.src = "./images/logo/main_logo_2.png";
  }
};

/*================== Scroller effect =========================================*/
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
