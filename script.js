function toggleContactSection() {
    var contactSection = document.getElementById('contact');
    if (contactSection.style.display === 'none' || contactSection.style.display === '') {
        contactSection.style.display = 'block';
    } else {
        contactSection.style.display = 'none';
    }
} 


document.querySelector('nav ul li:nth-child(3) a').addEventListener('click', toggleContactSection);
