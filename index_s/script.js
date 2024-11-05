function goToHome() {
    const dimEffect = document.querySelector('.dim-effect');

    // Add the active class to start dimming the effect
    dimEffect.classList.add('active');

    // Wait for the animation to finish before navigating
    setTimeout(() => {
        window.location.href = '../home/index.html'; // Navigate to home.html
    }, 1000); // Match this time with the CSS transition duration
}

