var SelectionDrink = cc.Node.extend({
	ctor: function() {
		this.array = [['b','b','c','c','b','v','b','c','b','c','b','c'],
			['c','b','c','v','c','c','b','c','b','c','b','c'],
			['c','c','c','v','b','c','v','b','b','c','c','b'],
			['b','b','b','c','c','v','b','b','c','v','c','b']];
	 	// this.array = [['v','b','v']];
		this.randomSet = null;
		this.random();
	},

	getDrinkFromArray: function(i){
		if(i>=this.array[this.randomSet].length){
		return null;
		}
		return this.array[this.randomSet][i];
		},

	random :function(){
		this.randomSet = Math.floor(Math.random()*4);
	 	// this.randomSet = 0;
	}
});