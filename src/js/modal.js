const modal = document.querySelector('.modal');
const modalWrapper = modal.querySelector('.modal__wrapper');

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

export { modalOpen, modalClose }