const imgContainer = document.querySelector('.imgContainer');
const heartIcon = document.querySelector('.ri-heart-fill');

imgContainer.addEventListener('dblclick', () => {
    // Add active class for the heart animation
    heartIcon.classList.add('active');
    
    // Scale up animation
    heartIcon.style.transform = 'translate(-50%, -50%) scale(1.2)';
    
    // Reset after animation
    setTimeout(() => {
        heartIcon.style.transform = 'translate(-50%, -50%) scale(0)';
        heartIcon.classList.remove('active');
    }, 800);
});

// Add single click for preview effect
imgContainer.addEventListener('click', () => {
    // Add a subtle pulse effect
    imgContainer.style.transform = 'translateY(-5px) scale(1.02)';
    setTimeout(() => {
        imgContainer.style.transform = '';
    }, 150);
});