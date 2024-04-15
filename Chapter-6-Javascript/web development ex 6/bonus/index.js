let numColors;
let colors = [];
let pickedColor;
let score = 0;
let gameOver = false; // Flag to track if the game is over

const colorDisplay = document.getElementById('colorDisplay');
const options = document.getElementById('options');
const messageDisplay = document.getElementById('message');
const scoreDisplay = document.getElementById('scoreValue');
const resetButton = document.getElementById('resetButton');
const difficultySelect = document.getElementById('difficulty-select');

// Initialize the game
function init() {
    resetButton.textContent = 'New Colors';
    gameOver = false; // Reset game over flag
    numColors = parseInt(difficultySelect.value);
    colors = generateRandomColors(numColors);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    options.innerHTML = '';
    messageDisplay.textContent = '';
    scoreDisplay.textContent = score;
    displayOptions();
}

// Generate random RGB colors
function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

// Generate a random RGB color
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Pick a random color from the colors array
function pickColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Display color options
function displayOptions() {
    for (let i = 0; i < colors.length; i++) {
        const option = document.createElement('div');
        option.classList.add('option');
        option.style.backgroundColor = colors[i];
        option.addEventListener('click', function () {
            if (!gameOver) {
                if (this.style.backgroundColor === pickedColor) {
                    messageDisplay.textContent = 'Correct!';
                    score++;
                    scoreDisplay.textContent = score;
                    setTimeout(init, 1000); // Proceed to the next round after 1 second
                } else {
                    messageDisplay.textContent = 'Wrong!';
                    gameOver = true; // Set game over flag
                    resetButton.textContent = 'Play Again';
                    resetButton.disabled = false;
                }
            }
        });
        options.appendChild(option);
    }
}

// Event listener for New Colors button
resetButton.addEventListener('click', function () {
    if (gameOver) {
        resetButton.disabled = true;
    }
    init();
});

// Event listener for difficulty selection
difficultySelect.addEventListener('change', function () {
    init();
});

// Initialize the game when the page loads
window.addEventListener('load', function () {
    init();
});
