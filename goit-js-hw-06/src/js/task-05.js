const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.oninput = function () {
  if (this.value === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = this.value;
  }
};
