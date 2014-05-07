var Label = cc.Node.extend({
	ctor: function() {
	this._super();
	this.scoreLabel =  cc.LabelTTF.create( '0', 'Arial', 32 );
	this.scoreLabel.setPosition( cc.p( 260, 560 ) );
    this.scoreLabel.setColor(new cc.Color3B(255,255,255)); 
    this.addChild( this.scoreLabel,1 );

    this.clock = cc.Sprite.create("res/images/clock.png");
    this.clock.setPosition( new cc.Point( 33, 535 ));
    this.clock.setAnchorPoint(new cc.Point(0,0));
    this.addChild(this.clock,1);

    this.timeLabel = cc.LabelTTF.create( '0', 'Arial', 32 );
    this.timeLabel.setPosition( cc.p( 120, 560 ) );
    this.timeLabel.setColor(new cc.Color3B(255,255,255)); 
    this.addChild( this.timeLabel,1 );

    this.timeLabelAdd = cc.LabelTTF.create( '0', 'Arial', 32 );
    this.timeLabelAdd.setPosition( cc.p( 180, 560 ) );
    this.timeLabelAdd.setColor(new cc.Color3B(0,255,255)); 
    this.addChild( this.timeLabelAdd,1 );

    this.background = cc.Sprite.create("res/images/bg.png");
    this.background.setPosition( new cc.Point( 0, 0 ));
    this.background.setAnchorPoint(new cc.Point(0,0));
    this.addChild(this.background);

    this.howToClcik = cc.Sprite.create("res/images/howto.png");
    this.howToClcik.setPosition( new cc.Point( 40, 335 ));
    this.howToClcik.setAnchorPoint(new cc.Point(0,0));
    this.addChild(this.howToClcik,1);
    }
});
