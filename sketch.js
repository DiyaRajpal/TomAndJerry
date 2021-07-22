var bg;
var ground;

function preload(){
   bg=loadImage("bg.jpg");
}

function setup(){
    createCanvas(1000,650);
    
    ground = createSprite(400,300,1400,20);
    ground.addImage(bg);
    ground.x=ground.width/2;
    
}

function draw(){
    background(0);
    
    ground.velocityX= -2;
    if(ground.x<0){
      ground.x=ground.width/2;
    }
    drawSprites();
}