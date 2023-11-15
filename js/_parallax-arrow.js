document.addEventListener("DOMContentLoaded", function(_) {
    let bg = document.querySelectorAll('.mouse-parallax-arrow');
    for (let i = 0; i < bg.length; i++){
        window.addEventListener('mousemove', function(e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            bg[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        });
    }
});