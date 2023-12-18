import {createElement} from "../../render.js";
import { usList } from "../../autorization/usersList.js";
import { OneGalleryComponent } from "./one-gallery-component.js";

function createUserGalleryComponentTemplate(id) {
    const galleryWindow = document.createElement("ul");
    galleryWindow.className = "container-image";

    for (let i = 1; i < 7; i++ ){
        const image = new OneGalleryComponent(Number(id), i);
        const template = image.getTemplate();
        galleryWindow.innerHTML += template;
    }

    return (galleryWindow.outerHTML);
}

export class GalleryComponent {

    getTemplate() 
    {
        return createUserGalleryComponentTemplate(usList[localStorage.test-1].id);
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