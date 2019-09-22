
import PerfectScrollbar from 'perfect-scrollbar';

import '../scss/_theme.scss';



// $('.menubar-sticky').on('ps-scroll-y', ps.update());

/**
 * --------------------------------------------------------------------------
 * Dunwoo Admin (v1.0.2): theme.js
 * Licensed under MIT (https://github.com/dwosc/dunwoo-admin/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const ps = new PerfectScrollbar('.menubar-content', {
  wheelSpeed: 0.5,
  swipeEasing: true,
  // wheelPropagation: true,
  minScrollbarLength: 25
});


var toggleMenubar = function() {
    $(".menubar").toggleClass("toggled");
    $(".main").toggleClass("toggled");
}

$(".menubar-toggle").on("click", toggleMenubar);
$(".menubar-close").on("click", toggleMenubar);

// 
var $backToTop = $(".back-to-top");

$backToTop.on("click", function(e) {
    e.preventDefault ()
    $('body, html').animate({
      scrollTop: 0
    }, 500);
});

$(window).scroll (function () {
  if ($(this).scrollTop () > 150) {
    $backToTop.addClass('show');
  } else {
    $backToTop.removeClass('show');
  }
});



