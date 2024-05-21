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


let slideIndex = 1;
let prevSlideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// function showSlides(n) {
//   let slides = document.getElementsByClassName("slides");
  
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}

//   // for (i = 0; i < slides.length; i++) {
//   //   slides[i].style.display = "none";
//   // }
  
//   // slides[slideIndex-1].style.display = "block";
//   // dots[slideIndex-1].className += " active";

//   // for ( let i = 0; i < slides.length; i++) {
//   //   slides[i].classList.remove('active');
//   // }

//   // slides[slideIndex - 1].classList.add('active');

//   for (let i = 0; i < slides.length; i++) {
//     slides[i].classList.remove('active');
//     slides[i].classList.remove('fade');
//   }

//   slides[slideIndex - 1].classList.add('active');
//   slides[slideIndex - 1].classList.add('fade');
// }

function showSlides(n) {
  let slides = document.getElementsByClassName("slides");
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    slides[i].classList.remove('slide-in');
    slides[i].classList.remove('slide-out');
  }

  if (n > prevSlideIndex) {
    slides[prevSlideIndex - 1].classList.add('slide-out');
  } else {
    slides[prevSlideIndex - 1].classList.add('prevSlide');
    slides[prevSlideIndex].classList.remove('prevSlide');
  }

  slides[slideIndex - 1].classList.add('active');
  slides[slideIndex - 1].classList.add('slide-in');

  prevSlideIndex = slideIndex;
}
