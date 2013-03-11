/*
 *	activityViewController (model, app).
 *	This is a controller class for the day view(s).
 * 
 *	@Parameter 1	(model | object Model | ... ).
 *	-------------------------------------------------
 */
function DayViewController (model, app) {
	"use strict";
	
	/*
	 *	init ().
	 * 	This method is triggered on creation to initialize the controller.
	 *	(it can be removed if not used).
	 *	------------------------------------
	 */
	this.init = (function() {
		console.log("DayViewController - init()");
		
	}());
	
	this.startChanged = function (dayID,newText) {
			var valid = /^([0-9]{2}):([0-9]{2})$/.test(newText)
			var match = /^([0-9]{2}):([0-9]{2})$/.match(newText)
			
			if(valid){
				console.log(match);
				
			}else{
				
				console.log("NOT OK");
			}
			
			
			
			/*hours = parseInt(hours);
			minutes = parseInt(minutes);*/
			
			/*if(hours >= 0 && hours <= 23 && minutes >=0 && minutes <=59){
				console.log("OK");
			}
			else{
				
				console.log("NOT OK");
			}
			
		} else 
		{
			console.log("NOT OK");
		}*/
	}
};