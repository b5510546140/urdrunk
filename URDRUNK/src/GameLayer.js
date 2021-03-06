var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setKeyboardEnabled( true );
        this.score = 0;
        this.count = 0;
        this.scoreLv = 1;
        this.timeLv = 10;

        this.sound = new Sound();

        this.allLabel = new Label();
        this.allLabel.setPosition(cc.p(0,0));
        this.addChild( this.allLabel,0 );

        this.healthbar = new HealthBar();
        this.healthbar.setPosition(cc.p(530,400));
        this.addChild(this.healthbar);

        this.beer = new Beer(300,700,this.sound);
        this.beer.setPosition(cc.p(300,700));
        this.addChild(this.beer);

        this.cocktail = new Cocktail(300,700,this.sound);
        this.cocktail.setPosition(cc.p(300,700));
        this.addChild(this.cocktail);

        this.vodga = new Vodga(300,700,this.sound);
        this.vodga.setPosition(cc.p(300,700));
        this.addChild(this.vodga);

        this.selectionDrink = new SelectionDrink();
        this.runnerDrinks = 0;
        this.nowDrink = this.getDrink();

        this.press = GameLayer.PRESS.UP;
        this.checkDrinksInScreen = false;

        this.time = 150;
        this.allLabel.timeLabel.setString( this.time );
        this.allLabel.timeLabelAdd.setString( '' );

        this.stageFrontGame();
        this.state = GameLayer.STATES.FRONT;
        return true;
    },

    initGame: function(){
        this.healthbar.startround();
        this.healthbar.scheduleUpdate();
        this.setScheduleUpdate();
        this.maxPressTime = this.randomPress();
        this.halfPressTime = Math.floor(this.maxPressTime / 2);
        this.timeDelay = 0;
        this.scheduleUpdate();
        this.clock();
       
    },

    clock: function(){
        this.schedule(function() {
            if(this.time != 0)
                this.allLabel.timeLabel.setString( --this.time );
            if(this.timeDelay == 1){
                this.allLabel.timeLabelAdd.setString( '' );
            }
            ++this.timeDelay;
            if(this.time < 10){
               this.sound.timer();
            }
        },1);
    },

    update: function(){
        if(this.nowDrink == 'b'){
            this.checkDrinksInScreen = !this.beer.isInScreen();
        }
        else if(this.nowDrink == 'c'){
            this.checkDrinksInScreen = !this.cocktail.isInScreen();
        }
        else if(this.nowDrink == 'v'){
            this.checkDrinksInScreen = !this.vodga.isInScreen();   
        }

        if(this.checkDrinksInScreen){
            this.nowDrink = this.getDrink();
            this.setScheduleUpdate();
            this.checkDrinksInScreen = false;
            this.count = 0;
            this.maxPressTime = this.randomPress();
        }
        
        if(this.healthbar.healthPercent == 0){
            this.die();
        }else if(this.time == 0){
            this.die();
        }
    },

    die: function(){
        this.sound.die();
        this.gameOver();
    },

    randomPress: function(){
        return Math.floor(Math.random() * 7 + 13);
    },

    getDrink: function(){
        var temp = this.selectionDrink.getDrinkFromArray(this.runnerDrinks);
        if(temp == null){
            this.runnerDrinks = 0;
            this.selectionDrink.random();
            this.scoreLv++;
            this.addTime();
            temp = this.selectionDrink.getDrinkFromArray(this.runnerDrinks);
        }
        ++this.runnerDrinks;
        return temp;
    },

    addTime: function(){
        this.allLabel.timeLabelAdd.setString( '+' + this.timeLv );
        this.time += this.timeLv;
        this.timeLv += 10;
        this.timeDelay = 0;
    },

    setScheduleUpdate: function(){
        if(this.nowDrink == 'b'){
            this.beer.scheduleUpdate();
        }
        else if(this.nowDrink == 'c'){
            this.cocktail.scheduleUpdate();
        }
        else if(this.nowDrink == 'v'){
            this.vodga.scheduleUpdate();
        }
    },

    unScheduleUpdate: function(){
        if(this.nowDrink == 'b'){
            this.beer.unscheduleUpdate();
        }
        else if(this.nowDrink == 'c'){
            this.cocktail.unscheduleUpdate();
        }
        else if(this.nowDrink == 'v'){
            this.vodga.unscheduleUpdate();
        }
    },

    onKeyDown: function( e ) {
        if( this.state == GameLayer.STATES.FRONT ) {
            this.stageStartGame();
            this.state = GameLayer.STATES.STARTED;      
        }
        if(this.press == GameLayer.PRESS.UP){
            if(this.nowDrink == 'b' && e == 32){
                this.pressSpacebar();
            }
            else if(this.nowDrink == 'c'){
                if(e == 81 && this.cocktail.numberOfCharacter == 1){
                    this.pressForCocktail();
                }
                else if(e == 87 && this.cocktail.numberOfCharacter == 2){
                    this.pressForCocktail();
                }
                else if(e == 69 && this.cocktail.numberOfCharacter == 3){
                    this.pressForCocktail();
                }
                else if(e == 82 && this.cocktail.numberOfCharacter == 4){
                    this.pressForCocktail(); 
                }
            }
            else if(this.nowDrink == 'v' && ( e == 37 || e == 38 || e == 39 || e == 40 ) ){
                this.pressVodga();
            }
        }
    },

    pressVodga: function(){
        if(this.count < 25){
            ++this.count;
            this.score += this.scoreLv * 2;
            this.updateScoreLabel(this.score);
        }  
        if(this.count >= 25){ 
            this.vodga.setLeftFalse();
            for(var i = 0; i < 5; i++){
                this.healthbar.increase();
            }
        }
        this.press = GameLayer.PRESS.DOWN;
    },

    pressForCocktail: function(){
        this.checkCountLessThanMaxPress();
        if(this.count >= this.maxPressTime){ 
            this.cocktail.setLeftFalse();
        }
    },

    pressSpacebar: function(){ 
        this.checkCountLessThanMaxPress();
        if(this.count == this.halfPressTime){
            this.beer.setHalfTrue();
        }else if(this.count >= this.maxPressTime){ 
            this.beer.setLeftFalse();
        }
    },

    checkCountLessThanMaxPress: function(){
        if(this.count < this.maxPressTime){
            ++this.count;
            this.score += this.scoreLv;
            this.updateScoreLabel(this.score);
            this.healthbar.increase();
        }  
        this.press = GameLayer.PRESS.DOWN;
    },

    onKeyUp: function(e) {
        this.press = GameLayer.PRESS.UP;
    },

    updateScoreLabel: function() {        
        this.allLabel.scoreLabel.setString( this.score );
    },

    gameOver: function(){
        var conf = confirm("GAME OVER\nYour score : "+this.score+"\nRetry?");
        if(conf) location.reload();
        else {
            this.unscheduleUpdate();
            this.unScheduleUpdate();
            this.time = 0;
            this.setKeyboardEnabled( false );
            this.sound.stopAllEffects();
        }
    },

    stageFrontGame: function() {
        this.startLabel = cc.LabelTTF.create( 'Press Any Key \n to Start Game' , 'Arial' , 60);
        this.startLabel.setPosition( cc.p( 400, 300 ) );
        this.addChild( this.startLabel , 99 );
    },

    stageStartGame: function() {
        this.removeChild( this.startLabel );
        this.initGame();
    },
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});
GameLayer.PRESS ={
    UP :0,
    DOWN :1
};
GameLayer.STATES = {
   FRONT: 1,
   STARTED: 2,
};
