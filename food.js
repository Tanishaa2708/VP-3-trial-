class Food{
    constructor(){
        this.milkImage = loadImage("images/Milk.png")
        this.feedtime
    }
    buttons(){
        this.button1 = createButton("feed the dog")
        this.button1.position(800,80)

        this.button2 = createButton("add feed")
        this.button2.position(900,80)
      if(food>0){
        this.button1.mousePressed(()=>{
            food--
            writeStock(food);
        })
    }
    this.button2.mousePressed(()=>{
        food++
        writeStock(food);
    })
    
    }
    milkImg(){
        var newX = 0
        for(var i=0; i< food; i++){
            image (this.milkImage, newX, 200, 50,50)
            newX = newX + 50
        }
    }
    getfeedTime()
    {
        database.ref("feedtime").on('value',(data)=>{
           this.feedtime = data.val()
        })
    }

    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    bedRoom(){
        background(bedroomImg)
    }
    washRoom(){
        background(washroomImg)
    }
    garden(){
        background(gardenImg)
    } 
}