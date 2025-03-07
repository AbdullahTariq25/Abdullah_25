document.addEventListener('DOMContentLoaded', () => {
    const findPasswordForm = document.getElementById('findPasswordForm');
    const username = document.getElementById('username');
    const securityAnswer = document.getElementById('securityAnswer');
    const usernameError = document.getElementById('usernameError');
    const securityAnswerError = document.getElementById('securityAnswerError');
    const spinner = document.querySelector('.loading-spinner');
    const button = findPasswordForm.querySelector('button');
    const successPopup = document.getElementById('successPopup');
    const closePopup = document.getElementById('closePopup');
    const retrievedPassword = document.getElementById('retrievedPassword');

    findPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = true;

        if (!username.value.trim()) {
            usernameError.classList.remove('hidden');
            username.classList.add('animate-shake');
            valid = false;
        } else {
            usernameError.classList.add('hidden');
        }

        if (!securityAnswer.value.trim()) {
            securityAnswerError.classList.remove('hidden');
            securityAnswer.classList.add('animate-shake');
            valid = false;
        } else {
            securityAnswerError.classList.add('hidden');
        }

        if (!valid) return;

        spinner.classList.remove('hidden');
        button.disabled = true;

        setTimeout(() => {
            spinner.classList.add('hidden');
            button.disabled = false;

            const storedUsername = localStorage.getItem('username');
            const storedSecurityAnswer = localStorage.getItem('securityAnswer');
            const storedPassword = localStorage.getItem('password');

            if (username.value === storedUsername && securityAnswer.value === storedSecurityAnswer) {
                retrievedPassword.textContent = storedPassword;
                successPopup.classList.remove('hidden');
            } else {
                alert('Invalid username or security answer.');
            }
        }, 2000);
    });

    username.addEventListener('animationend', () => username.classList.remove('animate-shake'));
    securityAnswer.addEventListener('animationend', () => securityAnswer.classList.remove('animate-shake'));

    closePopup.addEventListener('click', () => {
        successPopup.classList.add('hidden');
        window.location.href = 'login.html';
    });
});
