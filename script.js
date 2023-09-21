const videoContainer = document.getElementById('video-container');
const video = document.querySelector('video');
const videoPreview = document.getElementById('video-preview');

videoContainer.addEventListener('mouseenter', () => {
    video.style.display = 'block';
    videoPreview.style.display = 'none';
    video.play().catch(error => {
        console.error('Error al reproducir el video:', error);
    });
});

videoContainer.addEventListener('mouseleave', () => {
    video.style.display = 'none';
    videoPreview.style.display = 'block';
    video.pause();
});