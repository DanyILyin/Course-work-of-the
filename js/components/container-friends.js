import { createElement } from "../render.js";


function createContainerFriendsComponentTemplate() {
    return (
        `<div class="container-friends">
            <h2 class="friend-h2">Друзья в сети</h2>
            <ul class="friend-ul">
                <li class="friend-wrapper">
                    <img class="friend-image" src="../../resurses/friends-avatars/1.jpg" alt="фото профиля">
                        <a href="#" class="friend-name">Булат</a>
                </li>
                <li class="friend-wrapper">
                    <img class="friend-image" src="../../resurses/friends-avatars/4.jpg" alt="фото профиля">
                        <a href="#" class="friend-name">Софья</a>
                </li>
                <li class="friend-wrapper">
                    <img class="friend-image" src="../../resurses/friends-avatars/2.jpg" alt="фото профиля">
                        <a href="#" class="friend-name">Айнур</a>
                </li>
                <li class="friend-wrapper">
                    <img class="friend-image" src="../../resurses/friends-avatars/5.jpg" alt="фото профиля">
                        <a href="#" class="friend-name">Артур</a>
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

