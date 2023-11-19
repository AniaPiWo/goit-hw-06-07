const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
const body = document.body;
let backgroundColor = body.style.backgroundColor;
backgroundColor = '#ffffff';
colorSpan.textContent = backgroundColor;

function generateRandomColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function updateBackgroundColor() {
  const newColor = generateRandomColor();
  body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}

changeColorButton.addEventListener('click', updateBackgroundColor);
