const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    // Clear old messages
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.getElementById('successMessage').textContent = '';

    // Get values
    const firstName = document.getElementById('firstName').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s]{7,15}$/;

    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        isValid = false;
    }

    if (surname === '') {
        document.getElementById('surnameError').textContent = 'Surname is required.';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        isValid = false;
    }

    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone is required.';
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Enter a valid phone number.';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('successMessage').textContent = 'Form submitted successfully!';
        form.reset();
    }
});
