const ratingCardEl = document.querySelector(".rating-card");
const thankyouCardEl = document.querySelector(".thankyou-card");
const ratingOptions = document.querySelectorAll("input[name=rating] + label");
const submitBtnEl = document.querySelector(".rating-card__submit-btn");
const userRatingEl = document.querySelector("#user-rating");

let rating = 0;

ratingOptions.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const selectedRating = e.target.textContent;
        rating = parseInt(selectedRating);
    })
})

submitBtnEl.addEventListener('click', () => {
    if (rating === 0) {
        alert("Please select your rating!");
    } else {
        ratingCardEl.style.display = "none";
        thankyouCardEl.style.display = "flex";
        userRatingEl.textContent = rating;
    }
});