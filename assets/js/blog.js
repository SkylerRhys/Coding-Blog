const blog = document.querySelector('#blog');

function displayBlogPosts() {
    const data = JSON.parse(localStorage.getItem('blogPost')) || [];
    for (const item of data) {
        const post = document.createElement('div');
        post.classList.add('post');
        const postAuthor = item.username;
        const postTitle = item.title;
        const postContent = item.content;
        const h3El = document.createElement('h3');
        h3El.textContent = postAuthor;
        post.appendChild(h3El);
        const h4El = document.createElement('h4');
        h4El.textContent = postTitle;
        post.appendChild(h4El);
        const pEl = document.createElement('p');
        pEl.textContent = postContent;
        post.appendChild(pEl);
        blog.append(post);
    }
}

displayBlogPosts();