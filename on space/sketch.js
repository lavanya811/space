var  bg ;
var  astronaut, astronautImage;
var brush , gym , eat , bath  , move , sleep ;


function preload(){
bgImage = loadImage("images/iss.png");
astronautImage = loadImage("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation ("images/gym1.png","images/gym2.png");
eat = loadAnimation("images/eat1.png","images/eat2.png");
bath = loadAnimation("images/bath1.png","images/bath2.png");
move= loadAnimation("images/move.png","images/move1.png");

}


function setup() {
  
createCanvas(400, 400);

bg = createSprite(200,200);
bg.addImage(bgImage)
bg.scale = 0.1;

astronaut = createSprite(200,200);
astronaut.addImage(astronautImage);
astronaut.scale = 0.07;

}




function draw() {
background(220);

drawSprites(); 

textSize(12);
fill("white");
text("instructions:",5,55)
textSize(12);
text("Up Arrow = Brushing",5,70);
text("Down Arrow = Gymming",5,85);
text("Left Arrow = Eating",5,100);
text("Right Arrow = Bathing",5,115);
text("m = Moving",5,130);


edges = createEdgeSprites();
astronaut.bounceOff(edges);


if(keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing");
astronaut.y = 250;
astronaut.velocityX = 0;
astronaut.velocityY = 0 ; }

if(keyDown("DOWN_ARROW")){
astronaut.addAnimation("Gymming",gym);
astronaut.changeAnimation("Gymming");
astronaut.y = 250;
astronaut.velocityX = 0;
astronaut.velocityY = 0 ; }

if(keyDown("LEFT_ARROW")){
astronaut.addAnimation("Eating",eat);
astronaut.changeAnimation("Eating");
astronaut.y = 250;
astronaut.velocityX = 0;
astronaut.velocityY = 0 ; }

if(keyDown("RIGHT_ARROW")){
astronaut.addAnimation("Bathing",bath);
astronaut.changeAnimation("Bathing");
astronaut.y = 250;
astronaut.velocityX = 0;
astronaut.velocityY = 0 ; }

if(keyDown("m")){
astronaut.addAnimation("Moving",move);
astronaut.changeAnimation("moving");
astronaut.velocityX = 1;
astronaut.velocityY = 1; }


}







