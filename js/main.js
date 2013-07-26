document.onkeyup = function(evt) {  //ceci est le key listener qui écoute les actions du clavier
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 37:
            frog.deplacerGauche();
            break;
        case 38:
            frog.deplacerAvant();
            break;
        case 39:
            frog.deplacerDroite();
            break;
        case 40:
            frog.deplacerArriere();
            break;
    }
};

window.onload = function(e){
    init();  //quand la page principale a chargé on appelle la fonction init(); qui lance le jeux
}
function setTimer(){
    //pour éviter que les touches appuyés auparavant soit prises en compte
    frog.nextTop=frog.top;
    frog.nextLeft=frog.left;
    timer1=setInterval("draw()",25);
}
function afficherMessage(message,color){ //affiche le message passé en paramètre
    gameBoardContext.save();
    gameBoardContext.clearRect(0, 0, gameBoardCanvas.width, gameBoardCanvas.height);
    gameBoardContext.fillStyle = color;
    gameBoardContext.font = "bold 40px Arial";
    gameBoardContext.fillText(message, 170, 270)
    gameBoardContext.fillStyle = "black";
    //gameBoardContext.fillRect (125, 225, 400, 100);
    gameBoardContext.fillRect (0, 0, gameBoardCanvas.width, gameBoardCanvas.height);
    gameBoardContext.restore();
}
function gagne(){
    //on supprime le timer
    window.clearInterval(timer1);
    window.clearInterval(timer2);
    alert("vous avez gagné!");
}

function perdu(){
    //on supprime le timer
    window.clearInterval(timer1);
    window.clearInterval(timer2);
    alert("vous avez perdu!");
}

function reInitFrogPosition(){  //réinitialisation de la position de frog (quand frog est mort ou arrivé sur un nénuphar)
    tempsRestant=60;
    frog.top=455-62;
    frog.left=312;
    frog.nextTop=455-62;
    frog.nextLeft=312;
    frog.orientation="avant";
}



function frogArrive(){  //on appelle cette fonction quand frog est arrivé sur un nénuphar
    //on repositionne Frog au début
    window.clearInterval(timer1);
    reInitFrogPosition();
    afficherMessage("frog est arrivé","green");
    setTimeout("setTimer()",2000);

}

function drawFrogLifes(gameBoardContext){ //cette fonction affiche le nombre de vies restantes
    for(var i=0;i<frog.lifes;i++){
        frogImage=new Image();
        frogImage.src="img/frog-avant.png";
        gameBoardContext.drawImage(frogImage,i*30,485-62);
    }
}

