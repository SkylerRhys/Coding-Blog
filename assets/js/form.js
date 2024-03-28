const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const form = document.querySelector('#form');

// Create or access existing blog posts
const blogArray = JSON.parse(localStorage.getItem('blogPost')) || [];

function logBlogPost(event) {

    event.preventDefault();

    // Create an object for the blog post to live in
    const blogPost = {
        username: username.value,
        title: title.value,
        content: content.value.trim(),
    }

    // Create an alert if user fills out fields incorrectly
    if (blogPost.username === '' || blogPost.title === '' || blogPost.content === '') {
        const alert = document.createElement('h4');
        alert.setAttribute('id', 'alert')
        alert.textContent = 'Please fill out all text fields';
        form.appendChild(alert);
        return false;
    } else { // Attach user input to blogArray
        blogArray.push(blogPost);
        localStorage.setItem('blogPost', JSON.stringify(blogArray));
        window.location.href = "./pages/blog.html"
    }

}

form.addEventListener('submit', logBlogPost);
