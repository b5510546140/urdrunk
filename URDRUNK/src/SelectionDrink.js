var SelectionDrink = cc.Node.extend({
	 ctor: function() {
	 	this.array = ['b','c','b,','b','c'];
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