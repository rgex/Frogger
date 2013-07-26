function Frog(top,left,nextTop,nextLeft,lifes){
    this.top=top;
    this.left=left;
    this.nextTop=nextTop;
    this.nextLeft=nextLeft;
    this.lifes=lifes;
    this.orientation="avant";
    this.testPosition=function(x,y){
        
        if(y<0||y>420||x<0||x>650)
        {
          return false
        }
        else
        {
          return true;
        }
    };
    this.deplacerArriere=function(){
        if(this.testPosition(this.nextLeft,this.nextTop+32)) //on vérifie que la prochaine position de frog est toujours sur le plateau de jeu
        {
           this.nextTop=this.nextTop+32;
           this.orientation="arriere";
        }
    };
    this.deplacerAvant=function(){
        if(this.testPosition(this.nextLeft,this.nextTop-32)) //on vérifie que la prochaine position de frog est toujours sur le plateau de jeu
        {
           this.nextTop=this.nextTop-32;
           this.orientation="avant";
        }
    };
    this.deplacerGauche=function(){
        if(this.testPosition(this.nextLeft-32,this.nextTop)) //on vérifie que la prochaine position de frog est toujours sur le plateau de jeu
        {
           this.nextLeft=this.nextLeft-32;
           this.orientation="gauche";
        }
    };
    this.deplacerDroite=function(){
        if(this.testPosition(this.nextLeft+32,this.nextTop)) //on vérifie que la prochaine position de frog est toujours sur le plateau de jeu
        {
            this.nextLeft=this.nextLeft+32;
            this.orientation="droite";
        }
    };
    this.animer=function(){
        //tout d'abord on vérifie que frog est toujours sur le plateau de jeu et qu'il n'a pas été entrainé en dehors par une barque.
        if(!this.testPosition(this.left,this.top))
            this.kill();
        if(this.top!=this.nextTop){
            if(this.top>this.nextTop){
                var diff=this.top-this.nextTop;
                this.top=this.top-Math.round(diff/4);
            }else{
                var diff=this.nextTop-this.top;
                this.top=this.top+Math.round(diff/4);
            }
        }
        if(this.left!=this.nextLeft){
            if(this.left>this.nextLeft){
                var diff=this.left-this.nextLeft;
                this.left=this.left-Math.round(diff/4);
            }else{
                var diff=this.nextLeft-this.left;
                this.left=this.left+Math.round(diff/4);
            }
        }
    };
    this.kill=function (){
        //reinitialisation de la position de frog
        if(frog.lifes<1) //si on a plus de vies
        {
            perdu();
        }
        else
        { //si on a encore des vies
            frog.lifes--;
            reInitFrogPosition();
            frog.orientation="avant";
            window.clearInterval(timer1);
            afficherMessage("Frog est mort","red");
            setTimeout("setTimer()",2000);
        }
    }
};