var Beer = cc.Sprite.extend({
    ctor: function(x,y,sound) {
    	this._super();
        this.x = x;
        this.y = y;
        this.left = true;
        this.half = false;
        this.accFallDown = 0;
        this.sound = sound;
        this.beer = cc.Sprite.create( 'res/images/beerfull.png' );
        this.addChild(this.beer);

        this.isDownSound = true;
        this.isRightSound = true;
        this.isOpenSound = true;

    },

    update: function(dt){
        if(this.isOpenSound){
            this.sound.beerOpen();
            this.isOpenSound = false;
        }
    	if(this.y > 380){
           this.fallDown();
    	}
        else{
            if(this.isDownSound){
                this.sound.beerDown();
                this.isDownSound = false;
            }
            this.setPositionOnTable();
        }
        if(this.x < 550 && this.y <= 380){
            this.goRight();
            if(this.isRightSound){
                this.sound.beerSlide();    
                this.isRightSound = false;
            }
    	}
        if(this.half){
            this.removeChild(this.beer);
            this.beer = this.beer = cc.Sprite.create( 'res/images/beerhalf.png' );
            this.addChild(this.beer);
            this.half = false;
            this.sound.beerDrink(); 
        }
        if(!this.left){
            this.removeChild(this.beer);
            this.beer = this.beer = cc.Sprite.create( 'res/images/beer0.png' );
            this.addChild(this.beer);
            this.notHaveDrinkLeft();  
        }
    },

    notHaveDrinkLeft: function(){
        this.x += 9;
        this.setPositionX( this.x );
    },

    fallDown: function(){
        this.y -= (3 + this.accFallDown);
        this.setPositionY( this.y);
        this.accFallDown += 0.3;
    },

    goRight: function(){
        this.x += 3;
        this.setPositionX( this.x );
    },

    setPositionOnTable: function(){
        this.setPositionY( Beer.POSITION.TABLE );
        this.y = Beer.POSITION.TABLE;
    },

    isInScreen: function(){
        if(!this.left){
            if(this.x > 800){
                this.sound.glassBreak();
                this.x = 300;
                this.y = 700;
                this.setPosition(cc.p(300,700));
                this.unscheduleUpdate();
                this.left = true;
                this.half = false;
                this.accFallDown = 0;
                this.removeChild(this.beer);
                this.beer = this.beer = cc.Sprite.create( 'res/images/beerfull.png' );
                this.addChild(this.beer);
                this.isDownSound = true;
                this.isRightSound = true;
                this.isOpenSound = true;
                return false;
            }
        }
        return true;
    },

    setHalfTrue: function(){
        this.half = true;
    },

    setLeftFalse: function(){
        this.left = false;
    }

});
Beer.POSITION ={
    TABLE :380,
} ;
