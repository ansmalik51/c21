var r1,r2
var g1,g2,g3,g4
function setup() {
  createCanvas(1200,800);
 r1 = createSprite(600, 400, 50, 80);
 r2 = createSprite(400, 200, 80, 30);
 g1 = createSprite(200, 100, 50, 50);
 g2 = createSprite(300, 100, 50, 50);
 g3 = createSprite(400, 100, 50, 50);
 g4 = createSprite(500, 100, 50, 50);

g1.shapeColor = "pink"
g2.shapeColor = "pink"
g3.shapeColor = "pink"
g4.shapeColor = "pink"
 

 r1.shapeColor = "red"
 r2.shapeColor = "green"
}

function draw() {
  background(0); 

  r2.x = World.mouseX;
  r2.y = World.mouseY;

 if(isTouching(r2,g3)){
  g3.shapeColor = "blue"
  r2.shapeColor = "orange"
}
else{
g3.shapeColor = "red"
r2.shapeColor = "green"
 }

  drawSprites();
}
function isTouching(ob1,ob2){
  if(ob2.x-ob1.x<ob1.width/2+ob2.width/2
    && ob1.x-ob2.x<ob1.width/2+ob2.width/2
    && ob2.y-ob1.y<ob1.height/2+ob2.height/2
    && ob1.y-ob2.y<ob1.height/2+ob2.height/2){
   return true;
}
else{
  return false
}
}