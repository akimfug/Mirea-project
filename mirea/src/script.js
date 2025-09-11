const form = document.getElementById('ContactForm');
const emailInput = document.getElementById('email');
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



// form.addEventListener('submit', function(event) {
//     let valid = true;

//     // Сброс сообщений об ошибках
//     emailError.textContent = '';
//     messageError.textContent = '';

//     // Проверка email
//     if (!validateEmail(emailInput.value)) {
//         emailError.textContent = 'Пожалуйста, введите корректный email.';
//         valid = false;
//     }
    
//     // Проверка сообщения
//     if (messageInput.value.trim() === '') {
//         messageError.textContent = 'Сообщение не может быть пустым.';
//         valid = false;
//     }
    
//     // Если форма не валидна, предотвращаем отправку
//     if (!valid) {
//         event.preventDefault();
//     }
// });

// // Дополнительная функция для очистки формы после успешной отправки
// form.addEventListener('reset', function() {
//     emailError.textContent = '';
//     messageError.textContent = '';
// });