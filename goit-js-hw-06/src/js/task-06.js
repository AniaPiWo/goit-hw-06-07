const input = document.querySelector('#validation-input');
const requiredLength = 6;

input.addEventListener('input', event => {
  const inputValue = event.currentTarget.value;
  const isValidLength = inputValue.length === requiredLength;
  input.classList.toggle('valid', isValidLength);
  input.classList.toggle('invalid', !isValidLength);
});
