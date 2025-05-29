const radioButtons = document.querySelectorAll('input[name="user_type"]');
const adminFields = document.getElementById('admin-fields');
const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eye-icon');

radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.value === 'admin') {
            adminFields.style.display = 'flex';
        } else {
            adminFields.style.display = 'none';
        }
    });
});

function togglePassword() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    if (type === 'text') {
        eyeIcon.src = '/static/imagens/eye-off.svg';  
    } else {
        eyeIcon.src = '/static/imagens/eye.svg';     
    }
}
