//VALIDAR LOGIN
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error");
    messageElement.classList.add(`form_message-${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#signup");
	const recuperarPass = document.querySelector("#recuperar");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

	document.querySelector("#lostPass").addEventListener("click", e => {
        e.preventDefault();
        recuperarPass.classList.remove("form-hidden");
        loginForm.classList.add("form-hidden");
    });

	document.querySelector("#backLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        recuperarPass.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Nombre de usuario/Contraseña invalido.");
    });

    document.querySelectorAll(".form-control").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "El Nombre de usuario debe ser mayor a 6 carateres.");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});
//end VALIDAR LOGIN