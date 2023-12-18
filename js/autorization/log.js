import {usList} from "./usersList.js";

const users = usList;
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

// использую локальное хранилище чтобы передать ключ с одного HTML файла в другой
function open_win(userId) {
    localStorage.test = userId
    document.location.href = "../profile/index.html";
}

