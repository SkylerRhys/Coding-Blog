const test = document.querySelector('#test');

const liTag = document.createElement('li');

liTag.textContent = localStorage.getItem('blogPost');

test.appendChild(liTag);