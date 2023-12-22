import {createElement} from "../render.js";


function createPlaceForGalleryAndLocationContentTemplate() {
    return (
        `<div class="gallery-and-location"> 
        </div>`
            );
}

export class PlaceGalAndLocComponent {
    getTemplate() 
    {
        return createPlaceForGalleryAndLocationContentTemplate();
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