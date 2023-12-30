function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var pass = document.getElementById('pass').value;
    var confirmPass = document.getElementById('confirmPass').value;

    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('pass-error').innerText = '';
    document.getElementById('confirmPass-error').innerText = '';
    var isValid = true;

    if (name === '') {
        document.getElementById('name-error').innerText = 'Please enter your name.';
    isValid = false;
    }
    if (email === '') {
        document.getElementById('email-error').innerText = 'Please enter your email.';
        isValid = false;
            } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern)) {
            document.getElementById('email-error').innerText = 'Please enter a valid email address.';
            isValid = false;
        }
            }
            if (pass === '') {
                document.getElementById('pass-error').innerText = 'Please enter your password.';
                isValid = false;
            } else if (pass.length < 10) {
                document.getElementById('pass-error').innerText = 'Password should be at least 10 characters long.';
                isValid = false;
            }
            if (confirmPass === '') {
                document.getElementById('confirmPass-error').innerText = 'Please confirm your password.';
                isValid = false;
            } else if (pass !== confirmPass) {
                document.getElementById('confirmPass-error').innerText = 'Passwords do not match.';
                isValid = false;
            }

     if (isValid) {
        console.log('Form is valid! Ready to submit.');
        return true;
    } else {
        return false;
}
}
