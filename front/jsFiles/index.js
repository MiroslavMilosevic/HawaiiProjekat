import loginFnk from './functions/loginFnk.js'

let button = document.getElementById("login-button");

button.addEventListener('click', function () {

    let input_username = document.getElementById("username");
    let input_password = document.getElementById("password");

    let isCorrect = loginFnk(input_username.value, input_password.value)[0];
    let isLengthCorrect = loginFnk(input_username.value, input_password.value)[1];
    console.log(isCorrect, isLengthCorrect);

    if (!isCorrect && isLengthCorrect) {
        let errorHeader = document.getElementById('error-login')
        input_username.value = '';
        input_password.value = '';
        errorHeader.innerText = "korisnicko ime ili lozinka netacni !!!"
        errorHeader.setAttribute('style', 'background-color:red ; text-align : center')

        setTimeout(() => {
            errorHeader.innerText = "";
            errorHeader.setAttribute('style', '');
        }, 3000);
    } else if (!isLengthCorrect) {
        let errorHeader = document.getElementById('error-login')
        input_username.value = '';
        input_password.value = '';
        errorHeader.innerText = "korisnicko ime ili lozinka su previse kratki"
        errorHeader.setAttribute('style', 'background-color:red ; text-align : center')
        setTimeout(() => {
            errorHeader.innerText = "";
            errorHeader.setAttribute('style', '');
        }, 3000);
    }///kraj if - else - if

});