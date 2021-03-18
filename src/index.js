'use strict'

const messages = [
    'Marcos',
    'Aldana',
    'Malaika',
    'Saulo',
    'Maty',
    'Lucas',
    'Pablo',
    'Cecilia'
]

const ramdomMg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    return console.log(message);
};

module.exports = {
    ramdomMg
};