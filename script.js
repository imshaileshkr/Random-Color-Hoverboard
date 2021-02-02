const container = document.getElementById('container');

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22','#2ecc74'];

const SQUARES = 500;

for(let i = 0; i < SQUARES; i++ ) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square) );
    square.addEventListener('mouseout', () => removeColor(square) );
    
    container.appendChild(square);
}

        // set color
function setColor(element) {
    // console.log(element);
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

        // Remove color
function removeColor(element) {
    element.style.background = `#1d1d1d`;
    element.style.boxShadow = `0 0 2px #000`;
}

        // Get random color
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
   
}