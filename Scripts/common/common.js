function setError(input, message) {
    const formGroup = input.parentElement;
    const errorSpan = formGroup.querySelector('.error');
    errorSpan.textContent = message;
    
    input.classList.add('error-border');
}

function clearError(input) {
    const formGroup = input.parentElement;
    const errorSpan = formGroup.querySelector('.error');
    errorSpan.textContent = '';
    
    input.classList.remove('error-border');
}
