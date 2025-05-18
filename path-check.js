// Add this script after your other scripts to verify paths
document.addEventListener('DOMContentLoaded', function() {
    const images = document.getElementsByTagName('img');
    Array.from(images).forEach(img => {
        img.onerror = function() {
            console.error('Failed to load image:', img.src);
        };
    });

    const links = document.getElementsByTagName('link');
    Array.from(links).forEach(link => {
        link.onerror = function() {
            console.error('Failed to load resource:', link.href);
        };
    });
});
