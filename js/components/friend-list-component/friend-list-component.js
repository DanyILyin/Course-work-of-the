import {createElement} from "../../render.js";
import { FriendList } from "../../autorization/userFriendList.js";
import { FriendToFriendList } from "../../autorization/friend-to-friend-list.js";


function createFriendListComponentTemplate(userId) {
    let friendArr = FriendList;
    let filterFriendsByOwner = [];
    const friendList = document.createElement("div");
    friendList.className = "container-friends"
    
    const friendListName = document.createElement("h2");
    friendListName.innerHTML = `Друзья в сети`;
    
    const FriendWindow = document.createElement("div");
    FriendWindow.className = "friend-wrapper";

    postList.innerHTML += postListName.outerHTML;
    
    Object.values(friendArr).forEach((columnElement)=>{
        


    });

    Object.values(filterPostByOwner).forEach((columnElement)=>{
        const onePost = new OnePostComponent(columnElement.idPost, columnElement.postOwnerId, columnElement.imagePath, columnElement.postMessage)
        const template = onePost.getTemplate();
        PostWindow.innerHTML += template;
    });


    postList.innerHTML += PostWindow.outerHTML
    return (postList.outerHTML);
}

export class PostListComponent {

    getTemplate() 
    {
        return createFriendListComponentTemplate(localStorage.test-1);
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