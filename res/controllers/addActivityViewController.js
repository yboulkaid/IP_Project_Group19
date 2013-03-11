/*
 *	activityViewController (model).
 *	This is a controller class for the activity view.
 * 
 *	@Parameter 1	(model | object Model | ... ).
 *	-------------------------------------------------
 */
function AddActivityViewController (model, app) {
	"use strict";
	
	/*
	 *	init ().
	 * 	This method is triggered on creation to initialize the controller.
	 *	(it can be removed if not used).
	 *	------------------------------------
	 */
	this.init = (function() {
		console.log("addActivityViewController - init()");
		
	}());
	
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
	this.saveButtonClicked = function (form) {
		//	Defining variables
		var type = [];
		type["presentation"] = 0;
		type["group work"] = 1;
		type["discussion"] = 2;
		type["break"] = 3;
			
		this.cancelButtonClicked();	//	Closing.
		
		//	Updating model.
		model.addActivity(new Activity(form.name, parseInt(form.minutes), type[form.select], form.text), null);
	};
};