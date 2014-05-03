var Vodga = cc.Sprite.extend({
    ctor: function(x,y,sound) {
    	this._super();
        this.x = x;
        this.y = y;
        this.left = true;
        this.half = false;
        this.accFallDown = 0;
        this.sound = sound;

        this.beer = cc.Sprite.create( 'res/images/vodga.png' );
        this.addChild(this.beer);
        this.introSound = true;
        this.burpSound = true;
    },

    update: function(dt){
        if(this.introSound){
            this.sound.introBurp();
            this.introSound = false;
        }
    	if(this.y > 380){
           this.fallDown();
    	}
        else{
            this.setPositionOnTable();
        }
        if(this.x < 550 && this.y <= 380){
            console.log('right');
            this.goRight();
    	}
        if(!this.left){
            if(this.burpSound){
            this.sound.burp();
            this.burpSound = false;
            }
            this.notHaveDrinkLeft();  
        }
    },

    notHaveDrinkLeft: function(){
        this.x += 9;
        this.setPositionX( this.x );
    },

    fallDown: function(){
       this.y -= (5 + this.accFallDown);
        this.setPositionY( this.y);
        this.accFallDown += 0.3;
    },

    goRight: function(){
        this.x += 5;
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
                this.accFallDown = 0;
                this.left = true;
                this.introSound = true;
                this.burpSound = true;
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
