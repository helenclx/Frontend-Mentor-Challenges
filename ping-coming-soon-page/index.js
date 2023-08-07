const emailInput = document.querySelector('#email-input');
const noEmailMsg = document.querySelector('.no-email');
const invalidEmailMsg = document.querySelector('.invalid-email');
const submitBtnEl = document.querySelector('.subscription-form__button');

const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const validateForm = (event) => {
    event.preventDefault();
  
    // If the input is blank
    if (emailInput.value === "") {
        noEmailMsg.classList.remove("hidden");
        invalidEmailMsg.classList.add("hidden");
        emailInput.focus();
        return false;
    }
    // If the input email address is not valid
    else if (!emailIsValid(emailInput.value)) {
        invalidEmailMsg.classList.remove("hidden");
        noEmailMsg.classList.add("hidden");
        emailInput.focus();
        return false;
    }
    else {
        noEmailMsg.classList.add("hidden");
        invalidEmailMsg.classList.add("hidden");
        newsletFormEl.reset();
        return true;
    }
}

submitBtnEl.addEventListener('click', validateForm);