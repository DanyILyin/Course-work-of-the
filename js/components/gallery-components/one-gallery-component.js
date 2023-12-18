import { render } from "../../render.js";
import { usList } from "../../autorization/usersList.js";

function createOneGalleryComponentTemplate(id, nowImage) {
    return (
        `<img class="user-image" src="../../resurses/userSources${id}/userGallery/${nowImage}.png" alt="фото из галереи">`
            );
}

export class OneGalleryComponent {

    #id = null;
    #nowImage = null;

    
    constructor(id, nowImage){
    this.#id = id;
    this.#nowImage = nowImage;
    }


    getTemplate() 
    {
        return createOneGalleryComponentTemplate(this.#id, this.#nowImage);
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