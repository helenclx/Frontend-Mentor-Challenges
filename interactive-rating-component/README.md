# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

Desktop:  
![](./screenshot-desktop.png)
![](./screenshot-desktop-2.png)

Mobile:  
![](./screenshot-mobile.png)

### Links

- Solution URL: https://www.frontendmentor.io/solutions/interactive-rating-component-using-html-css-and-javascript-rfiO0cERCQ
- Live Site URL: https://helenclx.github.io/Frontend-Mentor-Challenges/interactive-rating-component/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

The new thing I had learned was how to style radio buttons.

I got to practice setting up a form, using JavaScript to add a CSS class with the `Element.classList` property, as well as making a web page interactive through JavaScript's `addEventListener()` method. The `change` event in particular is useful to update and register the input value.

I learned more about designing accessible web pages, such as using the `aria-live` attribute and the `:focus-visible` pseudo-class.

I set up a variable and used `if...else` statement in JavaScript to prevent users from submitting without selecting their rating first.

In addition, I learned to practice the habit of using `console.log()` to check if my JavaScript functions are working as intended, amd cheking the console output in my web browser's developer tool.

### Continued development

I aim to practice making my web pages accessible and my JavaScript skills more to make web pages interactive.

### Useful resources

- [Pure CSS Custom Styled Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) by Stephanie Eckles - This is a good guide for creating custom, accessible, cross-browser, theme-able, scalable radio buttons in pure CSS
- [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) by MDN Web Docs
- [:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) by MDN Web Docs
- [HTML DOM Document addEventListener()](https://www.w3schools.com/jsref/met_document_addeventlistener.asp) by W3Schools
- [HTMLElement: change event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) by MDN Web Docs
- [HTML DOM Element classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) by MDN Web Docs
- [Event: preventDefault() method](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) by MDN Web Docs


## Author

- Website - [Helen Chong](https://helenclx.github.io/)
- Frontend Mentor - [@helenclx](https://www.frontendmentor.io/profile/helenclx)

## Acknowledgments

- [Grace-Snow](https://fedmentor.dev/) for providing feedback to my solution that improved my code, by replacing misused semantic HTML elments and rewrite the submission form.