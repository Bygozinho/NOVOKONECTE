console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');
const signupButton = document.getElementById('signupButton');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordMessage = document.getElementById('passwordMessage');

loginBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode.parentNode;
    Array.from(e.target.parentNode.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
            parent.classList.add('slide-up')
        } else {
            signupBtn.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
        }
    });
});

signupBtn.addEventListener('click', (e) => {
    let parent = e.target.parentNode;
    Array.from(e.target.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
            parent.classList.add('slide-up')
        } else {
            loginBtn.parentNode.parentNode.classList.add('slide-up')
            parent.classList.remove('slide-up')
        }
    });
});

// Adicione um ouvinte de evento ao campo de senha para verificar se as senhas coincidem
passwordInput.addEventListener('input', validatePassword);

confirmPasswordInput.addEventListener('input', validatePassword);

function validatePassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        signupButton.disabled = true;
        passwordInput.style.border = '1px solid red';
        confirmPasswordInput.style.border = '1px solid red';
        passwordMessage.innerText = 'As senhas são diferentes';
    } else {
        signupButton.disabled = false;
        passwordInput.style.border = '1px solid #eee';
        confirmPasswordInput.style.border = '1px solid #eee';
        passwordMessage.innerText = '';
    }
}