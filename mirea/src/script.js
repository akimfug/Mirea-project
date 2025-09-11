const form = document.getElementById('ContactForm');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

emailInput.addEventListener('input', validateEmail);
function validateEmail() {
    console.log('Validating email...');
    const emailPattern = /[A-Za-z0-9_\-\.]{2,10}@[a-z0-9\.-_]{1,10}\.[a-z]{2,3}/;

    if (emailPattern.test(emailInput.value)) {
        console.log('Email is valid');
        removeError(emailInput);
        return true;
    } else {
        console.log('Email is invalid');
        showError(emailInput, 'Пожалуйста, введите корректный email.');
    }
}

phoneInput.addEventListener('input', validatePhone);
function validatePhone() {
    console.log('Validating phone...');
    const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    
    if (phonePattern.test(phoneInput.value)) {
        console.log('Phone is valid');
        removeError(phoneInput);
        return true;
    }
    else {
        console.log('Phone is invalid');
        showError(phoneInput, 'Пожалуйста, введите корректный номер телефона в формате +7 (999) 999-99-99.');
    }
}

function showError(input, message) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error') || document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = message;

    formControl.appendChild(errorElement);
    input.style.borderColor = 'red';
}

function removeError(input) {
    const formControl = input.parentElement;
    const errorElement = formControl.querySelector('.error');
    if (errorElement) {
        formControl.removeChild(errorElement);
    }

    input.style.borderColor = 'green';
}