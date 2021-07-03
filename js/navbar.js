$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled ", $(this).scrollTop() > $nav.height());
  });
});

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 0.05) {
        document.getElementById('mainNavbar').classList.add('fixed-top');
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('mainNavbar').classList.remove('fixed-top');
        document.body.style.paddingTop = '0';
      } 
  });
}); 

const hover = (link) => {
  link.style.color = "#EA1C2C";
};

const reset = (link) => {
  link.style.color = "rgb(246, 250, 253)";
};