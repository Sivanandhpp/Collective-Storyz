var cursor = $(".custom-cursor"),
  follower = $(".cursor-follower");

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
        left: posX - 50,
        top: posY - 50
      }
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX - 28,
        top: mouseY -30
      }
    });
  }
});

$(document).on("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

$(".active-mouse").on("mouseenter", function () {
  cursor.addClass("active");
  follower.addClass("active");
});

$(".active-mouse").on("mouseleave", function () {
  cursor.removeClass("active");
  follower.removeClass("active");
});
