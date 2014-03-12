var Healthbar = cc.Node.extend({
	  ctor: function() {
	  	this._super();
        this.graphic = cc.Sprite.create( 'res/images/healthbar.png' );
        this.graphic.setAnchorPoint( new cc.Point( 0.5, 0 ));
         this.graphic.setPosition( new cc.Point( 0, 0 ));
         this.addChild(this.graphic);
        this.boarder = cc.Sprite.create('res/images/boardhealth.png');
        this.boarder.setAnchorPoint(new cc.Point(0,0));
        this.boarder.setPosition(new cc.Point(-25,60));
        this.addChild(this.boarder);
        this.health = cc.Sprite.create('res/images/health.png');
        this.health.setAnchorPoint(new cc.Point(0,0));
        this.health.setPosition(new cc.Point(-9,73));
        this.addChild(this.health);
        this.state = Healthbar.STATE.STOP;

        this.healthper = 0;
        this.health.setScaleX(this.healthper);
	  },
	  increase:function(){
	  	if(this.healthper<=1){
	  	this.healthper = this.healthper+0.005;
	  	this.health.setScaleX(this.healthper);
	  	}
	  },
	  startdecrease:function(){
	  	if(this.healthper>=0){
	  	this.healthper = this.healthper-0.0003;
	  	this.health.setScaleX(this.healthper);
	  }
	  },
	  update:function(){
	  	if(this.state == Healthbar.STATE.START){
	  	this.startdecrease();
	  	}
	  },
	  startround:function(){
	  	this.state = Healthbar.STATE.START;
	  }
});
Healthbar.STATE ={
	START :0,
	STOP :1
} ;
