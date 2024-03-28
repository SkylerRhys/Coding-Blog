const modeToggle = document.querySelector('.modeToggle');
const container = document.querySelector('.container');

// Implement Mode Button Toggle
let mode = 'light';

modeToggle.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
        modeToggle.setAttribute('class', 'dark');
        modeToggle.textContent = 'Light Mode';
    } else {
        mode = 'light';
        container.setAttribute('class', 'light');
        modeToggle.setAttribute('class', 'light');
        modeToggle.textContent = 'Dark Mode';
    }
});

