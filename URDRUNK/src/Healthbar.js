var HealthBar = cc.Node.extend({
	  ctor: function() {
	  	this._super();
        this.graphic = cc.Sprite.create( 'res/images/healthBar.png' );
        this.graphic.setAnchorPoint( new cc.Point( 0.5, 0 ));
        this.graphic.setPosition( new cc.Point( 0, 0 ));
        this.addChild(this.graphic);
        this.boarder = cc.Sprite.create('res/images/boardhealth.png');
        this.boarder.setAnchorPoint(new cc.Point(0,0));
        this.boarder.setPosition(new cc.Point(-25,67));
        this.addChild(this.boarder);
        this.health = cc.Sprite.create('res/images/health.png');
        this.health.setAnchorPoint(new cc.Point(0,0));
        this.health.setPosition(new cc.Point(-10,80));
        this.addChild(this.health);
        this.state = HealthBar.STATE.STOP;
        this.accDecrease = 1.001;

        this.healthPercent = 1;
        this.health.setScaleX(this.healthPercent);
	  },

	  increase:function(){
	  	if(this.healthPercent <= 1){
	  		this.healthPercent = this.healthPercent + HealthBar.CONSTANT.INCREASE;
	  		if(this.healthPercent > 1){
	  			this.healthPercent = 1;
	  		}
	  		this.health.setScaleX(this.healthPercent);
	  	}
	  },

	  startdecrease:function(){
	  	if(this.healthPercent >= 0){
	  		this.healthPercent = this.healthPercent - (HealthBar.CONSTANT.DECREASE * this.accDecrease );
	  		this.accDecrease += 0.0002;
	  		if(this.healthPercent < 0){
	  			this.healthPercent = 0;
	  		}
	  		this.health.setScaleX(this.healthPercent);
	   }
	  },

	  update:function(){
	  	if(this.state == HealthBar.STATE.START){
	  		this.startdecrease();
	  	}
	  },

	  startround:function(){
	  	this.state = HealthBar.STATE.START;
	  }
});
HealthBar.STATE ={
	START :0,
	STOP :1
} ;
HealthBar.CONSTANT = {
	DECREASE : 0.0011, //0.06 per sec
	INCREASE : 0.04
};
