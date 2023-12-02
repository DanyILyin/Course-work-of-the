import {createElement} from "../render.js";


function createIternalContentTemplate() {
    return (
        `<div class="iternal-content"></div>`
            );
}

export class IternalContentComponent {
    getTemplate() 
    {
        return createIternalContentTemplate();
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