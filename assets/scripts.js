// The Modal
$(".modal").on("click", function (e) {
  $("#myModal").toggleClass("is-hidden");
  e.preventDefault();
  e.stopPropagation();
  return false;
});
// End The Modal

// Slider
jQuery(document).ready(function ($) {
  setInterval(function () {
    moveRight();
  }, 3000);

  var slideCount = $("#slider .eminent__slider img").length;
  var slideWidth = $("#slider .eminent__slider img").width();
  var slideHeight = $("#slider .eminent__slider img").height();
  var sliderUlWidth = slideCount * slideWidth;

  $("#slider").css({ width: slideWidth, height: slideHeight });

  $("#slider .eminent__slider").css({ width: sliderUlWidth, marginLeft: -slideWidth });

  $("#slider .eminent__slider img:last-child").prependTo("#slider .eminent__slider");

  function moveLeft() {
    $("#slider .eminent__slider").animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $("#slider .eminent__slider img:last-child").prependTo("#slider .eminent__slider");
        $("#slider .eminent__slider").css("left", "");
      }
    );
  }

  function moveRight() {
    $("#slider .eminent__slider").animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $("#slider .eminent__slider img:first-child").appendTo("#slider .eminent__slider");
        $("#slider .eminent__slider").css("left", "");
      }
    );
  }
});
// End Slider

// Slick
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
          dots: true,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});
// End Slick

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
