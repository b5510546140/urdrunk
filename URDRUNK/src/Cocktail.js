var Cocktail = cc.Sprite.extend({
	ctor: function(x,y,sound) {
		this._super();
		this.x = x;
		this.y = y;
        this.numberOfCharacter = this.randomPicture();
		var name = 'res/images/cocktail'+this.randomPicture()+'.png';
        this.character = 'res/images/char'+this.numberOfCharacter+'.png';
        this.charPic = cc.Sprite.create(this.character);
        this.charPic.setAnchorPoint( new cc.Point( 0.5, 0 ) );
        this.charPic.setPosition( new cc.Point( 0, 20 ) );
        this.addChild( this.charPic , 1 );
		this.cocktail = cc.Sprite.create( name );//just try to see the picture
        this.addChild(this.cocktail);
        this.left = true;
        this.accFallDown = 0;
        this.sound = sound;

        this.isDownSound = true;
        this.isDrinkSound = true;
        this.isOpenSound = true;

	},

	update: function(dt){
         if(this.isOpenSound){
            this.sound.cocktailOpen();
            this.isOpenSound = false;
        }
    	if(this.y > Cocktail.POSITION.TABLE){
            this.fallDown();
    	}
        else{
            if(this.isDownSound){
                this.sound.cocktailDown();
                this.isDownSound = false;
            }
           this.setPositionOnTable();
        }

        if(this.x < 550 && this.y == 370){
            if(this.isDrinkSound){
                this.sound.cocktailSlurp();
                this.isDrinkSound = false;
            }
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
        this.x += 3;
        this.setPositionX( this.x );
    },

    setPositionOnTable: function(){
        this.setPositionY( Cocktail.POSITION.TABLE );
        this.y = Cocktail.POSITION.TABLE;
    },

    randomPicture: function(){
    	return Math.floor(Math.random()*4+1);
    },

    setLeftFalse: function(){
        this.left = false;
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
                this.accFallDown = 0;
                this.getNewPictureAndCharacter();
                return false;
            }
        }
        return true;
    },

    getNewPictureAndCharacter: function(){
        this.removeAllChildren();
        this.numberOfCharacter = this.randomPicture();
        this.character = 'res/images/char'+this.numberOfCharacter+'.png';
        this.charPic = cc.Sprite.create(this.character);
        this.charPic.setAnchorPoint( new cc.Point( 0.5, 0 ) );
        this.charPic.setPosition( new cc.Point( 0, 20 ) );
        this.addChild( this.charPic , 1 );
        var name = 'res/images/cocktail'+this.randomPicture()+'.png';
        this.cocktail = cc.Sprite.create( name );
        this.addChild(this.cocktail);
    }
});
Cocktail.POSITION ={
    TABLE :370,
} ;