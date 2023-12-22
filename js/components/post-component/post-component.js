import { render } from "../../render.js";
import { usList } from "../../autorization/usersList.js";

function createOnePostComponentTemplate(idPost, postOwnerId, imagePath, postMessage) {
    return (
        `
        <div class="post">
            <p>${postMessage}</p>
            <img id="post-image" src="../../resurses/userSources${postOwnerId}${imagePath}${idPost}.jpg">
        </div>
        `
            );
}

export class OnePostComponent {

    #idPost = null;
    #postOwnerId = null;
    #imagePath = null;
    #postMessage = null;

    
    constructor(idPost, postOwnerId, imagePath, postMessage){
    this.#idPost = idPost;
    this.#postOwnerId = postOwnerId
    this.#imagePath = imagePath;
    this.#postMessage = postMessage;
    }


    getTemplate() 
    {
        return createOnePostComponentTemplate(this.#idPost, this.#postOwnerId, this.#imagePath, this.#postMessage);
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