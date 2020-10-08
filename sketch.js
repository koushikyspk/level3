var screen;
var shuttle;
var enemy1,enemy2,enemy3,enemy4;
var shuttlelife=0;
var enemy1life=0;
var enemy2life=0;
var enemy3life=0;
var enemy4life=0;
var edges;
var gameState="play";

var enemybullet; 
var playerbullet;
var bag,enemy,player;


  

function preload(){
bag=loadImage("bag.jpg")
enemy=loadImage("picture2.png")
player=loadImage("picture1.png")
}

function setup() {
  createCanvas(1200,800);
  createSprite(400, 200, 50, 50);
  screen = createSprite(600, 400,1200,800);
   screen.addImage(bag)
   screen.scale=1.5;
   shuttle = createSprite(600,700,10,10);
   shuttle.scale=0.25;
  shuttle.addImage(player)
  enemy1 = createSprite(700, 120,10,10);
  enemy1.scale=0.2;
  enemy1.addImage(enemy)

  enemy2 = createSprite(296, 200,10,10);
  enemy2.scale=0.2;
  enemy2.addImage(enemy)

  enemy3= createSprite(296, 200,10,10);
  enemy3.scale=0.2;
  enemy3.addImage(enemy)

  enemy4= createSprite(300, 300,10,10);
  enemy4.scale=0.2;
  enemy4.addImage(enemy)

  enemybullet=new Group();
  playerbullet=new Group();
  enemy1.velocityX=4;
  enemy2.velocityX=-4;
  enemy3.velocityX=4;
  enemy4.velocityX=-4;
  
}

function draw() {
  background(0);  
  drawSprites();
  if (gameState==="play") {
    shuttle.x=World.mouseX;
     if (keyWentUp("space")) {
   laser();
 }
 if (playerbullet.collide(enemy1)) {
   enemy1life=enemy1life+1;
   playerbullet.destroyEach();
   enemybullet.destroyEach();
 }
 if (playerbullet.collide(enemy2)) {
   enemy2life=enemy2life+1;
    playerbullet.destroyEach();
     enemybullet.destroyEach();
 }
 if (playerbullet.collide(enemy3)) {
  enemy3life=enemy3life+1;
   playerbullet.destroyEach();
    enemybullet.destroyEach();
}
if (playerbullet.collide(enemy4)) {
  enemy4life=enemy4life+1;
   playerbullet.destroyEach();
    enemybullet.destroyEach();
}
 if (enemybullet.collide(shuttle)) {
   shuttlelife=shuttlelife+1;
     playerbullet.destroyEach();
     enemybullet.destroyEach();
 }
  if (enemy1life===10) {
   enemy1.destroy();
 }
 if (enemy2life===10) {
   enemy2.destroy();
 }
 if (enemy3life===10) {
  enemy3.destroy(); 
}
if (enemy4life===10) {
  enemy4.destroy(); 
}
 if (shuttlelife===10) {
   shuttle.destroy();

   gameState="end";

  
   
 }
 if (enemy1life===10&&enemy2life===10&&enemy3life===10&&enemy4life===10) {
   gameState="end";
   //gameState="end";
 }
 
 enemy2laser();
 enemy1laser();
 enemy3laser();
 enemy4laser();

 
 }
 else if(gameState==="end"){
 enemy1.velocityX=0;
 enemy2.velocityX=0;
 enemy3.velocityX=0;
 enemy4.velocityX=0;
 textSize(25);
 fill("red");
 textStyle(BOLD);
  text("GAMEOVER", 140, 201);
  
 }
 
 edges=createEdgeSprites();
 enemy1.bounceOff(edges);
 enemy2.bounceOff(edges);
 enemy3.bounceOff(edges);
 enemy4.bounceOff(edges);
 
 console.log(enemy1life);
 

 
 
}
function laser(){
  var laser = createSprite(200, 316,5,20);
  laser.x=shuttle.x;
  laser.velocityY=-10;
  laser.shapeColor="lightblue";
  laser.lifetime=200;
  playerbullet.add(laser);
  }
  function enemy1laser(){
    if (World.frameCount%40===0) {
    var laser1 = createSprite(200, 109,5,20);
    laser1.x=enemy1.x;
    laser1.velocityY=10;
    laser1.shapeColor="red";
     enemybullet.add(laser1);                        
      
    }
    
  }
  function enemy2laser(){
    if (World.frameCount%40===0) {
    var laser2 = createSprite(200, 105,5,20);
    laser2.x=enemy2.x;
    laser2.velocityY=10;
    laser2.shapeColor="red";
      enemybullet.add(laser2);
    }
    
  }
  function enemy3laser(){
    if (World.frameCount%100===0) {
    var laser3 = createSprite(200, 136,5,20);
    laser3.x=enemy3.x;
    laser3.velocityY=10;
    laser3.shapeColor="red";
        enemybullet.add(laser3);  
        
    }
    
  }
  function enemy4laser(){
    if (World.frameCount%100===0) {
    var laser4 = createSprite(200, 136,5,20);
    laser4.x=enemy4.x;
    laser4.velocityY=10;
    laser4.shapeColor="red";
        enemybullet.add(laser4);  
        
    }
    
  }
  

