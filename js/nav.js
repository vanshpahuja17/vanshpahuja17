$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled ", $(this).scrollTop() > $nav.height());
  });
});

$(document).ready(function () {
  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    var topDist = $("#container").position();
    if (scroll > topDist.top) {
      $("nav").css({ position: "fixed", top: "0" });
    } else {
      $("nav").css({ position: "static", top: "auto" });
    }
  });
});

const hover = (link) => {
  link.style.color = "#EA1C2C";
};

const reset = (link) => {
  link.style.color = "#5a5858";
};