function Flotteur(top,left,height,width,direction,incrementation,imageSrc){
    this.top=top;
    this.left=left;
    this.height=height;
    this.width=width;
    this.direction=direction;
    this.incrementation=incrementation;
    this.imageSrc=imageSrc;
    this.image=new Image();
    this.deplacer=function(){

        if(this.direction=="r")
        {
            this.left=this.left+this.incrementation;
            if(this.left>650)
                this.left=-250;
        }
        else
        {
            this.left=this.left-this.incrementation;
            if(this.left<-250)
                this.left=650;
        }
    }
}