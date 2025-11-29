
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.add('agrandi'); 
        setTimeout(() => {
            img.classList.remove('agrandi'); 
        }, 1000);
    });
});