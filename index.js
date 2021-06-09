const togle = document.getElementById('hamburger-menu')
const nav = document.getElementById('nav-menu')

togle.addEventListener('click', function () {
   this.classList.toggle('active')
   nav.classList.toggle('active')
})

let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

$('#hero-carousel').owlCarousel({
   items: 1,
   dots: false,
   loop: true,
   nav: true,
   navText: navText,
   autoplay: true,
   autoplayHoverPause: true
})

$('#top-movies-slide').owlCarousel({
   items: 5,
   dots : false,
   loop : true,
   autoplay : false
})
