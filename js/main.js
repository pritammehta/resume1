$(document).ready(function(){


$('.icon-menu').click(function(){
  $('.site-navigation').slideToggle();
  $('.icon-menu').toggleClass('cross');
});


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




	$('.galleryjs').slick({
  dots: false,
  infinite: true,
  speed: 800,
  autoplay:true,
  slidesToShow: 3,
  slidesToScroll:1,
  prevArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--left"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
        nextArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


	$('.testimonials-slider').slick({
  dots: true,
  infinite: true,
  speed: 800,
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll:1,
  prevArrow:false,
  nextArrow:false
  //prevArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--left"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
  //      nextArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
});

  $('.chairmanslide-left').click(function(){
  $('.testimonials-slider').slick('slickPrev');
});

$('.chairmanslide-right').click(function(){
  $('.testimonials-slider').slick('slickNext');
});

	 $(window).scroll(function() {
        var sticky = $('header'),
            scroll = $(window).scrollTop();
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });




$(function() {
  //----- OPEN
  $('[data-popup-open]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
  });

  //----- CLOSE
  $('[data-popup-close]').on('click', function(e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });
});




    $("input.type-hide").on('change', function() {
        $('span.file-name').empty().text($("input.type-hide").val());
    }); 


});