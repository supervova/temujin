/**
 * -----------------------------------------------------------------------------
 * LOCAL NAVIGATION: SCROLL TO TARGET
 * -----------------------------------------------------------------------------
 */

jQuery(document).ready(($) => {
  $('.menu__link.is-local').click((e) => {
    const target = $(e.currentTarget).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top,
    }, 800);
    return false;
  });
});
