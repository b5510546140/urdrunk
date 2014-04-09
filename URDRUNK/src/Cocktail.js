var Cocktail = cc.Sprite.extend({
	ctor: function(x,y) {
		this._super();
		this.x = x;
		this.y = y;
		// var name = 'res/images/cocktail'+this.randomPicture()+'.png';
		var name = 'res/images/cocktail'+1+'.png';
		console.log(name);
		this.cocktail = cc.Sprite.create( name );//just try to see the picture
        this.addChild(this.cocktail);
        // to do add the letter on the top of the cocktail glass
	},

	update: function(dt){
		this.x=this.getPositionX();
    	this.y=this.getPositionY();
    	if(this.y>370){
            this.y -= 5;
    		this.setPositionY( this.y);
    	}
        else{
            this.setPositionY( 370 );
            this.y = 370;
        }
        if(this.x<600&&this.y<=370){
            this.x += 5;
    		this.setPositionX( this.x );
    	}
    },

    randomPicture: function(){
    	return Math.floor(Math.random()*4+1);
    }


});