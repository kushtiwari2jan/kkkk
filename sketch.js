var fairy,fairyImage





function preload()
{
  
  fairyImage = loadAnimation("fairy1.png");

}

function setup()
{
  createCanvas(600,600);
  fairy=createSprite(100,400,40,40);
  fairy.addAnimation(fairyImage);
}


function draw() 
{
  background("black");
  drawSprites();
}
