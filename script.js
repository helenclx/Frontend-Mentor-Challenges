import { solutions } from './data-fem.js'

const solutionsEl = document.querySelector('.solutions');

const displaySolutions = (arr) => {
    arr.forEach(item => {
        const {challenge, folderName, hasJavaScript, usesAPI, solutionUrl} = item;

        solutionsEl.innerHTML += `
        <div class="solution__card">
            <img src="./${folderName}/screenshot-desktop.png" alt="${challenge} solution" class="solution__img">
            <h2 class="solution__challenge">${challenge}</h2>
            <ul class="solution__links">
                <li><a href="${solutionUrl}" target="_blank">Solution</a></li>
                <li><a href="https://helenclx.github.io/Frontend-Mentor-Challenges/${folderName}" target="_blank">Live Site</a></li>
                <li><a href="https://github.com/helenclx/Frontend-Mentor-Challenges/tree/main/${folderName}" target="_blank">Repository</a></li>
            </ul>
        </div>
        `;
    });
};
displaySolutions(solutions);