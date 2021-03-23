const firstName = document.getElementById('first-name-input');
const email = document.getElementById('email-input');
const birthday = document.getElementById('birthday-input');
const favoriteBeetle = document.getElementById('favorite-beetle-input');
const submitButton = document.getElementById('submit-button');
const formSubmitMessage = document.getElementById('form-submit-message');
const formErrorMessages = [];
const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function clearFormErrorMessages() {
    formErrorMessages.length = 0;
}

function validateFirstName() {
    if (firstName.value.length == 0 || nameRegex.test(firstName.value) == false) {
        formErrorMessages.push('Please enter your first name using only lower and upper case letters.');
        firstName.classList.add("invalid-field");
    } else {
        firstName.classList.remove("invalid-field")
    }
}

function validateEmail() {
    if (emailRegex.test(email.value) == false || email.value.length == 0) {
        formErrorMessages.push('Please enter a valid email address.');
        email.classList.add("invalid-field");
    } else {
        email.classList.remove("invalid-field");
    }
}

function validateBirthday() {
    if (dateRegex.test(birthday.value) == false) {
        formErrorMessages.push('Please enter your birthday.');
        birthday.classList.add("invalid-field");
    } else {
        birthday.classList.remove("invalid-field");        
    }
}

function validateFavoriteBeetle() {
    if (favoriteBeetle.value == '--Choose One--') {
        formErrorMessages.push('Please choose your favorite beetle.');
        favoriteBeetle.classList.add("invalid-field");
    } else {
        favoriteBeetle.classList.remove("invalid-field");
    }
}

function getBirthMonth() {
    let dateSplit = birthday.value.split('-');
    let birthMonthNumber = Number(dateSplit[1]);
    let birthMonth = monthsOfTheYear[birthMonthNumber-1];
    return birthMonth;
}

function writeFormSubmitMessage() {
    if (formErrorMessages.length == 0) {
        formSubmitMessage.innerHTML = '';
        let h4 = document.createElement('h4');
        h4.textContent = `Thanks for signing up, ${firstName.value}! Check your email every week for all the latest news from the whole gang, and look for a special birthday message from ${favoriteBeetle.value} in ${getBirthMonth()}.`;
        formSubmitMessage.appendChild(h4);
    } else {
        formSubmitMessage.innerHTML = '<p class="required">*=required</p>';
        for (i = 0; i < formErrorMessages.length; i++) {
            let p = document.createElement('p');
            p.textContent = formErrorMessages[i];
            p.className = 'error'
            formSubmitMessage.appendChild(p);
        }
    }
}

submitButton.addEventListener('click', () => {
    clearFormErrorMessages();
    validateFirstName();
    validateEmail();
    validateBirthday();
    validateFavoriteBeetle();
    writeFormSubmitMessage();
})


