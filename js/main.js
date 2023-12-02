import { render, RenderPosition } from './render.js';
import { NavBarComponent } from './components/nav-bar-component.js';
import { ProfileComponent } from './components/profile-component.js';
import { ContainerRightComponent } from './components/container-right.js';
import { ContainerFriends } from './components/container-friends.js';
import { IternalContentComponent } from './components/iternal-content.js';

const profileComponent = document.querySelector('.context-menu')
const navBarComponent = document.querySelector('header');
const containerRightComponent = document.querySelector('.right-context-box');
const containerFriends = document.querySelector('.right-context-box');
const internalContent = document.querySelector('.context-menu');

render(new ProfileComponent(), profileComponent, RenderPosition.AFTERBEGIN);
render(new NavBarComponent(), navBarComponent);
render(new ContainerRightComponent(), containerRightComponent);
render(new ContainerFriends(), containerFriends);
render(new IternalContentComponent(), internalContent);

