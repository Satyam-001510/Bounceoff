var fixedRect, movingRect, Object1, Object2, Object3, Object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  Object1 = createSprite(200,400,20,20);
  Object1.shapeColor = "yellow"
  
  Object2 = createSprite(500,100,20,20);
  Object2.shapeColor = "orange"

  Object3 = createSprite(400,300,20,20);
  Object3.shapeColor = "pink"

  Object4 = createSprite(200,100,20,20);
  Object4.shapeColor = "white"
 

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  isTouching(movingRect,Object3)
;  drawSprites();
}
function isTouching(object1,object2){
  if ( object2.x- object1.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2) {
      object2.shapeColor = "red";
      object1.shapeColor = "red";
}
else {
  object2.shapeColor = "green";
  object1.shapeColor = "green";
}

}



function bounceOff(object1,object2){
  if ( object2.x- object1.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2
    ) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if(object2.y - object1.y < object1.height/2 + object2.height/2
  && object1.y - object2.y < object1.height/2 + object2.height/2) {
  object2.velocityY = object2.velocityY * (-1);
  object1.velocityX = object2.velocityX * (-1);
}

}