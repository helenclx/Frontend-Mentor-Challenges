const ratingCardEl = document.querySelector(".rating-card");
const thankyouCardEl = document.querySelector(".thankyou-card");
const submitBtnEl = document.querySelector(".submit-btn");
const userRatingEl = document.querySelector("#user-rating");

let rating = 0;

function getRating(num) {
    rating = num;
}

submitBtnEl.addEventListener('click', () => {
    thankyouCardEl.classList.add("show");
    ratingCardEl.classList.add("hidden");
    userRatingEl.textContent = rating;
});