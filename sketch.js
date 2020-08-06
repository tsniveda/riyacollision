var fixedRect, movingRect;

function setup() {
  createCanvas(800,600);

  fixedRect = createSprite(300, 300, 100, 50);
  fixedRect.debug = true;

  movingRect = createSprite(400, 100, 80, 30);
  movingRect.debug = true;

}

function draw() {
  background(0);  

  movingRect.y = mouseY;
  movingRect.x = mouseX;

  text ( movingRect.x - fixedRect.x, 100, 100 );
  text ( fixedRect.width/2 + movingRect.width/2 , 100, 130 );
  text ( fixedRect.x - movingRect.x, 100, 160);

  if( movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2  ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } else { 
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}