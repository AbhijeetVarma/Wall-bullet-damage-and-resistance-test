
var bullet, wall
var speed, weight , thickness


var damage  




   



function setup() {
  createCanvas(800,400);

  speed = random(55,90);
   weight = random(400,1500);
thickness = random(22,83);

   bullet = createSprite(100, 200, 70, 30);
   wall = createSprite(700,200,thickness,height/2);
   bullet.velocityX = speed
bullet.shapeColor = "white"
wall.shapeColor = "white"

   
}

function draw() {
  background(0,0,0);  
  drawSprites();

  if( touch(wall,bullet)){
    bullet.velocityX = 0
    damage = (0.5* weight * speed * speed) / (thickness*thickness*thickness);
  
    if(damage < 10){
      
      bullet.shapeColor = color(0,225,0)
      
    }
    if(damage>10){

      bullet.shapeColor = color(225,0,0);

    }
   
      

  }

  
}



