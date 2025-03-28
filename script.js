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


