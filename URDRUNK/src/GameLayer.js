var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setKeyboardEnabled( true );
        this.score = 0;

        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 32 );
        this.scoreLabel.setPosition( cc.p( 240, 560 ) );
        this.scoreLabel.setColor(new cc.Color3B(255,255,255)); 
        this.addChild( this.scoreLabel,1 );

        this.timeLabel = cc.LabelTTF.create( '0', 'Arial', 32 );
        this.timeLabel.setPosition( cc.p( 100, 560 ) );
        this.timeLabel.setColor(new cc.Color3B(255,255,255)); 
        this.addChild( this.timeLabel,1 );

        this.background = cc.Sprite.create("res/images/bg2.png");
        this.background.setPosition( new cc.Point( 0, 0 ));
        this.background.setAnchorPoint(new cc.Point(0,0));
        this.addChild(this.background);

        this.healthbar = new HealthBar();
        this.healthbar.setPosition(cc.p(530,400));
        this.addChild(this.healthbar);
        this.healthbar.startround();
        this.healthbar.scheduleUpdate();

        this.beer = new Beer(300,700);
        // this.beer.setPosition(cc.p(300,360));
        this.beer.setPosition(cc.p(300,700));
        this.addChild(this.beer);

        this.cocktail = new Cocktail(300,700);
        this.cocktail.setPosition(cc.p(300,700));
        this.addChild(this.cocktail);

        //Code only no picture
        /**
        this object use for choose the drinks which one gonna coming
        */
        this.selectionDrink = new SelectionDrink();
        this.runnerDrinks = 0; //number in array that now we are choose
        this.nowDrink = this.getDrink();
        this.setScheduleUpdate();
        /**
        this object use for check the key board that is correct or not
        */
        // this.checkClickKeyboard = new CheckClickKeyboard();

        this.press = GameLayer.PRESS.UP;

        this.time = 0;
        this.schedule(function() {
            // this.timeLabel.setString( ++this.time );
        },1);

        return true;
    },

    getDrink: function(){
        var temp = this.selectionDrink.getDrinkFromArray(this.runnerDrinks);
        if(temp == null){//end of the set
            this.runnerDrinks = 0; //set for new set

            //to do random new group of drinks

        }
        console.log(temp+' in the get drink');
        return temp;

    },

    setScheduleUpdate: function(){
        if(this.nowDrink == 'b'){
            this.beer.scheduleUpdate();
        }
        else if(this.nowDrink == 'c'){
            this.cocktail.scheduleUpdate();
        }
        else if(this.nowDrink == 'v'){
            //for vodga
        }
    },

    onKeyDown: function( e ) {
        if(this.press == GameLayer.PRESS.UP){
            // if(this.healthbar.state != HealthBar.STATE.START)
            //     this.healthbar.startround();
            if(e == 32){
                this.score;
                this.updateScoreLabel(this.score);
                this.healthbar.increase();
                this.press = GameLayer.PRESS.DOWN;

                this.cocktail.unscheduleUpdate();
                this.cocktail.setPosition(cc.p(200,600));

            }
        }
    },

    onKeyUp: function(e) {
        this.press = GameLayer.PRESS.UP;
    },

    updateScoreLabel: function() {        
        this.scoreLabel.setString( this.score );
    },

    setDrink: function(e){

    }
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
} ;


