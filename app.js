const board = document.getElementById('board');
const coolors = ['#880fa0', '#ff0000', '#ffae00', '#25f525', '#fbff00', '#2164e2']
let SQUARE_NUMBER;

if(document.documentElement.clientWidth > 500) {
    SQUARE_NUMBER = 546;

} else if (document.documentElement.clientWidth < 500) {
    SQUARE_NUMBER = 225;
}

for (i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(el) {
    const color = getRandomColor();
    el.style.background = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
    el.style.background = '#1d1d1d';
    el.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    const index = Math.floor(Math.random() * coolors.length);
    return coolors[index]
}
