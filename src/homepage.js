import {logo_svg} from './html-inserts.js';
import {home_html} from './html-inserts.js';

export function homePage() {
    const pageContent_div = document.querySelector('.content');
    
    // controls transition and prevents duplication of content
    if (document.querySelector('.homepage-container')) {
        homepageTransition_in();

        return;
    }; 
    
    // creates textbox 
    const homeContent_div = document.createElement('div');
    homeContent_div.classList.add('page-content', 'homepage-container');

    const homeText_div = document.createElement('div');
    homeText_div.classList.add('homepage-text');

    const logoContainer_div = document.createElement('div');
    logoContainer_div.classList.add('logo-large');
    logoContainer_div.innerHTML = logo_svg;

    const header_h2 = document.createElement('h2');
    header_h2.innerText = home_html["header"];

    const tagline_p = document.createElement('p');
    tagline_p.classList.add('tagline');
    tagline_p.innerText = home_html["tagline"];

    const openTimes_p = document.createElement('p');
    openTimes_p.classList.add('open-times');
    openTimes_p.innerHTML = home_html["opening times"];
        
    homeText_div.append(header_h2, tagline_p, openTimes_p);
    homeContent_div.append(logoContainer_div, homeText_div);
    pageContent_div.append(homeContent_div);
    
    // creates background image 
    if (!document.querySelector('.background-container')) {
        const backgroundImage_div = document.createElement('div');
        backgroundImage_div.classList.add('background-container');
        
        pageContent_div.appendChild(backgroundImage_div);
    };  
}

// transitions
function homepageTransition_in() {
    const homeContent_div = document.querySelector('.homepage-container');

    setTimeout(() => {
        homeContent_div.classList.remove('homepage-transition');
    }, 10);
}

export function homePageTransition_out() {
    const homeContent_div = document.querySelector('.homepage-container');

    setTimeout(() => {
        homeContent_div.classList.add('homepage-transition');
    }, 10);
}