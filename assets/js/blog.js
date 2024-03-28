const blog = document.querySelector('#blog');

function displayBlogPosts() {
    const data = JSON.parse(localStorage.getItem('blogPost')) || [];
    for (const item of data) {
        // Create a box for the post
        const post = document.createElement('div');
        post.classList.add('post');

        // Asign variables for the post attributes
        const postAuthor = item.username;
        const postTitle = item.title;
        const postContent = item.content;

        // Create h3 tag for the Author
        const h3El = document.createElement('h3');
        h3El.textContent = postAuthor;
        post.appendChild(h3El);

        // Create h4 tag for the post Title
        const h4El = document.createElement('h4');
        h4El.textContent = postTitle;
        post.appendChild(h4El);

        // Create p tag for the post content
        const pEl = document.createElement('p');
        pEl.textContent = postContent;
        post.appendChild(pEl);
        
        // Attach entire post to the webpage
        blog.append(post);
    }
}

displayBlogPosts();