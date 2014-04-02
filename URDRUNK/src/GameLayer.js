var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setKeyboardEnabled( true );
        this.score = 0;
        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 32 );
        this.scoreLabel.setPosition( cc.p( 200, 560 ) );
        this.scoreLabel.setColor(new cc.Color3B(0,0,0)); 
        this.addChild( this.scoreLabel,1 );
        this.background = cc.Sprite.create("res/images/bg.png");
        this.background.setPosition( new cc.Point( 0, 0 ));
        this.background.setAnchorPoint(new cc.Point(0,0));
        this.addChild(this.background);

        this.healthbar = new Healthbar();
        this.healthbar.setPosition(cc.p(530,400));
        this.addChild(this.healthbar);
        this.healthbar.startround();
        this.healthbar.scheduleUpdate();

        this.press = GameLayer.PRESS.UP;

        this.time = 20;
        this.schedule(function() {
            console.log(this.time--);
        },1);

        
        return true;
    },
    onKeyDown: function( e ) {
        if(this.press == GameLayer.PRESS.UP){
            if(this.healthbar.state!=Healthbar.STATE.START)
            this.healthbar.startround();
            if(e == 32){
                this.score++;
                this.updateScoreLabel(this.score);
                this.healthbar.increase();
                this.press = GameLayer.PRESS.DOWN;
            }
        }
    },
        onKeyUp: function(e) {
         this.press = GameLayer.PRESS.UP;
    },
    updateScoreLabel: function() {        
        this.scoreLabel.setString( this.score );
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
} ;


