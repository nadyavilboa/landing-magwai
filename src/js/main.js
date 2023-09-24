const menu = document.querySelector('.navigation');
const menuBtn = document.querySelector('#menu-toggle');

const modalBtn = document.querySelectorAll('.btn-modal');
const modalCloseBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

console.log('test');

const menuToggle = () => {
    menu.classList.toggle('navigation__visible');
}

const modalOpen = () => {
    modal.classList.remove('d-none');
    modal.classList.add('modal-visible');
}

const modalClose = () => {
    modal.classList.add('d-none');
    modal.classList.remove('modal-visible');
}

menuBtn.addEventListener('click', () => menuToggle());

modalBtn.forEach((btn) => btn.addEventListener('click', () => modalOpen()));
modalCloseBtn.addEventListener('click', () => modalClose());