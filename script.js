let button = document.querySelector('.burguer-menu-icon');
let menu = document.querySelector('.nav-off');
let header = document.querySelector('.header-div');
let main = document.querySelector('.main');
let footer = document.querySelector('.footer');
let backButton = document.querySelector('.back-button');

function burguerMenu(element) {
  element.addEventListener('click', () => {
    menu.classList.toggle('nav-on');
    header.classList.toggle('header-div-off');
    main.classList.toggle('main-off');
    footer.classList.toggle('footer-off');
  })
}

burguerMenu(button);
burguerMenu(backButton);