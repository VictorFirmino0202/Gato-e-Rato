var fundotela; 
var gato, ing1, ing2, ing3;
var rato, img1, img2, img3;

function preload() {
    //load the images here
    fundotela = loadImage ("images/garden.png");
    ing1 = loadAnimation ("images/cat1.png");
    ing2 = loadAnimation ("images/cat2.png", "images/cat3.png");
    ing3 = loadAnimation ("images/cat4.png");

    img1 = loadAnimation ("images/mouse1.png");
    img2 = loadAnimation ("images/mouse2.png", "images/mouse3.png");
    img3 = loadAnimation ("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    gato = createSprite (870, 600);
    gato.addAnimation ("GatoParado", ing1);
    gato.scale = 0.2;

    rato = createSprite (200, 600);
    rato.addAnimation ("RatoParado", img1);
    rato.scale = 0.15;

}

function draw() {

    background(fundotela);
    //Write condition here to evalute if tom and jerry collide
    if(gato.x - rato.x < (gato.width - rato.width)/2){
        gato.velocityX = 0;
        gato.addAnimation ("gatoFinal", ing3);
        gato.changeAnimation ("gatoFinal");
        gato.x = 300;
        gato.scale = 0.2;

        rato.addAnimation ("ratoFinal", img3);
        rato.changeAnimation ("ratoFinal");
        rato.scale = 0.15;
    }

    drawSprites();
}


function keyPressed(){

    if (keyCode == LEFT_ARROW){
        gato.addAnimation ("GatoAndando", ing2);
        gato.changeAnimation ("GatoAndando");
        gato.velocityX = -5;

        rato.addAnimation ("RatoAndando", img2);
        rato.changeAnimation ("RatoAndando");
        rato.frameDelay = 25;
    }

    

  //For moving and changing animation write code here


}
