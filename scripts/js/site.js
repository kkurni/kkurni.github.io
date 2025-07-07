$(function () {
    $('a[href^=http]').attr('target', '_blank');
    $('.icon').css('opacity', '1');
    
    // Initialize theme
    initializeTheme();
});

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const body = document.body;
    const toggleButton = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        toggleButton.textContent = '🌙';
        toggleButton.title = 'Switch to dark theme';
    } else {
        body.classList.remove('light-theme');
        toggleButton.textContent = '☀️';
        toggleButton.title = 'Switch to light theme';
    }
}

function toggleTheme() {
    const body = document.body;
    const toggleButton = document.querySelector('.theme-toggle');
    
    if (body.classList.contains('light-theme')) {
        // Switch to dark theme
        body.classList.remove('light-theme');
        toggleButton.textContent = '☀️';
        toggleButton.title = 'Switch to light theme';
        localStorage.setItem('theme', 'dark');
    } else {
        // Switch to light theme
        body.classList.add('light-theme');
        toggleButton.textContent = '🌙';
        toggleButton.title = 'Switch to dark theme';
        localStorage.setItem('theme', 'light');
    }
}
