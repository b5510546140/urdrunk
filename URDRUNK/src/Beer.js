var Beer = cc.Sprite.extend({
    ctor: function(x,y) {
    	this._super();
        this.x = x;
        this.y = y;
        this.left = true;//some beer left on glass
        //to do change the picture to the glass of beer
        this.beer = cc.Sprite.create( 'res/images/beer.png' );//glass of beer
        this.addChild(this.beer);
        //to do add the beer just only beer not glass
    },

    //seperate to function
    update: function(dt){
    	if(this.y > 360){
           this.fallDown();
    	}
        else{
            this.setPositionOnTable();
        }
        if(this.x < 600 && this.y <= 360){
            this.goRight();
    	}

        if(!this.left){
            this.notHaveDrinkLeft();  
        }
    },

    notHaveDrinkLeft: function(){
        this.x += 9;
        this.setPositionX( this.x );
    },

    fallDown: function(){
        this.y -= 5;
        this.setPositionY( this.y); 
    },

    goRight: function(){
        this.x += 5;
        this.setPositionX( this.x );
    },

    setPositionOnTable: function(){
        this.setPositionY( Beer.POSITION.TABLE );
        this.y = Beer.POSITION.TABLE;
    },


    setScaleYBeer: function(percentBeerLeft){
        // this.health.setScaleX(this.healthpercent);
        this.beer.setScaleY(percentBeerLeft);
    },

    isInScreen: function(){
        if(!this.left){
            if(this.x > 800){
                this.x = 300;
                this.y = 700;
                this.setPosition(cc.p(300,700));
                this.unscheduleUpdate();
                this.left = true;
                return false;
            }
        }
        return true;
    },

    setLeftFalse: function(){
        this.left = false;
    }

});
Beer.POSITION ={
    TABLE :360,
} ;
