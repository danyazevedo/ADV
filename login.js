document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const validUsername = 'admin';
    const validPassword = '12345';

    if (username === validUsername && password === validPassword) {
       
        window.location.href = "admin_ex.html";
    } else {
        
        errorMessage.textContent = 'Usuário ou senha incorretos!';
        errorMessage.style.display = 'block';
    }
});