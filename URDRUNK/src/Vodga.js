var Vodga = cc.Sprite.extend({
    ctor: function(x,y) {
    	this._super();
        this.x = x;
        this.y = y;
        this.left = true;//some beer left on glass
        this.half = false;
        this.accFallDown = 0;

        this.beer = cc.Sprite.create( 'res/images/vodga.png' );//glass of beer
        this.addChild(this.beer);

    },

    update: function(dt){
    	if(this.y > 380){
           this.fallDown();
    	}
        else{
            this.setPositionOnTable();
        }
        if(this.x < 550 && this.y <= 380){
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
                this.x = 300;
                this.y = 700;
                this.setPosition(cc.p(300,700));
                this.unscheduleUpdate();
                this.left = true;
                this.half = false;
                this.accFallDown = 0;
                this.addChild(this.beer);
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
