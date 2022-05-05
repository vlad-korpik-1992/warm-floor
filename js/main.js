$(document).ready(function() {

  $('.cart__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.cart__sliderprev'
  });
  $('.cart__sliderprev').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.cart__slider',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 4,
          centerMode: false
        }
      },
      {
        breakpoint: 424,
        settings: {
          dots: false,
          slidesToShow: 3,
          centerMode: false
        }
      },
      {
        breakpoint: 374,
        settings: {
          dots: false,
          slidesToShow: 2,
          centerMode: false
        }
      }
    ]
  });

  $('.tabs__box__tab').click(function (e) {
    e.preventDefault();
    let elem = e.target;
    let id = '1' + elem.getAttribute('id');
    $('.tabs__box__content').removeClass('tabs__box__content_active');
    $('.tabs__box__tab').removeClass('tabs__box__tab_active');
    jQuery("#"+id).addClass('tabs__box__content_active');
    let idElem = elem.getAttribute('id');
    console.log(idElem);
    jQuery("#"+idElem).addClass('tabs__box__tab_active');
  });

});