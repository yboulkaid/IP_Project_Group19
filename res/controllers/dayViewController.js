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
			var match=newText.match(/^([0-9]{2}):([0-9]{2})$/);
			
			if(valid){
				var hours = parseInt(match[1]);
				var minutes = parseInt(match[2]);
				
				if(hours >= 0 && hours <= 23 && minutes >=0 && minutes <=59){
					model.getDay(dayID).setStart(model,hours,minutes);
					return true;
				}
				else{
					return false;
				}
			} else 
		{
			return false;
		}
	}
	
};