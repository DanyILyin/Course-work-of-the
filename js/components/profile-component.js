import {createElement} from "../render.js";
import { usList } from "../autorization/usersList.js";

function createProfileComponentTemplate(name, surname, id) {
    return (
        `<div class="profile">
            <div class="avatar"> <img src="../../resurses/userSources${id}/avatarPhoto/av1.png">
            </div>
            <div class="profile-text">
                <h1 class="person-name">${name} ${surname}</h1>
            </div>
        </div>`
            );
}

export class ProfileComponent {

    #id = null;
    #login = null;
    #password = null;
    #phone = null;
    #name = null;
    #surname = null;
    
    constructor({id, login, password, phone, name, surname}){
    this.#id = id;
    this.#login = login;
    this.#password = password;
    this.#phone = phone;
    this.#name = name;
    this.#surname = surname;
    }


    getTemplate() 
    {
        return createProfileComponentTemplate(this.#name, this.#surname, this.#id);
    }
    

    getElement() 
    {

        if (!this.element) 
        {
        this.element = createElement(this.getTemplate());
        }

        return this.element;
    }


    removeElement() 
    {
        this.element = null;
    }
}