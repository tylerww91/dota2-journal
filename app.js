/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { renderHeroes } from './render-utils.js';
/* Get DOM Elements */
const heroSelect = document.getElementById('user-hero-select');
const heroList = document.getElementById('hero-list');
/* State */
let heroes = [];

for (let i = 0; i < heroSelect.length; i++) {
    heroes.push(heroSelect[i].text);
}
console.log(heroes);

// var str = '<ul>';

// heroes.forEach(function (hero) {
//     str += '<li>' + hero + '</li>';
// });

// str += '</ul>';
// document.getElementById('hero-list').innerHTML = str;

// Array.from(document.querySelectorAll('#user-hero-select option')).forEach(function (
//     option_element
// ) {
//     let option_text = option_element.text;

//     const heroNameText = option_text;
//     console.log(heroNameText);
// });
/* Events */

/* Display Functions */

function displayHeroes() {
    heroList.innerHTML = '';

    for (const hero of heroes) {
        const heroEl = renderHeroes(hero);
        heroList.append(heroEl);
    }
}

displayHeroes();
