var fixedRect,movingRect;
var gameObject1 ,gameObject2 , gameObject3, gameObject4;
var car;

function setup()
{
  createCanvas(1200,800);
  fixedRect =createSprite(600,400,50,80);
  fixedRect.shapeColor ="blue";
  movingRect =createSprite(800,400,80,30);
  movingRect.shapeColor ="blue";

gameObject1= createSprite(100,100,50,50);
gameObject1.shapeColor="green";
gameObject2= createSprite(800,200,30,80);
gameObject2.shapeColor="green";
gameObject3=createSprite(300,100,50,50);
gameObject3.shapeColor="green";
gameObject4=createSprite(400,100,50,50);
gameObject4.shapeColor="green";

car =createSprite(200,200,30,30);
car.shapeColor="yellow";
car.velocityX=4;
}

  
function draw()
{
  background(0);
  console.log(movingRect.x - fixedRect.x);
  movingRect.x =World.mouseX;
  movingRect.y =World.mouseY;

  if(isTouching(movingRect,gameObject1))
  {
    movingRect.shapeColor ="pink";
    gameObject1.shapeColor ="pink";
  }
  else
  {
    movingRect.shapeColor ="blue";
    gameObject1.shapeColor ="blue";
  }

  bounceOff(car,gameObject2);

  
  drawSprites();
}
