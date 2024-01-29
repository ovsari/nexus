function validateForm() {
    var email = document.getElementById('email').value.trim();
    var pass = document.getElementById('pass').value.trim();
    var isValid = true;

    // Validate email
    if (email === '') {
        displayError('email', 'Please enter your email.');
        isValid = false;
    } else if (!isValidEmail(email)) {
        displayError('email', 'Please enter a valid email address.');
        isValid = false;
    } else {
        hideError('email');
    }

    // Validate password
    if (pass === '') {
        displayError('pass', 'Please enter your password.');
        isValid = false;
    } else if (pass.length < 8) {
        displayError('pass', 'Password must be at least 8 characters.');
        isValid = false;
    } else {
        hideError('pass');
    }

    return isValid;
}

function isValidEmail(email) {
    // Use a basic email regex pattern for validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function displayError(inputId, errorMessage) {
    var errorElement = document.getElementById(inputId + '-error');
    if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
    }
}

function hideError(inputId) {
    var errorElement = document.getElementById(inputId + '-error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
}
