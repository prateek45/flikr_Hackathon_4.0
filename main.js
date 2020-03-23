var slideIndex = 0;

showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var images = document.getElementsByClassName("myimages");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    images[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length)
  {
      slideIndex=1

  }
  images[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.display = "block";
  
  setTimeout(showSlides, 7000); // Change image every 7 seconds
}