import {createElement} from "../render.js";

function createNavBarComponentTemplate() {
    return (
        `<nav class="nav-container">
            <div class="nav-items">
                <ul class="nav-left-ul">
                    <li class="nav-bar"><a href="#">настройки</a></li>
                    <li class="nav-bar"><a href="#">поддержка</a></li>
                    <li class="nav-bar"><a href="#">сервисы</a></li>
                </ul>
                <div class="top-home">
                    <input class="search-panel" type="text" placeholder="Поиск">
                    <h2 class="logo-header">Joint Step</h2>
                </div>
            </div>
        </nav>`
            );
}

export class NavBarComponent {
    getTemplate() 
    {
        return createNavBarComponentTemplate();
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
