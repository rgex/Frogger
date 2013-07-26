function Voiture(top,left,height,width,imageSrc,direction,incrementation){
    this.top=top;
    this.left=left;
    this.height=height;
    this.width=width;
    this.imageSrc=imageSrc;
    this.direction=direction;
    this.incrementation=incrementation;
    this.image=new Image();
    this.deplacer=function(){
        if(this.direction=="r")
        {
            this.left=this.left+this.incrementation;
            if(this.left>650)
                this.left=-50;
        }
        else
        {
            this.left=this.left-this.incrementation;
            if(this.left<-50)
                this.left=650;
        }
    }
}