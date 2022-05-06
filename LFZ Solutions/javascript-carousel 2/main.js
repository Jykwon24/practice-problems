let carouselImg = document.querySelectorAll('.carousel-img')
let carouselDot = document.querySelectorAll('.dot')


let currentImage = 0
let timerId;

function autoPlay() {
  clearTimeout(timerId)
  timerId = setTimeout(() => {
    let currentSlide = nextImg(currentImage, carouselImg.length - 1)
    targetImg(currentSlide)
  }, 3000)
}

function targetImg(imgIndex) {
  for (var i = 0; i < carouselImg.length; i++) {
    if (i === imgIndex) {
      carouselImg[i].className = 'carousel-img'
      carouselDot[i].className = 'fas fa-circle'
    } else {
      carouselImg[i].className = 'carousel-img hidden'
      carouselDot[i].className = 'far fa-circle'
    }
  }
  currentImage = imgIndex
  autoPlay()
}

function nextImg(index, length) {
  if (index === length) {
    return 0
  } else {
    return index + 1
  }
}

function previousImg(index, length) {
  if (index === 0) {
    return length
  } else {
    return index - 1
  }
}

function handleClick(event) {
  if (event.target.matches('.fa-chevron-right')) {
    targetImg(nextImg(currentImage, carouselImg.length - 1))
    return
  }
  if (event.target.matches('.fa-chevron-left')) {
    targetImg(previousImg(currentImage, carouselImg.length - 1))
    return
  }
}

let main = document.querySelector('.main')

main.addEventListener('click', handleClick)

autoPlay()
