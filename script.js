/* ================= NAVBAR SCROLL ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU CLOSE ================= */

const navLinks =
    document.querySelectorAll(".nav-link");

const navbarMenu =
    document.querySelector(".navbar-collapse");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarMenu.classList.contains("show")) {

            const menu =
                bootstrap.Collapse.getInstance(
                    navbarMenu
                );

            if (menu) {

                menu.hide();

            }

        }

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, .feature-box, .contact-card, .gallery-item, .about-content"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


/* ================= CURRENT YEAR ================= */

const copyright =
    document.querySelector(".copyright");


if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()}
        Bansal Mehndi Artist.
        All Rights Reserved.`;

}