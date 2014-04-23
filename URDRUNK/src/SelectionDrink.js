var SelectionDrink = cc.Node.extend({
	 ctor: function() {
	 	this.array = [['b','b','c','c','b','c','b','c','b','c','b','c'],
	 	['c','b','c','v','c','c','b','c','b','c','b','c']];
	 	// this.array = [['v','v'],['c','c']]
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
	 	this.randomSet = Math.floor(Math.random()*2);
	 	console.log('random of set '+this.randomSet);
	 }
});