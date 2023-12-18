import {createElement} from "../render.js";

function createUserGalleryComponentTemplate(id) {
    return (
        `<ul class="image-block">
        <li class="user-images-li">

            <img class="user-image" src="" alt="фото пользователя">
        </li>
        <li class="user-images-li">
            <img class="user-image" src="" alt="фото пользователя">
        </li>
        <li class="user-images-li">
            <img class="user-image" src="" alt="фото пользователя">
        </li>
        <li class="user-images-li">
            <img class="user-image" src="" alt="фото пользователя">
        </li>
        <li class="user-images-li">
            <img class="user-image" src="" alt="фото пользователя">
        </li>
        <li class="user-images-li">
            <img class="user-image" src="" alt="фото пользователя">
        </li>
    </ul>`
            );
}

export class GalleryComponent {

    #id = null;

    
    constructor({id}){
    this.#id = id;

    }


    getTemplate() 
    {
        return createUserGalleryComponentTemplate(this.#id);
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