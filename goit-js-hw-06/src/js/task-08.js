const form = document.querySelector(".login-form");
const email = document.querySelector('[type="email"]');
const password = document.querySelector('[type="password"]');
const submitBtn = document.querySelector('[type="submit"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;
  if (emailValue === "" || passwordValue === "") {
    alert("All fields must be filled in!");
  }
  const user = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(user);
  form.reset();
});

function goBack() {
  window.history.back();
}
