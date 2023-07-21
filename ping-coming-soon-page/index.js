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
        noEmailMsg.classList.add("show");
        noEmailMsg.classList.remove("hidden");
        invalidEmailMsg.classList.add("hidden");
        invalidEmailMsg.classList.remove("show");
        emailInput.focus();
        return false;
    }

    // If the input email address is not valid
    if (!emailIsValid(emailInput.value)) {
        invalidEmailMsg.classList.add("show");
        invalidEmailMsg.classList.remove("hidden");
        noEmailMsg.classList.add("hidden");
        noEmailMsg.classList.remove("show");
        emailInput.focus();
        return false;
    }
  
    return true;
}

submitBtnEl.addEventListener('click', validateForm);