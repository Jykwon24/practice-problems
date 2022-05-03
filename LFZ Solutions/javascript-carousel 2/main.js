let carouselImg = document.querySelectorAll('.carousel-img')
let carouselDot = document.querySelectorAll('.dot')


let currentImage = 0

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
