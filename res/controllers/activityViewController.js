/*
 *	activityViewController (model).
 *	This is a controller class for the activity view.
 * 
 *	@Parameter 1	(model | object Model | ... ).
 *	-------------------------------------------------
 */
function ActivityViewController (model, app) {
	"use strict";
	
	/*
	 *	init ().
	 * 	This method is triggered on creation to initialize the controller.
	 *	(it can be removed if not used).
	 *	------------------------------------
	 */
	this.init = (function() {
		console.log("activityViewController - init()");
		
	}());
	
	/*
	 *	addActivityButtonClicked ().
	 *	This method is triggered when "add activity"-button is clicked.
	 *	------------------------------------------------------------------
	 */
	this.addActivityButtonClicked = function () {
		console.log("addActivityButtonClicked()");
		$("#add-activity-view-container").html("");
		$("#add-activity-view-container").css({
			"min-height" : "20em"
			
		});
		$("#activities-list").css({
			"min-height" : "9em",
			"max-height" : "9em"
			
		});		
		app.displayView({}, app.views["add-activity-view"], "add-activity-view-container");
		
	};
};