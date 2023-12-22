import {createElement} from "../render.js";


function createLocationContentTemplate() {
    return (
        `<div class="location-div"> 
            <h3>Любимое место</h3> 
            <iframe class="location-component" src="https://yandex.ru/map-widget/v1/?um=constructor%3A666a9d82cebda097c0dce7b6d72f8c27fe3b78428393a44a7b6d67fd8e6fbdb9&amp;source=constructor" width="400" height="600" frameborder="0"></iframe>
        </div>`
            );
}

export class LocationComponent {
    getTemplate() 
    {
        return createLocationContentTemplate();
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