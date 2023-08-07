const newsletCardEl = document.querySelector('.newslet');
const newsletFormEl = document.querySelector('.newslet__form');
const emailInput = document.querySelector('#email-input');
const invalidEmailMsg = document.querySelector('.invalid-email');
const submitBtnEl = document.querySelector('.newslet__form--submit-btn');

const successCardEl = document.querySelector('.success');
const userEmailEl = document.querySelector('#user-email');
const dismissBtnEl = document.querySelector('.success__dismiss-btn');

const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const validateForm = (event) => {
    event.preventDefault();
  
    // If the input email address is blank or not valid
    if (emailInput.value === '' || !emailIsValid(emailInput.value)) {
        invalidEmailMsg.classList.remove('hidden');
        emailInput.classList.add('invalid-input');
        emailInput.focus();
        return false;
    } else {
        newsletCardEl.classList.add('hidden');
        successCardEl.classList.remove('hidden');
        emailInput.classList.remove('invalid-input');
        userEmailEl.textContent = emailInput.value;
        return true;
    }
}

submitBtnEl.addEventListener('click', validateForm);

dismissBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    newsletFormEl.reset();

    newsletCardEl.classList.remove('hidden');
    invalidEmailMsg.classList.add('hidden');

    successCardEl.classList.add('hidden');
});