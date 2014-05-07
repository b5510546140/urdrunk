var Sound = cc.Node.extend({
	ctor: function() {
	  	this._super();
	  	this.bachground = cc.AudioEngine.getInstance();
        this.bgRandom();
        this.bachground.setMusicVolume(0.8);
      	this.music = cc.AudioEngine.getInstance();
      	this.checkIntroBurp = true;
    },

    bgRandom: function(){
    	var x = Math.floor(Math.random()*2);
    	console.log(x);
    	if(x == 0){
    		this.bachground.playMusic( 'res/effects/bgsong1.mp3', true );
    	}else if(x == 1){
    		this.bachground.playMusic( 'res/effects/bgsong2.mp3', true );
    	}
    },

	beerOpen: function(){
		this.music.playEffect('res/effects/beeropen.mp3');
	},

	beerSlide: function(){
		this.music.playEffect('res/effects/slide-across-worktop.mp3');
	},

	beerDown: function(){
		this.music.playEffect('res/effects/beerdrop.mp3');
	},

	beerDrink: function(){
		this.music.playEffect('res/effects/drinkbeer.mp3');
	},

	introBurp: function(){
		this.bachground.setMusicVolume(0.1);
		var intro = cc.AudioEngine.getInstance();
		intro.playEffect('res/effects/intro-burp.mp3');
		intro.setMusicVolume(0.9);
		if(this.checkIntroBurp){
			this.scheduleOnce(function() {
            	this.bachground.setMusicVolume(0.8);
            	this.checkIntroBurp = true;
        	},17);
        	this.checkIntroBurp = false;
		}
	},

	burp: function(){
 		this.music.playEffect('res/effects/burp.mp3');
		this.bachground.resumeMusic();
	},

	timer: function(){
		this.music.playEffect('res/effects/timer.wav');
	},

	cocktailDown: function(){
		this.music.playEffect('res/effects/wine-glass-put-down.mp3');
	},

	cocktailOpen: function(){
		this.music.playEffect('res/effects/shake.mp3');
	},

	cocktailSlurp: function(){
		this.music.playEffect('res/effects/slurpWater.mp3');
	},

	die: function(){
		this.music.playEffect('res/effects/die.wav');
	},

	glassBreak: function(){
 		var random = Math.floor(Math.random()*3+1);
		this.music.playEffect('res/effects/glassbreak-'+random+'.mp3');
	},
});
