import { modalOpen, modalClose } from "./modal";
import { loadData, downloadPartPosts } from "./download";
import { appendPosts } from "./appendPosts";

const menu = document.querySelector('.navigation');
const menuBtn = document.querySelector('#menu-toggle');

const modalBtn = document.querySelectorAll('.btn-modal');
const modalCloseBtn = document.querySelector('.modal__close');

const btnMore = document.querySelector('.btn-more');

const IMG_URL = 'img/post-img10.png';
const POST_NAME ='Nature';

let postFull = [];
let partPosts = [];

const menuToggle = () => {
    menu.classList.toggle('navigation__visible');
}

const addDataToPartPosts = () => {
    partPosts.forEach((post) => {
        post.img = IMG_URL;
        post.name = POST_NAME;
    });

    return partPosts;
}

const btnMoreClickHandler = (evt) => {
    evt.preventDefault();
    partPosts = downloadPartPosts(postFull);
    addDataToPartPosts();
    
    appendPosts(partPosts);
}

menuBtn.addEventListener('click', () => menuToggle());

modalBtn.forEach((btn) => btn.addEventListener('click', () => modalOpen()));
modalCloseBtn.addEventListener('click', () => modalClose());

document.addEventListener('keydown', function (e) {
    if(e.keyCode === 27) {
        modalClose();
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    postFull = await loadData();
});

btnMore.addEventListener('click', (evt) => btnMoreClickHandler(evt));