class BaseClass{
    constructor(x,y,w,h){
        var options={
            restitution:0.8,
            density:1,
            friction:1
          }
          this.body=Bodies.rectangle(x,y,w,h,options);
          this.image=loadImage("sprites/base.png")
          this.width=w
          this.height=h
          World.add(myworld,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight(4)
        stroke("lightbrown")
        fill ("grey")
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}