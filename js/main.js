import { render, RenderPosition } from './render.js';
import { NavBarComponent } from './components/nav-bar-component.js';
import { ProfileComponent } from './components/profile-component.js';
import { ContainerRightComponent } from './components/container-right.js';
import { setImage } from './scripts/insertImage.js';

const profileComponent = document.querySelector('.context-menu')
const navBarComponent = document.querySelector('header');
const containerRightComponent = document.querySelector('.right-context-box');

render(new ProfileComponent(), profileComponent, RenderPosition.AFTERBEGIN);
render(new NavBarComponent(), navBarComponent);
render(new ContainerRightComponent(), containerRightComponent)

