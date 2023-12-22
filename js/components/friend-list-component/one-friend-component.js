import { render } from "../../render.js";
import { userFriendList} from "../../autorization/userFriendList.js"

function createOneFriendComponentTemplate(id, friendName) {
    return (
        `<li class="friend-wrapper">
            <img class="friend-image" src="../../resurses/friends-avatars/${id}.jpg" alt="фото профиля">
            <a class="friend-name">${friendName}</a>
        </li>`
            );
}

export class OneFriendComponent {

    #id = null;
    #friendName = null;

    
    constructor(id, friendName){
    this.#id = id;
    this.#friendName = friendName;
    }


    getTemplate() 
    {
        return createOneFriendComponentTemplate(this.#id, this.#friendName);
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