var caixa;
function setup() {
  createCanvas(1000,500);
  caixa=createSprite(500,250,20,30)
  
}

function draw() 
{
  background("white");
drawSprites()
if(keyDown("up")){
  caixa.y=caixa.y-3
  background("blue")
}
if(keyDown("down")){

  background("yellow")
}
if(keyDown("right")){

  background("black")
}
if(keyDown("left")){

  background("green")
}
}




