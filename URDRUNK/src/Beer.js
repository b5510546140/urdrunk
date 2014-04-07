var Beer = cc.Sprite.extend({
    ctor: function(x,y) {
    	this._super();
        this.x = x;
        this.y = y;
        //to do change the picture to the glass of beer
        this.beer = cc.Sprite.create( 'res/images/beer.png' );//glass of beer
        this.addChild(this.beer);

        //to do add the beer just only beer not glass
    },

    update: function(dt){
    	if(this.y>360){
            this.y -= 5;
    		this.setPositionY( this.y);
    	}
        else{
            this.setPositionY( 360 );
        }
        if(this.x<600&&this.y<=360){
            this.x += 5;
    		this.setPositionX( this.x );
    	}
    },

    setScaleYBeer: function(percentBeerLeft){
        // this.health.setScaleX(this.healthpercent);
        this.beer.setScaleY(percentBeerLeft);
    },

    isInScreen: function(){
        return this.x>=0 && this.x<=800 && this.y>=0 && y<=600;
    }
});