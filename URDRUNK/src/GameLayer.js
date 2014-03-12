var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
        this.setKeyboardEnabled( true );
        this.score = 0;
        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 32 );
        this.scoreLabel.setPosition( cc.p( 200, 560 ) );
        this.scoreLabel.setColor(new cc.Color3B(0,0,0)); 
        this.addChild( this.scoreLabel,0 );

        this.healthbar = new Healthbar();
        this.healthbar.setPosition(cc.p(530,400));
        this.addChild(this.healthbar);
        this.healthbar.startround();
        this.healthbar.scheduleUpdate();

        // this.schedule(function() {
        //     this.scoreLabel.setString("----");
        // },1);


        return true;
    },
    onKeyDown: function( e ) {
        if(this.healthbar.state!=Healthbar.STATE.START)
        this.healthbar.startround();
       if(e == 32){
        this.score++;
        this.updateScoreLabel(this.score);
        this.healthbar.increase();
        }
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

