(function() {
  'use strict';

  function generateMailTo() {
    var mailto = 'mailto:' +
    'ben' +
    '.' +
    'kremer' +
    '@' +
    'protonmail' +
    '.' +
    'com';
    var subject = '?subject=' +
    'Hey Ben!';
    return mailto + subject;
  }

  $.easing.easeInOutQuint = function(x, t, b, c, d) {
    if ((t /= d / 2) < 1)
      return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  };

  // smooth scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length
        ? target
        : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, 'easeInOutQuint');
        return false;
      }
    }
  });

  $('.email').attr('href', generateMailTo());

  // $('.links li').on('mouseover mouseout', function (e) {
  // 	$(this).toggleClass('animated tada', e.type === 'mouseover');
  // });

  setTimeout(function() {
    $('.credit').addClass('activate');
  }, 500);
})();
