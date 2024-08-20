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
    slidesToScroll: 3
  });
});
