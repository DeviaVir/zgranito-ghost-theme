var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

$(function(){
  $(document).foundation();
  $(".slides").slidesjs({
    width: '960',
    height: '600',
    navigation: false
  });

  $(".dog-slides").slidesjs({
    width: '400',
    height: '250',
    navigation: false,
    play: {
      active: true,
      interval: 5000,
      auto: false,
      pauseOnHover: true,
      swap: true
    }
  });

  $(".home-slides").slidesjs({
    width: '960',
    height: '600',
    navigation: false,
    play: {
      active: true,
      interval: 5000,
      auto: true,
      pauseOnHover: true,
      swap: true
    }
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
