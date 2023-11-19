const counter = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('#decrement');
const incrementBtn = document.querySelector('#increment');

let value = 0;
counterValue.textContent = value;

const increment = () => {
  value += 1;
  counterValue.textContent = value;
};

const decrement = () => {
  value -= 1;
  counterValue.textContent = value;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
