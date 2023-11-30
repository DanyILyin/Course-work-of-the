import {createElement} from "../render.js";


function createProfileComponentTemplate() {
    return (
        `<div class="profile">
            <div class="avatar"> 
            <img src="../../resurses/123.png" alt="">
            </div>
            <div class="profile-text">
                <h1 class="person-name">Имя Пользователя</h1>
            </div>
        </div>`
            );
}

export class ProfileComponent {
    getTemplate() 
    {
        // setImage()
        return createProfileComponentTemplate();
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