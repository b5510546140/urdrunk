var SelectionDrink = cc.Node.extend({
	 ctor: function() {
	 	this.array = ['c','c','c','c','b','c'];
	 },

	 getDrinkFromArray: function(i){
	 	if(i>=this.array.length){
	 		return null;
	 	}
	 	return this.array[i];
	 },

	 random :function(){
	 }
});