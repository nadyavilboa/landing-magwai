const menu = document.querySelector('.navigation');
const menuBtn = document.querySelector('#menu-toggle');

const modalBtn = document.querySelectorAll('.btn-modal');
const modalCloseBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const modalWrapper = modal.querySelector('.modal__wrapper');

const menuToggle = () => {
    menu.classList.toggle('navigation__visible');
}

const modalOpen = () => {
    modal.classList.remove('d-none');
    modal.classList.add('modal-visible');
    modalWrapper.classList.remove('animation-fadeOut');
    modalWrapper.classList.add('animation-fadeIn');
}

const modalClose = () => {
    modalWrapper.classList.remove('animation-fadeIn');
    modalWrapper.classList.add('animation-fadeOut');
    setTimeout(() => {
        modal.classList.add('d-none');
        modal.classList.remove('modal-visible');
    }, 500);

}

menuBtn.addEventListener('click', () => menuToggle());

modalBtn.forEach((btn) => btn.addEventListener('click', () => modalOpen()));
modalCloseBtn.addEventListener('click', () => modalClose());

document.addEventListener('keydown', function (e) {
    if(e.keyCode === 27) {
        modalClose();
    }
});