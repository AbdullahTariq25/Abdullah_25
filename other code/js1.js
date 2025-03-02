(function() {
    emailjs.init("LqAaYWEtM18O3Gev5");
})();

const app = Vue.createApp({
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        sendEmail(e) {
            e.preventDefault();
            emailjs.send(
                "service_pfagh1v",
                "template_dtnhuau", {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                }
            ).then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    this.showAlert("Email sent successfully!", "success");
                    this.name = '';
                    this.email = '';
                    this.message = '';
                },
                (error) => {
                    console.log("FAILED...", error);
                    this.showAlert("Error sending email. Please try again.", "error");
                }
            );
        },
        showAlert(message, type) {
            const alertBox = document.createElement("div");
            alertBox.className = `alert ${type}`;
            alertBox.textContent = message;
            document.body.appendChild(alertBox);
            setTimeout(() => {
                alertBox.remove();
            }, 3000);
        }
    }
});

app.mount('#app');