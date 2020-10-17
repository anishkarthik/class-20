var f,m
function setup() {
  createCanvas(800,400);
  f=createSprite(400, 200, 50, 50);
  m=createSprite(200, 200, 50, 50);
}

function draw() {
  background(0);  
  m.x=World.mouseX;
  m.y=World.mouseY;
  if(m.x-f.x<m.width/2+f.width/2
    && f.x-m.x<m.width/2+f.width/2
    && m.y-f.y<m.width/2+f.width/2
    && f.y-m.y<m.width/2+f.width/2)
{
  f.shapeColor="red"
  m.shapeColor="red"
}
else {
  f.shapeColor="green"
  m.shapeColor="green"
}
  drawSprites();
}