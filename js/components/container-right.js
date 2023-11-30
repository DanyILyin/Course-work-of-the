

import { createElement } from "../render.js";

function createContainerRightComponentTemplate() {
    return (
        `<div class="container-right">
            <ul>
                <div class="right-text">
                    <li><a href="#">Моя страница</a></li>
                </div>
                <div class="right-text">
                    <li><a href="#">Друзья</a></li>
                </div>
                <div class="right-text">
                    <li><a href="">Чаты</a></li>
                </div>
                <div class="right-text">
                    <li><a href="#">Маршруты</a></li>
                </div>
                <div class="right-text">
                    <li><a href="#">Истории</a></li>
                </div>
            </ul>
        </div>`
    );
}

export class ContainerRightComponent {
    getTemplate() {
        return createContainerRightComponentTemplate();
    }


    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }
        return this.element;
    }


    removeElement() {
        this.element = null;
    }
}
