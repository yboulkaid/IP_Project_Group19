/*
 *	activityViewController (model, app).
 *	This is a controller class for the day view(s).
 *	-------------------------------------------------
 */
function DayViewController (model, app) {
	"use strict";		
	this.startChanged = function (dayID,newText) {
			var valid = /^([0-2][0-9]):([0-5][0-9])$/.test(newText)
			var match=newText.match(/^([0-9]{2}):([0-9]{2})$/);
			
			if(valid){
				var hours = parseInt(match[1]);
				var minutes = parseInt(match[2]);
				
				if(hours <= 23){
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