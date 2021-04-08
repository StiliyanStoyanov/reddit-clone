/* Credit to https://gist.github.com/tkon99/4c98af713acc73bed74c Thanks :) */
const {name1, name2} = require('./names');
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateName() {
    const first = capitalize(name1[getRandomInt(0, name1.length)]);
    const second = capitalize(name2[getRandomInt(0, name2.length)]);
    return `${first}_${second}_${getRandomInt(1, 9999)}`;
}

console.log(generateName());

