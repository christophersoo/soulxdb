window.addEventListener('load', () => {
    const dimEffect = document.querySelector('.dim-effect');

    // Trigger fade-out effect
    setTimeout(() => {
        dimEffect.classList.add('active'); // Add the active class to start fading
    }, 1000); // Adjust this delay as needed for the effect
});