window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "50px";
  }
};
// Menubar fixed
var typed = new Typed('.type', {
  strings: ['Desingner', 
            'Developer ',
            'freelancer'],
           typeSpeed:100,
           loop:true,
});
//type JS
// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filtering').on( 'click', 'p', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
//isoTop effect
$('.navbar a').on('click', function(aeven){
  if(this.hash !== ''){
    even.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    })
  }
});
// smooth scroll ends
new WOW().init();