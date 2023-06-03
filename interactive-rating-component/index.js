const ratingCardEl = document.querySelector(".rating-card");
const thankyouCardEl = document.querySelector(".thankyou-card");
const ratingOptions = document.querySelectorAll("input[name=rating] + label");
const submitBtnEl = document.querySelector(".rating-card__submit-btn");
const userRatingEl = document.querySelector("#user-rating");

let rating = 0;

submitBtnEl.addEventListener('click', () => {
    if (rating === 0) {
        alert("Please select your rating!");
    } else {
        ratingCardEl.style.display = "none";
        thankyouCardEl.style.display = "flex";
        rating = document.querySelector("input[name=rating]:checked").value;
        userRatingEl.textContent = rating;
    }
});