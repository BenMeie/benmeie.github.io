var slideIndex = 1

function autoSlide() {
    moveslides(slideIndex += 1);
}

function plusSlides(n) {
    moveslides(slideIndex += n);
  }

function moveslides(n) {
    var i
    var slides = document.getElementsByClassName('slide')
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        slides[i].getElementsByClassName('map_img')[0].style.opacity = 0
    }
    slides[slideIndex-1].getElementsByClassName('map_img')[0].style.opacity = 1
    slides[slideIndex-1].style.display = "flex"; 
    console.log("e")
}