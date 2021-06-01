var cursor = $(".custom-cursor"),
  follower = $(".cursor-follower"),
  projvideo = $(".control-vid");

var posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    TweenMax.set(follower, {
      css: {
        left: posX - 20,
        top: posY - 20
      }
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX - 25,
        top: mouseY - 35
      }
    });
  }
});

$(document).on("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

$(".cursor-active").on("mouseenter", function () {
  follower.addClass("active");
});

$(".cursor-active").on("mouseleave", function () {
  follower.removeClass("active");
});

// $(".control-vid").on("mouseenter", function () {
//   projvideo.play();
//   follower.addClass("active");
// });
// $(".control-vid").on("mouseleave", function () {
//   projvideo.pause();
//   follower.removeClass("active");
// });