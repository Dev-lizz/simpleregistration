let registerBtn = document.getElementById('registerBtn');
let loginBtn = document.getElementById('loginBtn');
let container = document.getElementById('main-container');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    
