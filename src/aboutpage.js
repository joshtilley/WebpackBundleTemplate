import {logo_svg} from './html-inserts.js';
import {aboutUs_html} from './html-inserts.js';

export function aboutPage() {
    const pageContent_div = document.querySelector('.content');
    
    // transition and duplicate prevention
    if (document.querySelector('.about-container')) {
        aboutPageTransition_in();

        return;
    }; 

    // initial render of elements
    const aboutContainer_div = document.createElement('div');
    aboutContainer_div.classList.add('page-content', 'about-container');

    const aboutTextBox_div = document.createElement('div');
    aboutTextBox_div.classList.add('about-textbox');
    aboutTextBox_div.innerHTML = aboutUs_html["our story"];

    const aboutFooter_div = document.createElement('div');
    aboutFooter_div.classList.add('about-footer');

    const aboutLogo_div = document.createElement('div');
    aboutLogo_div.classList.add('logo-inline');
    aboutLogo_div.innerHTML = logo_svg;

    const aboutFooterContent_div = document.createElement('div');
    aboutFooterContent_div.classList.add('about-footer-content');
    aboutFooterContent_div.innerHTML = aboutUs_html["footer content"];

    aboutFooter_div.append(aboutLogo_div, aboutFooterContent_div);

    aboutTextBox_div.append(aboutFooter_div);

    aboutContainer_div.append(aboutTextBox_div);

    pageContent_div.append(aboutContainer_div);

    aboutPageTransition_in();
}

// transitions
function aboutPageTransition_in() {
    const backgroundImage_div = document.querySelector('.background-container');
    const aboutPageContainer_div = document.querySelector('.about-container');

    setTimeout(() => {
        backgroundImage_div.classList.add('right-background-shifted');
        aboutPageContainer_div.classList.add('about-transition');
    }, 10);
}

export function aboutPageTransition_out() {
    const backgroundImage_div = document.querySelector('.background-container');
    const aboutPageContainer_div = document.querySelector('.about-container');

    setTimeout(() => {
        backgroundImage_div.classList.remove('right-background-shifted');
        aboutPageContainer_div.classList.remove('about-transition');
    }, 10);
}