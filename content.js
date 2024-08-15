function toggleMenu() {
    const fullPageMenu = document.getElementById('fullPageMenu');
    fullPageMenu.classList.toggle('active');
}

function openVideo() {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'block';
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'none';
}
