const form = document.querySelector(".subscription-form");

const nameError = document.getElementById("name-form-error");
const emailError = document.getElementById("email-form-error");

const formSubmit = document.getElementById("submit-button");
const successSubmit = document.getElementById("success-subscription")

// ----------------------------------------------------------------------

form.addEventListener("submit", (event) => {
    const formName = document.getElementById("name").value.trim();
    const formEmail = document.getElementById("email").value.trim();

    if (!validateName(formName) || !validateEmail(formEmail)) {
        event.preventDefault(); // Previene el envío si hay errores
      } else {
        successSubmit.innerText = "Se Subscribió Exitosamente";
        successSubmit.classList = "show"
      }
})

function validateEmail(formEmail) {
    let esValido = true;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(formEmail)) {
        emailError.classList.add("show")
        emailError.innerText = "El correo electrónico no es valido";
      esValido = false;
    }
    return esValido;
}

function validateName(formName) {
  let esValido = true;

  if(formName === '') {
    nameError.classList.add("show");
    nameError.textContent = "Debes proporcionar un nombre";
    esValido = false;
  }
  return esValido;
}