var menuOpen = document.querySelector('.js-open_menu');
var menuClose = document.querySelector('.js-close_menu');

document.addEventListener('click', function (event) {
  if (event.target === menuOpen) {
    document.body.classList.add('menu-visible');
  } else if (event.target === menuClose) {
    document.body.classList.remove('menu-visible');
  }


  return event;
});

document.addEventListener('scroll', function (event) {
  var scrollTop = (window.pageYOffset !== undefined) ?
    window.pageYOffset :
    (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if (scrollTop === 0 && document.body.classList.contains('js-scrolled')) {
    document.body.classList.remove('js-scrolled')
  } else if (!document.body.classList.contains('js-scrolled')) {
    document.body.classList.add('js-scrolled');
  }

  return event;
});