var doc = document.documentElement;

doc.setAttribute('data-useragent', navigator.userAgent);

$(function(){

  $(document).foundation();

  $(".slides").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $(".dog-slides").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $(".home-slides").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  var lang, a, href;
  lang = window.location.pathname.slice(1,3);
  $(".navigation ul li").each(function() {
    a = $(this).children();
    href = a.attr('href');
    if(href.indexOf('/' + lang + '-') > -1) {
      $(this).removeClass('invisible');
    }
  });
  $(".nav h3.subtitle span").each(function() {
    if($(this).hasClass(lang)) {
      $(this).removeClass('invisible');
    }
  });
});
