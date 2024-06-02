import { solutions } from './data-fem.js'

const solutionsEl = document.querySelector('.solutions');

const displaySolutions = (arr) => {
    arr.forEach(item => {
        const {challenge, folderName, hasJavaScript, usesAPI, solutionUrl} = item;

        solutionsEl.innerHTML += `
        <div class="solution__card">
            <img src="./${folderName}/screenshot-desktop.png" alt="${challenge} solution" class="solution__img" loading="lazy">
            <h2 class="solution__challenge">${challenge}</h2>
            <ul class="solution__links">
                <li><a href="${solutionUrl}">Solution</a></li>
                <li><a href="https://helenchong.dev/Frontend-Mentor-Challenges/${folderName}">Live Site</a></li>
                <li><a href="https://github.com/helenclx/Frontend-Mentor-Challenges/tree/main/${folderName}">Repository</a></li>
            </ul>
        </div>
        `;
    });
};
displaySolutions(solutions);

const topButton = document.querySelector(".top-btn");

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.classList.remove("hidden");
    } else {
        topButton.classList.add("hidden");
    }
}

topButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});