class Boundary{
    static width = 48
    static height = 48
    constructor({position}) {
        this.position=position
        this.width = 48
        this.height = 48
    }
    draw(){
        c.fillStyle ="rgba(255,0,0,0)"
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}


class Sprite{
    constructor({position,velocity,image,width,height,frames = {max:1}}){
        this.position = position;
        this.image = image
        this.frames = frames
        this.width = width/this.frames.max
        this.height = height
        console.log(this.width)
        console.log(this.height)
        
    }
    draw(){
        c.drawImage(this.image,
            0,
            0,
            this.image.width/this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width/this.frames.max,
            this.image.height)
    }
}