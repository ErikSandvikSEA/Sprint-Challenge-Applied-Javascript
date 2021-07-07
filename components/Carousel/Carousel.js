/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector('.carousel-container')

const carouselBuilder = () => {
  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const mountain = document.createElement('img')
  const computer = document.createElement('img')
  const trees = document.createElement('img')
  const turntable = document.createElement('img')
  const rightButton = document.createElement('div')

  // carousel.appendChild(leftButton)
  carousel.appendChild(mountain)
  carousel.appendChild(computer)
  carousel.appendChild(trees)
  carousel.appendChild(turntable)
  carousel.appendChild(rightButton)

  carousel.classList.add('carousel')
  // leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')
  mountain.classList.add('show')


  mountain.src = './assets/carousel/mountains.jpeg'
  computer.src = "./assets/carousel/computer.jpeg"
  trees.src = "./assets/carousel/trees.jpeg"
  turntable.src = "./assets/carousel/turntable.jpeg"
  // leftButton.textContent = ' ⇦ '
  rightButton.textContent = ' ⇨ '

  carouselContainer.appendChild(carousel)

  carouselArray = [mountain, computer, trees, turntable]


  let currentIndex = 0
  

  rightButton.addEventListener('click', function () {
    currentIndex++
      carouselArray[currentIndex].classList.add('show')
      if(currentIndex > 0){
        carouselArray[currentIndex - 1].classList.remove('show')
        carouselArray.push(carouselArray[currentIndex -1])
      } 
    })

    // leftButton.addEventListener('click', function () {
    // if(currentIndex !== 0){
    // currentIndex--}
    //   reverseArray[reverseCurrentIndex].classList.add('show')
    //   reverseCurrentIndex--
    //   if(reverseCurrentIndex > 0){
    //     reverseArray[reverseCurrentIndex - 1].classList.remove('show')
    //     reverseArray.push(reverseArray[reverseCurrentIndex -1])
    //   } 
      
    // })
}


carouselBuilder()
