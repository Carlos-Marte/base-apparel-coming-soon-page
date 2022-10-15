const form = document.querySelector("#form");
const inputText = document.querySelector("#input-email");
const imgError = document.querySelector("#img-error");
const pError = document.querySelector("#p-error");

let badEmail = false;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const regexpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    // Si el email esta mal
    if (!badEmail && !regexpEmail.test(inputText.value)) {
        inputText.classList.toggle("form__input--error");
        imgError.classList.toggle("form__img-error--active");
        pError.classList.toggle("form__p--active");
        badEmail = true;
    }
    
    // Si el email esta bien
    if (badEmail && regexpEmail.test(inputText.value)) {
        inputText.classList.toggle("form__input--error");
        imgError.classList.toggle("form__img-error--active");
        pError.classList.toggle("form__p--active");
        badEmail = false;
    }
});