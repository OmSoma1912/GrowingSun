var sun;
var mercury;
var venus;
var earth;
var mars;
var jupiter;
var saturn;
var uranus;
var neptune;

function setup() {
  createCanvas(1300,800);           

  sun = createSprite(100,400,200,200);                   
  sun.shapeColor = "yellow";      
  
  mercury = createSprite(300,400,10,10);
  mercury.shapeColor = "white";
  
  venus = createSprite(350,400,50,50);
  venus.shapeColor = "#ff5050";

  earth = createSprite(450,400,50,50);
  earth.shapeColor = "blue";

  mars = createSprite(550,400,20,20);
  mars.shapeColor = "red";

  jupiter = createSprite(700,400,100,100);
  jupiter.shapeColor = "orange";    

  saturn = createSprite(900,400,85,85);
  saturn.shapeColor = "#ffcc66";

  uranus = createSprite(1100,400,75,75);
  uranus.shapeColor = "#4dd2ff";

  neptune = createSprite(1300,400,75,75);
  neptune.shapeColor = "#0066ff";

}

function draw() {
  background(0,0,0); 

  //neptune orbital
  stroke("white");
  fill("black");
  ellipse(100,400,2400,1000); 

  //uranus orbital
  stroke("white");
  fill("black");
  ellipse(100,400,2000,900); 

  //saturn orbital
  stroke("white");
  fill("black");
  ellipse(100,400,1600,800); 

  //jupiter orbital
  stroke("white");
  fill("black");
  ellipse(100,400,1200,700); 

  //mars orbital
  stroke("white");
  fill("black");
  ellipse(100,400,900,600); 

  //earth orbital
  stroke("white");
  fill("black");
  ellipse(100,400,700,500); 
  
  //venus orbital
  stroke("white");
  fill("black");
  ellipse(100,400,500,400); 
  
  //mercury orbital
  stroke("white");
  fill("black");
  ellipse(100,400,400,300);  

  

  if(sun.isTouching(mercury)){
    mercury.destroy();
  }

  if(sun.isTouching(venus)){
    venus.destroy();
  }

  if(sun.isTouching(earth)){
    earth.destroy();
  }

  if(sun.isTouching(mars)){
    mars.destroy();
  }

  if(sun.isTouching(jupiter)){
    jupiter.destroy();
  }

  if(sun.isTouching(saturn)){
    saturn.destroy();
  }

  if(sun.isTouching(uranus)){
    uranus.destroy();
  }

  if(sun.isTouching(neptune)){
    neptune.destroy();
  }

  if(sun.width > 800 && sun.height > 800){
    sun.shapeColor = "orange";
  }

  if(sun.width > 1200 && sun.height > 1200){
    sun.shapeColor = "red";
  }

  if(sun.width > 1600 && sun.height > 1600){
    sun.shapeColor = "white";
  }

  if (frameCount % 1 === 0){
    sun.width = sun.width + 3;
    sun.height = sun.height + 3;
  }

  drawSprites();
}