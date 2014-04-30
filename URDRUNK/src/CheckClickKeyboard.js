// var CheckClickKeyboard = cc.Node.extend({
// 	  ctor: function(beer,cocktail,vodga,healthbar) {
// 	  	this._super();
// 	  	this.beer = beer;
// 	  	this.cocktail = cocktail;
// 	  	this.vodga = vodga;
// 	  	this.health = healthbar;
// 	  	this.score = 0;
// 	  	this.lv = 0;
// 	  	this.maxPressTime = 0;  
// 	  },

// 	pressVodga: function(score,lv,max){
// 	   	this.score = score;
// 	   	this.lv = lv;
// 	   	this.maxPressTime = max;
//         if(this.count < 25){
//             ++this.count;
//             this.score += this.scoreLv*2;
//         }  
//         if(this.count >= 25){ //after click ten times
//             this.vodga.setLeftFalse();
//             this.healthbar.increase();
//             this.healthbar.increase();
//             this.healthbar.increase();
//         }
//         this.press = GameLayer.PRESS.DOWN;
//         return this.score;
//     },

//     pressForCocktail: function(score,lv,max){
// 	   	this.score = score;
// 	   	this.lv = lv;
// 	   	this.maxPressTime = max;
//         this.checkCountLessThanMaxPress();
//         if(this.count >= this.maxPressTime){ //after click ten times
//             this.cocktail.setLeftFalse();
//         }
//         return this.score;
//     },

//     pressSpacebar: function(score,lv,max,this.count){
// 	   	this.score = score;
// 	   	this.lv = lv;
// 	   	this.maxPressTime = max;
//         this.checkCountLessThanMaxPress();
//         if(this.count == this.halfPressTime){
//             this.beer.setHalfTrue();
//         }else if(this.count >= this.maxPressTime){ 
//             this.beer.setLeftFalse();
//         }
//         return this.score;
//     },

//     checkCountLessThanMaxPress: function(){
//         if(this.count < this.maxPressTime){
//             ++this.count;
//             this.score += this.scoreLv;
//             this.updateScoreLabel(this.score);
//             this.healthbar.increase();
//         }  
//     },
// });
