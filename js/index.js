const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    const video = document.querySelector('video');

    video.play();
    document.body.style.background = '#a36ab9';
});