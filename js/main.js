$(document).ready(function() {

  $('.scrollto a').on('click', function scroll(e) {
		e.preventDefault();
		let href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, {
			duration: 370,
			easing: "linear"
		});
		return false;
	});
  
  /* Popup form*/

$('.similar__box__items__btn').click(function (e) {
    e.preventDefault();
    let price = $(this).siblings(".similar__box__items__price").text();
    let titleproduct = $(this).siblings(".similar__box__items__none").text();
    $("#modaltitle").val(titleproduct);
    $("#modalprice").val(price);
    $( ".orderoneclick" ).addClass('open');
});
$('.box__sidebar__btn').click(function (e) {
    e.preventDefault();
    let title = $(this).siblings(".box__sidebar__title").text();
    $("input:hidden").val(title);
    $( ".consultation" ).addClass('open');
});

$('.cart__desc__btn').click(function (e) {
  e.preventDefault();
  $( ".productoneclick" ).addClass('open');
});

$('.rating__video--one').click(function (e) {
    e.preventDefault();
    $( ".video--one" ).addClass('open');
});

$('.rating__video--two').click(function (e) {
  e.preventDefault();
  $( ".video--two" ).addClass('open');
});

$('.popup__header_close').click(function (e) {
    e.preventDefault();
    $( ".popup" ).removeClass('open');
});

$('.popup__area').click(function (e) {
  e.preventDefault();
  $( ".popup" ).removeClass('open');
});

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