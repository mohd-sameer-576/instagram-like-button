let imgContainer = document.querySelector('.imgContainer');
let heartIcon = document.querySelector('.ri-heart-fill');

imgContainer.addEventListener('dblclick', () => {
    heartIcon.style.transform = 'translate(-50%, -50%) scale(2)';
    setTimeout(() => {  
        heartIcon.style.transform = 'translate(-50%, -50%) scale(0)';
        heartIcon.stylre.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
        heartIcon.style.opacity = '0';
    }, 1000);
});