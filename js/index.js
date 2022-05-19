window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

};

function startGame() {

  const myRoad = new Road()
  const myCar = new Car()
  const myBlock1 = new Block()
  const myBlock2 = new Block()


  setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    myRoad.draw();
    myCar.draw();
    myBlock1.createBlock();
    myBlock2.createBlock();


  }, 1000/60);

}

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

//const roadImg = new Image()
// roadImg.src = 'images/road.png'

// //onload is the old way to do, setInterval is better

// roadImg.onload = function(){
// context.drawImage(roadImg, 33, 71)
// }

// setInterval(() => {
// context.drawImage(roadImg, 33, 71)
// }, interval);

class Road {
  constructor(){
    this.roadImg = new Image();
    this.roadImg.src = '../images/road.png';
    this.roadImg.addEventListener('load', () => {
    this.draw()

    })
  }
  draw(){
    context.drawImage(this.roadImg, 0, 0, canvas.width, canvas.height)

  }
}

class Car {
  constructor(){
    this.carImg = new Image();
    this.carImg.src = '../images/car.png';
    this.move()
    this.carImg.addEventListener('load', () => {
      this.draw()
    })
    this.x = 225;
    this.y = 300;
  }
  draw(){
      context.drawImage(this.carImg, this.x, this.y, 100, 150)
  }

  move(){

    window.addEventListener('keydown', (event) => {

      if (event.key === 'ArrowRight'){

        this.x += 50
        this.draw()

      }

      else if (event.key === 'ArrowLeft') {
        this.x -= 50
        this.draw()

      }
    })

  }
  // setInterval(() => {
  //   context.drawImage(carImg,
  //     0,
  //     0,
  //     canvas.width,
  //     canvas.height)
  // }, interval);
}

class Block {
  constructor(){

  this.x = 80;
  this.y = 30;
  this.createBlock()
  }

  createBlock(){

      context.fillStyle = 'brown'
      context.fillRect(this.x, this.y, 160, 30)
  }

}
