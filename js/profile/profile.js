import { render, RenderPosition } from '../render.js';
import { NavBarComponent } from '../components/nav-bar-component.js';
import { ProfileComponent } from '../components/profile-component.js';
import { ContainerRightComponent } from '../components/container-right.js';
import { ContainerFriends } from '../components/container-friends.js';
import { IternalContentComponent } from '../components/iternal-content.js';
import { usList } from '../autorization/usersList.js';
import { GalleryComponent } from '../components/gallery-components/gallery-component.js';
import { LocationComponent } from '../location/location.js';
import { PlaceGalAndLocComponent } from '../components/gallery-and-location.js';
import { PostListComponent } from '../components/post-component/post-list.js';



const navBarComponent = document.querySelector('header');
const profileComponent = document.querySelector('.context-menu')
const containerRightComponent = document.querySelector('.right-context-box');
const containerFriends = document.querySelector('.right-context-box');
const internalContent = new IternalContentComponent();






// debugger;
render(new ProfileComponent(usList[localStorage.test-1]), profileComponent, RenderPosition.AFTERBEGIN);
render(new NavBarComponent(), navBarComponent);
render(new ContainerRightComponent(), containerRightComponent);
render(new ContainerFriends(), containerFriends);
render(internalContent, profileComponent);
render(new PlaceGalAndLocComponent(), document.querySelector('.iternal-content'))

render(new GalleryComponent(), document.querySelector('.gallery-and-location'));
render(new LocationComponent(), document.querySelector('.gallery-and-location'))
render(new PostListComponent(), document.querySelector('.context-menu'))



// console.log(usList[localStorage.test-1].id);

