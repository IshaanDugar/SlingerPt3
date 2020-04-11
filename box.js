class Box extends BaseClass {
  constructor(x, y){
    super(x,y,20,20);
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 5){
    super.display();
   }
   else{
     World.remove(world, this.body);
    }
  }



};