// WOW animate js
new WOW().init();

// owlCarousel js
jQuery("#guideCarousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
  dots: false, 
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 4000,
  smartSpeed: 800,
  nav: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    }
  }
});

// top nav bar 
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 300) {
      $("header").addClass("fixedHeader");
  } else {
      $("header").removeClass("fixedHeader");
  }
});

