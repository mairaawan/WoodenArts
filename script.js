document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#contactForm");
    const errorMessage = document.querySelector(".error-message");

    form.addEventListener("submit", function(event) {
        let isValid = true;
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        errorMessage.innerHTML = ""; // Clear previous errors

        if (name === "") {
            isValid = false;
            errorMessage.innerHTML += "<p>Name is required.</p>";
        }
        if (email === "" || !email.includes("@")) {
            isValid = false;
            errorMessage.innerHTML += "<p>Valid email is required.</p>";
        }
        if (message === "") {
            isValid = false;
            errorMessage.innerHTML += "<p>Message cannot be empty.</p>";
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
// Bootstrap Form Validation with Animation
(function () {
    'use strict';
    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

// Function to load the image into the modal
function viewImage(image) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = image;
}
// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.classList.add('btn', 'btn-primary', 'scroll-to-top');
scrollToTopBtn.innerHTML = '↑';
document.body.appendChild(scrollToTopBtn);

// Show/Hide Scroll to Top Button on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.addEventListener("DOMContentLoaded", function () {
    // Navbar Active Link Highlighting
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Smooth Scrolling for Internal Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // Discount Offer Pop-up (Shown Once)
    setTimeout(() => {
        alert("🔥 Get 25% off on our new furniture collection. Limited time only!");
    }, 3000); // Show after 3 seconds

    // Image Hover Effect on Product Cards
    const productImages = document.querySelectorAll(".card img");
    productImages.forEach(img => {
        img.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
        img.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });
});
