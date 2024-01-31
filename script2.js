function toggleAboutSection() {
    var aboutSection = document.getElementById('about');
    if (aboutSection.style.display === 'none' || aboutSection.style.display === '') {
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none';
    }
}

document.querySelector('nav ul li:nth-child(2) a').addEventListener('click', toggleAboutSection);
