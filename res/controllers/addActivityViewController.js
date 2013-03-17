/*
 *	activityViewController (model).
 *	This is a controller class for the activity view.
 *	-------------------------------------------------
 */
function AddActivityViewController (model, app) {
	"use strict";	
	/*
	 *	cancelButtonClicked ().
	 *	This method closes the addActivityView.
	 *	------------------------------------------
	 */
	this.cancelButtonClicked = function () {
		$("#add-activity-view-container").html("");
		$("#add-activity-view-container").css({
			"min-height" : "0em"
			
		});
		$("#activities-list").css({
			"min-height" : "30em",
			"max-height" : "30em"
			
		});				
	};

	/*
	 *	saveButtonClicked ().
	 *	This method adds an activity to actitivy-list.
	 *	-------------------------------------------------
	 */
	
	// Data validation function for the time
	this.isTimeValid = function (time){
		return /^[0-9]+$/.test(time);
	}
	
	this.saveButtonClicked = function (form) {
		//	Defining variables
		var type = [];
		type["presentation"] = 0;
		type["group work"] = 1;
		type["discussion"] = 2;
		type["break"] = 3;
			
		
		
		//	Validating the data
		if(this.isTimeValid(form.minutes) && (form.name != "")){
			
			// Default description if no description is added
			if(form.text == ""){
				form.text = "<em>(No description)</em>";
			}
			
			//	Updating the model
			model.addActivity(new Activity(form.name, parseInt(form.minutes), type[form.select], form.text), null);
			//	Closing
			this.cancelButtonClicked();
		}else{
			//console.log('NO!');
		}
	};
};