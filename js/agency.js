(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $("#navbar-brand-img").addClass("navbar-brand-img-pri")
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#navbar-brand-img").removeClass("navbar-brand-img-pri")
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  var $animation_elements = $('.animation-element');
  var $window = $(window);

  

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      } else {
        //Remove a class from the $element.
      }
    });
  }

  document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = ["JavaScript", "HTML5", "CSS3", "Python", "SQL",];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector(".typwriter").innerHTML = text.substring(0, i+1) +'<span id="span-typwriter aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      } else {
        StartTextAnimation(0)
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });

  $window.on('scroll', check_if_in_view);
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

})(jQuery); // End of use strict

