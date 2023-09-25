const postsList = document.querySelector('.posts__list');
const template = document.querySelector('template');

const btnMore = document.querySelector('.btn-more');

const appendPosts = (array) => {
    if (array.length === 0) {
        btnMore.classList.add('d-none');
        return;
    }

    array.forEach((post) => {
        const clone = template.content.cloneNode(true);
        const img = clone.querySelector('.post__img');
        const title = clone.querySelector('.post__title');
        const subtitle = clone.querySelector('.post__subtitle');
        const text = clone.querySelector('.post__text');
        
        img.src = post.img;
        title.textContent = post.name;
        subtitle.textContent = post.title;
        text.textContent = post.body;
        
        postsList.appendChild(clone);
    });
}

export { appendPosts }