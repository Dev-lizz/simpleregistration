let registerBtn = document.getElementById('registerBtn');
let loginBtn = document.getElementById('loginBtn');
let container = document.getElementById('main-container');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });


let inputsSenha = document.querySelectorAll('.password');
inputsSenha.forEach(input => {
    input.addEventListener('mousemove', function(e) {
        if (e.offsetX > (this.offsetWidth - 35)) {
            this.style.cursor = 'pointer';
        } else {
            this.style.cursor = 'text';
        }
    });

    
    input.addEventListener('mousedown', function(e) {
        let larguraTotal = this.offsetWidth;
        let cliqueX = e.offsetX;

        if (cliqueX > (larguraTotal - 35)) {
            e.preventDefault(); 

            if (this.type === 'password') {
                this.type = 'text';
                this.classList.add('show');
            } else {
                this.type = 'password';
                this.classList.remove('show');
            }
        }
    });
});