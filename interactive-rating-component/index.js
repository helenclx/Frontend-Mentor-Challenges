const ratingCardEl = document.querySelector(".rating-card");
const thankyouCardEl = document.querySelector(".thankyou-card");
const ratingFormEl = document.querySelector(".rating-card__form");
const ratingOptions = document.querySelectorAll("input[name=rating]");
const userRatingEl = document.querySelector("#user-rating");

let rating = 0;

ratingOptions.forEach((option) => {
    option.addEventListener('change', (event) => {
        rating = parseInt(event.target.value);
        console.log(`Your selected rating is: ${rating}`);
    });
})

ratingFormEl.addEventListener('submit', (event) => {
    if (rating === 0) {
        alert("Please select your rating!");
    } else {
        ratingCardEl.style.display = "none";
        thankyouCardEl.style.display = "flex";
        userRatingEl.textContent = rating;
        console.log("Rating submitted!");
    }
    event.preventDefault();
});