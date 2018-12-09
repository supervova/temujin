/**
 * -----------------------------------------------------------------------------
 * CAROUSEL
 * -----------------------------------------------------------------------------
 */

jQuery(document).ready(($) => {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });

  $('.slick-next').text('следующая');
  $('.slick-prev').text('предыдущая');

  $('.to-big').click((e) => {
    const src = $(e.currentTarget).attr('href');
    $('.img-full-container .img-full').attr('src', src);
    return false;
  });
});

