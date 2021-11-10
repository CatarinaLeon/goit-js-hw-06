const validationInput = document.querySelector('#validation-input');

const validNamber = parseInt(validationInput.dataset.length);

const onInput = (event) => {
    const userValue = event.target.value.trim().length;
    validationInput.classList.add('invalid');
    
    if (userValue === validNamber) {
        validationInput.classList.replace('invalid', 'valid');
        return;
    }
    validationInput.classList.replace('valid', 'invalid');
}
validationInput.addEventListener('blur', onInput)