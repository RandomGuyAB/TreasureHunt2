var bgImg;
var player, player_anim;
var enemy_anim;
var ground;
var score=0;
var gameState = "play";



function preload(){
bgImg = loadImage("background.jpg");
player_anim = loadAnimation("player.png", "playerwalking.png")
enemy_anim = loadAnimation("enemy-walk (2).png", "enemy-walk (3).png", "enemy-walk (4).png", "enemy-walk (5).png", "enemy-walk (6).png", "enemy-walk (7).png", "enemy-walk (8).png");

}

function setup(){
    createCanvas(windowWidth, windowHeight);
    player = createSprite(50, height-50, 10,10)
    player.addAnimation("run", player_anim);

    ground = createSprite(width/2, height, width, 40);
    ground.shapeColor = "blue";
    enemyGroup = new Group();
    player.setCollider("rectangle", 0,0,200,500)
    
}

function draw(){
    background(bgImg);
    fill("white");
    player.collide(ground);
    if(frameCount %80===0){
        spawnEnemy();
    }
    drawSprites();
}

function spawnEnemy(){
    var enemy = createSprite(width, height-60, 10,10);
    enemy.addAnimation("walk", enemy_anim);
    enemy.velocityX=-5;
    enemy.lifetime = width/4;
    enemy.scale=0.13;
    enemyGroup.add(enemy);

}