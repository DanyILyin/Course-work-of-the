import {createElement} from "../../render.js";
import { PostList } from "../../autorization/userPostList.js";
import { OnePostComponent } from "./post-component.js";


function createUserPostListComponentTemplate(postOwnerId) {
    let postArr = PostList;
    let filterPostByOwner = [];
    const postList = document.createElement("div");
    postList.className = "postList"
    
    const postListName = document.createElement("h3");
    postListName.innerHTML = `Мои посты`;
    
    const PostWindow = document.createElement("div");
    PostWindow.className = "post-container";

    postList.innerHTML += postListName.outerHTML;
    
    Object.values(postArr).forEach((columnElement)=>{
        if (columnElement.postOwnerId == localStorage.test){
            filterPostByOwner.push(columnElement);
        }
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
        return createUserPostListComponentTemplate(localStorage.test-1);
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