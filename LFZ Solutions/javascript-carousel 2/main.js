let carouselImg = document.querySelectorAll('.carousel-img')
let carouselDot = document.querySelectorAll('.dot')


let currentImg = 0

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
  currentImg = imgIndex
}

function nextImg(index, length) {
  if (index === length) {
    return 0
  } else {
    return index + 1
  }
}
function previousImg(index, length) {

}

function handleClick(event) {
  if (event.target.matches('.fa-chevron-right')) {
    targetImg(nextImg(currentImg, carouselImg.length - 1))

  }
}

let main = document.querySelector('.main')

main.addEventListener('click', handleClick)
