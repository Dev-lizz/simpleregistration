const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');
const container = document.getElementById('main-container');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    
const toRegisterLink = document.getElementById('to-register');
const toLoginLink = document.getElementById('to-login');

    toRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.add("active");
    });

    toLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove("active");
    });