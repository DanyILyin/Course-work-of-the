import { createElement } from "../render.js";


function createContainerFriendsComponentTemplate() {
    return (
        `<div class="container-friends">
            <h2 class="friend-h2">Друзья в сети</h2>
            <ul class="friend-ul">
                <li class="friend-wrapper">
                    <img class="friend-image" src="" alt="фото профиля">
                        <a href="#" class="friend-name">Друг</a>
                </li>
                <li class="friend-wrapper">
                    <img class="friend-image" src="" alt="фото профиля">
                        <a href="#" class="friend-name">Друг</a>
                </li>
                <li class="friend-wrapper">
                    <img class="friend-image" src="" alt="фото профиля">
                        <a href="#" class="friend-name">Друг</a>
                </li>
                <li class="friend-wrapper">
                    <img class="friend-image" src="" alt="фото профиля">
                        <a href="#" class="friend-name">Друг</a>
                </li>
            </ul>
        </div>`
    );
}

export class ContainerFriends {
    getTemplate() {
        return createContainerFriendsComponentTemplate();
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

