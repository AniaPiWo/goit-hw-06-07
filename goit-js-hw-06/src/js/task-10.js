const numberOfBoxesInput = document.querySelector('#controls input');
const createBoxesBtn = document.querySelector('#render');
const destroyBoxesBtn = document.querySelector('#destroy');
const boxesContainer = document.querySelector('#boxes');

let boxSize = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBox() {
  const box = document.createElement('div');
  box.style.width = `${boxSize}px`;
  box.style.height = `${boxSize}px`;
  box.style.backgroundColor = getRandomHexColor();
  boxSize += 10;
  return box;
}

function createBoxes() {
  const amount = numberOfBoxesInput.value;
  const boxes = Array.from({ length: amount }, createBox);
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
  boxSize = 30;
}

createBoxesBtn.addEventListener('click', createBoxes);
destroyBoxesBtn.addEventListener('click', destroyBoxes);
