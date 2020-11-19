// These functions open and close the contact form

function openForm() {
    // Display the form
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    // Hide the form
    document.getElementById("myForm").style.display = "none";
}


// This function covers the slide show
var slideIndex = 1;
// Show the first slide
showSlides(slideIndex);

function plusSlides(n) {
    // Increment the slides by n
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    // Set the current slide to given n
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    // Get all slides
    var slides = document.getElementsByClassName("mySlides");
    // Get all dots
    var dots = document.getElementsByClassName("dot");

    // If we're pass slides.length, reset to 1
    if (n > slides.length) { slideIndex = 1; }
    // If we're less than 1, reset to slides.length
    if (n < 1) { slideIndex = slides.length; }

    // Set all slides to hidden
    for (i = 0; i < slides.length; i++ ) {
        slides[i].style.display = "none";
    }

    // Set all dots to inactive
    for (i = 0; i < dots.length; i++ ) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide
    slides[slideIndex-1].style.display = "block";

    // Set the current dot to active
    dots[slideIndex-1].className += " active";
}