var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor ="blue";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "red";
  console.log(movingRect.x - fixedRect.x);
  console.log(fixedRect.width/2 + movingRect.width/2);
}

function draw() {
  background(0);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2
  && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "pink";

}else{
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "blue";

}


  
  drawSprites();



}