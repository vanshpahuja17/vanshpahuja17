
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}



// fake loader
let progress = 0;
const fakeLoaderInterval = window.setInterval(function() {
  const $lp = $('.loading-progress');
  progress = progress + getRandomArbitrary(10, 25)
  $lp.css('transform', `translateX(${progress}%)`);

  if (progress >= 75) {
    window.clearInterval(fakeLoaderInterval);
    $lp.css('transform', 'translateX(100%)');
    setTimeout(() => $('.loading').css('transform', 'translateY(calc(100% + 10px))'), 400);
  }
}, getRandomArbitrary(100, 500));

