var cat,mou;
function setup() {
  createCanvas(1200,800);
  cat=createSprite(600, 500, 50, 50);
  cat.shapeColor="grey"
  cat.velocityY=-3
  mou=createSprite(600, 100, 70, 30);
  mou.shapeColor="yellow"
  //mou.velocityY=-3
}
function draw() {
  background(40,50,100);  
  //mou.x=World.mouseX
  //mou.y=World.mouseY
  if(cat.x-mou.x<cat.width/2+mou.width/2&&
    mou.x-cat.x<cat.width/2+mou.width/2){
      mou.velocityX=mou.velocityX*(-1)
      cat.velocityX=cat.velocityX*(-1)

    //cat.shapeColor="yellow"
    //mou.shapeColor="yellow"
  }
if(cat.y-mou.y<cat.height/2+mou.height/2&&
  mou.y-cat.y<cat.height/2+mou.height/2){
    mou.velocityY=mou.velocityY*(-1)
  cat.velocityY=cat.velocityY*(-1)
}

  drawSprites();
}