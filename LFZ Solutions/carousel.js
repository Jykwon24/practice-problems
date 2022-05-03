var $carouselImages = document.querySelectorAll('.carousel-image');
var $progressDots = document.querySelectorAll('.carousel-progress > .fa-circle');

var timerId;
var currentIndex = 0;

function activateIndex(targetIndex) {
  for (var i = 0; i < $carouselImages.length; i++) {
    if (i === targetIndex) {
      $carouselImages[i].className = 'carousel-image';
      $progressDots[i].className = 'fas fa-circle';
    } else {
      $carouselImages[i].className = 'carousel-image hidden';
      $progressDots[i].className = 'far fa-circle';
    }
  }
  currentIndex = targetIndex;
  autoPlay();
}

function autoPlay() {
  clearTimeout(timerId);
  timerId = setTimeout(function () {
    var nextIndex = getNextIndex(currentIndex, $carouselImages.length - 1);
    activateIndex(nextIndex);
  }, 3000);
}

function getNextIndex(index, limit) {
  if (index === limit) {
    return 0;
  } else {
    return index + 1;
  }
}

function getPreviousIndex(index, length) {
  if (index === 0) {
    return length - 1;
  } else {
    return index - 1;
  }
}

function handleClick(event) {

  if (event.target.matches('.previous')) {
    activateIndex(getPreviousIndex(currentIndex, $carouselImages.length - 1));
    return;
  }

  if (event.target.matches('.next')) {
    activateIndex(getNextIndex(currentIndex, $carouselImages.length - 1));
    return;
  }

  if (!event.target.matches('.fa-circle')) {
    return;
  }

  for (var i = 0; i < $progressDots.length; i++) {
    if (event.target === $progressDots[i]) {
      activateIndex(i);
      break;
    }
  }
}

var $carouselContainer = document.querySelector('.carousel-container');
$carouselContainer.addEventListener('click', handleClick);

autoPlay();
