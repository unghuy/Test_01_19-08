jQuery(document).ready(function ($) {
  setInterval(function () {
    moveRight();
  }, 3000);

  var slideCount = $("#slider .slider img").length;
  var slideWidth = $("#slider .slider img").width();
  var slideHeight = $("#slider .slider img").height();
  var sliderUlWidth = slideCount * slideWidth;

  $("#slider").css({ width: slideWidth, height: slideHeight });

  $("#slider .slider").css({ width: sliderUlWidth, marginLeft: -slideWidth });

  $("#slider .slider img:last-child").prependTo("#slider .slider");

  function moveLeft() {
    $("#slider .slider").animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $("#slider .slider img:last-child").prependTo("#slider .slider");
        $("#slider .slider").css("left", "");
      }
    );
  }

  function moveRight() {
    $("#slider .slider").animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $("#slider .slider img:first-child").appendTo("#slider .slider");
        $("#slider .slider").css("left", "");
      }
    );
  }
});

$(document).ready(function () {
  $(".discount__slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });
});

// Menu Mobile
// TOGGLE HAMBURGER & COLLAPSE NAV
$(".nav-toggle").on("click", function () {
  $(this).toggleClass("open");
  $(".menu").toggleClass("collapse");
});
// REMOVE X & COLLAPSE NAV ON ON CLICK
$(".menu .menu__link").on("click", function () {
  $(".nav-toggle").removeClass("open");
  $(".menu").removeClass("collapse");
});
