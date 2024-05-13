import {logo_svg} from './html-inserts.js';
import {menu_html} from './html-inserts.js';

export function menuPage(){
    const pageContent_div = document.querySelector('.content');

    // controls transition and prevents duplication of content
    if (document.querySelector('.menu-container')) {
        menuPageTransition_in();

        return;
    }; 

    // creates menu content
    const menuContainer_div = document.createElement('div');
    menuContainer_div.classList.add('page-content', 'menu-container');

    const menuBody_div = document.createElement('div');
    menuBody_div.classList.add('menu-body');
    menuBody_div.innerHTML = menu_html;

    const menuFooter_div = document.createElement('div');
    menuFooter_div.classList.add('menu-footer');

    const menuLogo_div = document.createElement('div');
    menuLogo_div.classList.add('logo-small');
    menuLogo_div.innerHTML = logo_svg;

    menuFooter_div.append(menuLogo_div);
    menuContainer_div.append(menuBody_div, menuFooter_div);
    pageContent_div.append(menuContainer_div);

    menuPageTransition_in();
}

// transitions
function menuPageTransition_in() {
    const backgroundImage_div = document.querySelector('.background-container');
    const menuContainer_div = document.querySelector('.menu-container');

    setTimeout(() => {
        backgroundImage_div.classList.add('left-background');
        menuContainer_div.classList.add('menu-transition');
    }, 10);
}

export function menuPageTransition_out() {
    const backgroundImage_div = document.querySelector('.background-container');
    const menuContainer_div = document.querySelector('.menu-container');

    setTimeout(() => {
        backgroundImage_div.classList.remove('left-background');
        menuContainer_div.classList.remove('menu-transition');
    }, 10);
}