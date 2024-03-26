const modeToggle = document.querySelector('#modeToggle');
const container = document.querySelector('.container');
const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const form = document.querySelector('#form');

// Implement Mode Button Toggle
let mode = 'light';

modeToggle.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
        modeToggle.textContent = 'Light Mode';
    } else {
        mode = 'light';
        container.setAttribute('class', 'light');
        modeToggle.textContent = 'Dark Mode';
    }
});

function logBlogPost(event) {

    event.preventDefault();

    const blogPost = {
        username: username.value,
        title: title.value,
        content: content.value.trim(),
    }
    localStorage.setItem('blogPost', JSON.stringify(blogPost));
    console.log(blogPost);
}

form.addEventListener('submit', logBlogPost);