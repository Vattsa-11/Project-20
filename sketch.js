var car;
var wall;
var speed;
var weight;



function setup() {
  createCanvas(1000,400);
 
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(900,200,60,height/2);
  wall.shapeColor = rgb(80,80,80);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

}

function draw() {
  background(0,0,0);  

  car.velocityX = speed;
  car.depth = wall.depth;
  car.depth = car.depth + 1;
 
  if (wall.x-car.x <car.width/2 + wall.width/2) {
  
    car.velocityX = 0;
    var deformation = Math.round((0.5*weight*speed*speed)/22509);

    if(deformation>180){
      car.shapeColor = "red";     
    }
    if (deformation < 180 && deformation > 100) {
      car.shapeColor = "yellow";
    }
    if (deformation < 100) {
      car.shapeColor = "green";
    }

    fill("white");
    text("deformation  = " + deformation,100,20);

  }
  
  drawSprites();

}