const adviceApiUrl = 'https://api.adviceslip.com/advice';

const adviceIdEl = document.querySelector('#advice-id');
const adviceMsgEl = document.querySelector('#advice-msg');
const adviceBtn = document.querySelector('.advice__btn');

const fetchData = async () => {
    adviceIdEl.textContent = '';
    adviceMsgEl.textContent = '';

    try {
        const res = await fetch(adviceApiUrl, { cache: "no-cache" });
        const data = await res.json();
        getAdvice(data.slip);
    } catch (err) {
        console.log(err);
    }
};

const getAdvice = (obj) => {
    const { id, advice } = obj;

    adviceIdEl.textContent = id;
    adviceMsgEl.textContent = advice;
};

adviceBtn.addEventListener('click', () => {
    console.log('Advice generator button clicked');
    fetchData();
});

fetchData();