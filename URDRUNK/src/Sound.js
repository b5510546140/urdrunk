var Sound = cc.Node.extend({
	  ctor: function() {
	  	this._super();
	  	this.bachground = cc.AudioEngine.getInstance();
        this.bachground.playMusic( 'res/effects/bgsound.mp3', true );
        this.bachground.setMusicVolume(0.2);


        this.music = cc.AudioEngine.getInstance();
        // cc.AudioEngine.getInstance().playMusic( 'res/effects/bgsound.mp3', true );
        // cc.AudioEngine.getInstance().playEffect( 'res/effects/intro-to-game.wav' );
         // cc.AudioEngine.getInstance().playEffect( 'res/effects/timer.wav' );
      
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
	  	this.bachground.pauseMusic();
	  	this.music.playEffect('res/effects/intro-burp.mp3');
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
