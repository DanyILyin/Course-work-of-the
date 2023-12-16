import {usList} from "./usersList.js";
// import {} from "";

const users = usList;
// let name = document.querySelector('#name');
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#aut-button');

submit.addEventListener('click', () => {
    const loginUser = login.value;
    const passwordUser = password.value;


    users.forEach((log) => {
        if (loginUser == log.login){
            if(passwordUser == log.password){
                console.log('Авторизация прошла успешно');
                open_win(log.id);
            }
            else{
                alert('Неверный пароль!')
            }
        }
    })
    

})

function open_win() {
    // window.open("../profile/profile.html")
    document.location.href = "../profile/index.html";
}

