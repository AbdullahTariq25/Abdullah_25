$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// Initialize EmailJS
(function() {
    emailjs.init({
        publicKey: "LqAaYWEtM18O3Gev5",
    });
})();

const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        emailjs.send(
            "service_pfagh1v",
            "template_dtnhuau", {
                name: name,
                email: email,
                message: message,
            }, {
                publicKey: "LqAaYWEtM18O3Gev5", 
            }
        ).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Email Sent!',
                    text: 'Your message has been sent successfully!',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
                form.reset(); 
            },
            (error) => {
                console.log("FAILED...", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again.',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'OK'
                });
            }
        );
    });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Handle form submission logic here
  alert('Thank you for your message. We will get back to you soon.');
  document.getElementById('contact-form').reset();
});