function drawTempsRestant(gameBoardContext){  //cette fonction affiche le temps restant sous la forme d'une barre verte
    gameBoardContext.fillStyle = "yellow";
    gameBoardContext.font = "bold 22px Arial";
    gameBoardContext.fillText("TIME", 590, 437)
    gameBoardContext.fillStyle = "green";
    //gameBoardContext.fillRect (125, 225, 400, 100);
    gameBoardContext.fillRect (400+((60-tempsRestant)*3), 420, tempsRestant*3, 20);
}
function decTempsRestant(){
    if(tempsRestant)
    {
        tempsRestant--;
    }
    else
        frog.kill();
}
function init(){
  tempsRestant=60;
  frogImg=new Array();
  frogImg["avant"] = new Image();
  frogImg["arriere"] = new Image();
  frogImg["gauche"] = new Image();
  frogImg["droite"] = new Image();
  plateauImg = new Image();
  plateauImg.src = 'img/plateau.png';
  frogImg["avant"].src = 'img/frog-avant.png';
  frogImg["arriere"].src = 'img/frog-arriere.png';
  frogImg["gauche"].src = 'img/frog-gauche.png';
  frogImg["droite"].src = 'img/frog-droite.png';
  

  frog=new Frog(455-62,312,455,312,2); //top,left,nextTop,nextLeft,lifes
  
  voitures=new Array();
  flotteurs=new Array();
  arrives=new Array();
  
  //instanciation des voitures
  voitures[0]=new Voiture(325-62,40,28,32,"img/voiture1.png","r",4); //top,left,height,width,imageSrc,direction,incrementation
  voitures[1]=new Voiture(297-62,200,20,54,"img/camion1.png","l",2);
  voitures[2]=new Voiture(297-62,350,20,54,"img/camion1.png","l",2);
  voitures[3]=new Voiture(360-62,75,20,30,"img/voiture2.png","l",3);
  voitures[4]=new Voiture(360-62,200,20,30,"img/voiture2.png","l",3);
  voitures[5]=new Voiture(360-62,420,20,30,"img/voiture2.png","l",3);
  voitures[6]=new Voiture(390-62,470,24,28,"img/voiture3.png","r",3);
  voitures[7]=new Voiture(390-62,20,24,28,"img/voiture3.png","r",3);
  voitures[8]=new Voiture(390-62,170,24,28,"img/voiture3.png","r",3);
  voitures[9]=new Voiture(418-62,-10,28,32,"img/voiture4.png","l",4);
  voitures[10]=new Voiture(418-62,200,28,32,"img/voiture4.png","l",4);
  voitures[11]=new Voiture(418-62,200,28,32,"img/voiture4.png","l",4);
  voitures[12]=new Voiture(325-62,400,28,32,"img/voiture1.png","r",4);
  voitures[13]=new Voiture(297-62,-50,20,54,"img/camion1.png","l",2);
  voitures[14]=new Voiture(360-62,-50,20,30,"img/voiture2.png","l",3);
  voitures[15]=new Voiture(297-62,500,20,54,"img/camion1.png","l",2);
  
  //instanciation des barques
  flotteurs[0]=new Flotteur(101-62,40,20,116,"r",3,"img/tronc-moyen.png");  //top,left,height,width,direction,incrementation,imageScr
  flotteurs[1]=new Flotteur(101-62,200,20,116,"r",3,"img/tronc-moyen.png");
  flotteurs[2]=new Flotteur(101-62,400,20,116,"r",3,"img/tronc-moyen.png");
  flotteurs[3]=new Flotteur(101-62,-150,20,116,"r",3,"img/tronc-moyen.png");
  flotteurs[4]=new Flotteur(131-62,40,22,62,"l",4,"img/2tortues.png");
  flotteurs[5]=new Flotteur(131-62,130,22,62,"l",4,"img/2tortues.png");
  flotteurs[6]=new Flotteur(131-62,300,22,62,"l",4,"img/2tortues.png");
  flotteurs[7]=new Flotteur(131-62,400,22,62,"l",4,"img/2tortues.png");
  flotteurs[8]=new Flotteur(131-62,-200,22,62,"l",4,"img/2tortues.png");
  flotteurs[9]=new Flotteur(131-62,-100,22,62,"l",4,"img/2tortues.png");
  flotteurs[10]=new Flotteur(164-62,-60,20,180,"r",4,"img/tronc-grand.png");
  flotteurs[11]=new Flotteur(164-62,200,20,180,"r",4,"img/tronc-grand.png");
  flotteurs[12]=new Flotteur(164-62,450,20,180,"r",4,"img/tronc-grand.png");
  flotteurs[13]=new Flotteur(228-62,-200,20,84,"r",3,"img/tronc-petit.png");
  flotteurs[14]=new Flotteur(228-62,-50,20,84,"r",3,"img/tronc-petit.png");
  flotteurs[15]=new Flotteur(228-62,100,20,84,"r",3,"img/tronc-petit.png");
  flotteurs[16]=new Flotteur(228-62,250,20,84,"r",3,"img/tronc-petit.png");
  flotteurs[17]=new Flotteur(228-62,400,20,84,"r",3,"img/tronc-petit.png");
  flotteurs[18]=new Flotteur(194-62,-200,20,94,"l",3,"img/3tortues.png");
  flotteurs[19]=new Flotteur(194-62,-60,20,94,"l",3,"img/3tortues.png");
  flotteurs[20]=new Flotteur(194-62,80,20,94,"l",3,"img/3tortues.png");
  flotteurs[21]=new Flotteur(194-62,230,20,94,"l",3,"img/3tortues.png");
  flotteurs[22]=new Flotteur(194-62,380,20,94,"l",3,"img/3tortues.png");
  flotteurs[23]=new Flotteur(194-62,530,20,94,"l",3,"img/3tortues.png");
  flotteurs[24]=new Flotteur(101-62,600,20,116,"r",3,"img/tronc-moyen.png");
  flotteurs[25]=new Flotteur(228-62,550,20,84,"r",3,"img/tronc-petit.png");
  flotteurs[26]=new Flotteur(131-62,500,22,62,"l",4,"img/2tortues.png");

  arrives[0]=new Arrive(60-62,26,40,30); //top,left,width,height
  arrives[1]=new Arrive(60-62,165,40,30);
  arrives[2]=new Arrive(60-62,305,40,30);
  arrives[3]=new Arrive(60-62,444,40,30);
  arrives[4]=new Arrive(60-62,583,40,30);
  
  for(var i in voitures){
    voitures[i].image=new Image();
    voitures[i].image.src=voitures[i].imageSrc;
  }
  
  for(var i in flotteurs){
    flotteurs[i].image=new Image();
    flotteurs[i].image.src=flotteurs[i].imageSrc;
  }
  
  gameBoardCanvas = document.getElementById('gameBoard');
  gameBoardContext = gameBoardCanvas.getContext('2d');
  
  timer2=setInterval("decTempsRestant()",1000);
  setTimer();
  
}

