export function toggleMenuHeader() {
    document.addEventListener("DOMContentLoaded", function() {
        const menuBurger = document.querySelector('.nav-menu');
        const headerNav = document.querySelector('.nav');
        const body = document.body;

        menuBurger.addEventListener('click', () => {
            menuBurger.classList.toggle('active');
            headerNav.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });
    })
}


export function rebuildMenu() {
    const screenWidth = window.innerWidth;
    const breakPoint = 599;

    const navList = document.querySelector('ul[data-navList]');
    const headerMenu = document.querySelector('div[data-header-menu]');
    const headerMedia = document.querySelector('div[data-header-media]');
    const headerButton = document.querySelector('button[data-header-button]');

    if(screenWidth <= breakPoint) {
        navList.appendChild(headerMedia);
        navList.appendChild(headerButton);
        headerMedia.style.cssText = 
        `
            display: flex;
            column-gap: 14px;
        `;
        headerButton.style.cssText = 
        `
            padding: 11px 15px 11px 15px;
            background: var(--black-2);
            border: 1px solid transparent;
            border-radius: 20px;
            font-size: 1rem;
            font-weight: 400;
            color: var(--white);
            text-align: center;
            align-items: center;
            transition: 0.3s linear;
        `;
    } else {
        headerMenu.prepend(headerButton);
        headerMenu.prepend(headerMedia);
    }
};