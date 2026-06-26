// ====================================
// MANGAL SHREE GOLD
// script.js
// ====================================

// Sticky Navbar

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ==============================
// Scroll To Top Button
// ==============================

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==============================
// Active Navigation
// ==============================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});

// ==============================
// Fade Animation
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

const hiddenElements = document.querySelectorAll(

".collection-card, .collection-box, .gallery-item, .journey-box, .contact-box"

);

hiddenElements.forEach((el) => observer.observe(el));

// ==============================
// Counter Animation
// ==============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 100;

        if (c < target) {

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ==============================
// Image Hover Effect
// ==============================

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.1)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

// ==============================
// Contact Form Validation
// ==============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]');

        const email = form.querySelector('input[type="email"]');

        if (name.value.trim() === "") {

            alert("Please enter your name.");

            return;

        }

        if (email.value.trim() === "") {

            alert("Please enter your email.");

            return;

        }

        alert("Thank you! Your message has been submitted.");

        form.reset();

    });

}

// ==============================
// Smooth Button Hover
// ==============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

// ==============================
// Page Loader
// ==============================

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});

// ==============================
// Console Welcome Message
// ==============================

console.log("%cWelcome to Mangal Shree Gold", "color:#d4af37;font-size:20px;font-weight:bold;");
// Today's Gold Rate

document.getElementById("gold24").innerHTML = "₹ 10,250 / gram";

document.getElementById("gold22").innerHTML = "₹ 9,400 / gram";

document.getElementById("gold18").innerHTML = "₹ 7,700 / gram";