function draw(){

  gameBoardContext.globalCompositeOperation = 'destination-over';
  
  gameBoardContext.save();
  
  gameBoardContext.clearRect(0, 0, gameBoardCanvas.width, gameBoardCanvas.height);
  gameBoardContext.drawImage(frogImg[frog.orientation],frog.left,frog.top);
  
  frog.animer();
  
  for(var i in voitures)  //déplacer les voitures & camions
  {
        gameBoardContext.drawImage(voitures[i].image,voitures[i].left,voitures[i].top);
        voitures[i].deplacer();
        
        //test de colision
        if((frog.left+24)>voitures[i].left && (frog.left)<(voitures[i].left+voitures[i].width)) //collision verticale
        {
            if((frog.top+24)>voitures[i].top && (frog.top)<(voitures[i].top+voitures[i].height)) //collision horizontale
            {
                //si collision alors:
                //frog meurt percuté
                frog.kill();
            }
        }
  }
  
  estSurBarge=0;
  
  for(var i in flotteurs)  //déplacer les troncs & voitures
  {
        gameBoardContext.drawImage(flotteurs[i].image,flotteurs[i].left,flotteurs[i].top);
        flotteurs[i].deplacer();

        
        //test de colision
        if((frog.left+24)>flotteurs[i].left && (frog.left)<(flotteurs[i].left+flotteurs[i].width)) //collision verticale
        {
            if((frog.top+24)>flotteurs[i].top && (frog.top)<(flotteurs[i].top+flotteurs[i].height)) //collision horizontale
            {
                //on déplace frog avec le tronc ou la tortues
                if(flotteurs[i].direction=="r"){
                  frog.left=frog.left+flotteurs[i].incrementation;
                  frog.nextLeft=frog.left;
                }
                else{
                  frog.left=frog.left-flotteurs[i].incrementation;
                  frog.nextLeft=frog.left;
                }
                estSurBarge=1; // on dit qu'il y a eu collision
            }
        }

  }
  
  if(!estSurBarge) //s'il n'y a pas eu de collision avec une barge Frog est peut etre tombé à l'eau
        {
            if((frog.top<240-62)&&(frog.top>40))
            {
                //Frog est tombé à l'eau!
                frog.kill();
            }
        }
        
  var aGagne=1;
  for(var i in arrives)  //affichage & test collision arrivée
  {
    if(arrives[i].occupe){
        arriveImg=new Image();
        arriveImg.src="img/arrive-occupe.png";
        gameBoardContext.drawImage(arriveImg,arrives[i].left,arrives[i].top);
    }
    //test de colision
        if((frog.left+24)>arrives[i].left && (frog.left)<(arrives[i].left+arrives[i].width)) //collision verticale
        {
            if((frog.top+24)>arrives[i].top && (frog.top)<(arrives[i].top+arrives[i].height)) //collision horizontale
            {
                //si collision alors:
                //frog est arrivé
                if(!arrives[i].occupe)
                {
                    arrives[i].occupe=1;
                    frogArrive();
                }
                else
                {
                    frog.kill();
                }
                
            }
        }
        if(!arrives[i].occupe)
            aGagne=0;
  }
  if(aGagne){
    gagne();
  }
  drawFrogLifes(gameBoardContext); //affiche les vies restantes
  
  drawTempsRestant(gameBoardContext); //affichage du temps restant
  
  gameBoardContext.restore();
  
}