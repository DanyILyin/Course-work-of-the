import {usList} from "./usersList.js";
const users = usList;

let name = document.querySelector('#name');
let surname = document.querySelector('#surname');
let phone = document.querySelector('#phone');
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

// let users = {};

function User(name, surname, phone, login, password){
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.login = login;
    this.password = password;
}

function getId(users) {
    return Object.keys(users).length;
}
submit.addEventListener('click', () => {
    const loginUser = login.value;
    const passwordUser = password.value;
    const phoneUser = phone.value;
    const nameUser = name.value;
    const surnameUser = surname.value;
    const isAvailable = true;

    // Проверка на совпадения в списке пользователей
    users.forEach((user) => {
        if (loginUser == user.login){
            alert('Логин уже занят!')
            isAvailable = false;
        }
        else if (phoneUser == user.phone){
            alert('Номер уже используется!')
            isAvailable = false;
        }
    })
    // Если не найдено совпадений создаем пользователя
    if (isAvailable){
        const user = new User(nameUser, surnameUser, phoneUser, loginUser, passwordUser)
        const userId = getId(users)
        users[userId] = user
        console.log(users);
    }
})
