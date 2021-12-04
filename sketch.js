var backgroundImg,boyImg1,boyImg2,boyImg3;

function preload() {
  backgroundImg = loadImage("./images/bg-1.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
}



function draw() {
  background(backgroundImg);  
  drawSprites();
}