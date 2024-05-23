function playPause() {
    var video = document.getElementById("myVideo");
    var button = document.querySelector(".play-button");
    
    if (video.paused) {
        video.play();
        button.style.display = "none"; 
    } else {
        video.pause();
        button.style.display = "flex"; 
    }
}

var video = document.getElementById("myVideo");
    video.addEventListener("pause", function() {
        var button = document.querySelector(".play-button");
        button.style.display = "flex"; 
    });


let currentIndex = 0;

function plusSlides(n) {
    const slider = document.querySelector('#slider figure');
    const totalSlides = slider.children.length;

    currentIndex = (currentIndex + n) % totalSlides;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    slider.style.transform = `translateX(-${currentIndex * 100 / totalSlides}%)`;
}

function toggleMenu() {
    const sideMenu = document.querySelector('.side');
    sideMenu.classList.toggle('active');
}