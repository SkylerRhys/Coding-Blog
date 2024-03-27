const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const form = document.querySelector('#form');

const blogArray = JSON.parse(localStorage.getItem('blogPost')) || [];

function logBlogPost(event) {

    event.preventDefault();

    const blogPost = {
        username: username.value,
        title: title.value,
        content: content.value.trim(),
    }
    blogArray.push(blogPost);
    localStorage.setItem('blogPost', JSON.stringify(blogArray));
    window.location.href = "./pages/blog.html"
}

form.addEventListener('submit', logBlogPost);
