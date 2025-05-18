// This file contains JavaScript code to handle form validation and user interactions for the registration process.

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const addressError = document.getElementById('addressError');
    const phoneError = document.getElementById('phoneError');
    const hobbiesError = document.getElementById('hobbiesError');
    const questionError = document.getElementById('questionError');
    const answerError = document.getElementById('answerError');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = getFormData();
        
        console.log(formData);
        alert('Form submitted successfully!');
    });

    function getFormData() {
        return {
            username: document.getElementById('username').value.trim(),
            gender: document.querySelector('input[name="gender"]:checked').value,
            address: document.getElementById('address').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            password: document.getElementById('password').value.trim(),
            securityQuestion: document.getElementById('securityQuestion').value.trim(),
            securityAnswer: document.getElementById('securityAnswer').value.trim(),
            hobbies: Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(hobby => hobby.value)
        };
    }

    function removeFile(fileName) {
        console.log(`Removing file: ${fileName}`);
        // Add logic to remove the file
    }

    function openFile(fileName) {
        console.log(`Opening file: ${fileName}`);
        // Add logic to open the file
    }

    function downloadFile(fileName) {
        console.log(`Downloading file: ${fileName}`);
        // Add logic to download the file
    }
});