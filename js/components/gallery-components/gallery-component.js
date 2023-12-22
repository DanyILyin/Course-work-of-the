import {createElement} from "../../render.js";
import { usList } from "../../autorization/usersList.js";
import { OneGalleryComponent } from "./one-gallery-component.js";

function createUserGalleryComponentTemplate(id) {
    const gallery = document.createElement("div");
    gallery.className = "userGallery"
    
    const galleryName = document.createElement("h3");
    galleryName.innerHTML = `Мое фото`;
    
    const galleryWindow = document.createElement("ul");
    galleryWindow.className = "container-image";



    gallery.innerHTML += galleryName.outerHTML;
    
    for (let i = 1; i < 7; i++ ){
        const image = new OneGalleryComponent(Number(id), i);
        const template = image.getTemplate();
        galleryWindow.innerHTML += template;
    }

    gallery.innerHTML += galleryWindow.outerHTML
    return (gallery.outerHTML);
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