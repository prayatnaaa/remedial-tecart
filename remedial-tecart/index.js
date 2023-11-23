const input = document.getElementById("einput");
const succesMsg = document.getElementById("successMsg");
const form = document.getElementById("form");

function invalidEmail() {
  document.getElementById("invalidMsg").classList.remove("hidden");
  input.classList.add("bg-[#ffb4b4]");
}

function validEmail() {
  succesMsg.classList.remove("hidden");
  form.classList.add("hidden");
}

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    validateForm(event);
  }
});

function validateForm(event) {
  event.preventDefault();

  const emailInput = document.getElementById("einput");
  const email = emailInput.value.trim();

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (
    email === "" ||
    !emailRegex.test(email) ||
    !input.value.match(emailRegex)
  ) {
    invalidEmail();
  } else {
    validEmail();
  }
}
