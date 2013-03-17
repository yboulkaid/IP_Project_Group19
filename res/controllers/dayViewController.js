/*
 *	activityViewController (model, app).
 *	This is a controller class for the day view(s).
 *	-------------------------------------------------
 */
function DayViewController (model, app) {
	"use strict";		
	
	// Executes when the start time is changed.
	// Returns true when the data is a valid time
	this.startChanged = function (dayID,newText) {
		
		// Validating the data
		var match=newText.match(/^([0-2][0-9]):([0-5][0-9])$/);
		
		if(match){
			// If the data is valid, pass it to the model and return true
			var hours = parseInt(match[1]);
			var minutes = parseInt(match[2]);
			
			if(hours <= 23){
				model.getDay(dayID).setStart(model,hours,minutes);
				return true;
			}
		} 
		
		// Else, return false
		return false;
	}
	
};