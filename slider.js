var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
        n=1
    }
    if (n < 1) {
        slideIndex = slides.length
        n=slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    
    if (n-1==0){
        document.getElementById("hostingFrame").src = "mooninfo.html";
        document.getElementById("hostingFrame1").src = "mooninfo2.html";
    }
    if (n==2){
        document.getElementById("hostingFrame").src = "mars.html";
        document.getElementById("hostingFrame1").src = "marsinfo2.html";
    }
    if (n==3){
        document.getElementById("hostingFrame").src = "europapage1.html";
        document.getElementById("hostingFrame1").src = "europa.html";
    }
}
