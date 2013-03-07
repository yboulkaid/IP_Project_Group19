function ActivityView (parameters, controller, model) {
	"use strict";
	/*
	 *	Observer implementation.
	 *	---------------------------
	 */
	model.addObserver(this);
	this.update = function (arg) {
		console.log("activityView - update()");
		
	};
	
	/*
	 *	init ()
	 *	This method is used to initialize the view by building the DOM-elements,
	 *	adding listeners and so forth.
	 *
	 *	@return (DOM["activity-view-container"]	| DOM-elements	| 
	 * 			To be displayed by the displayViev-method from myAgendaPlanner.js).
	 *	------------------------------------------------------------------------------
	 */
	this.init = function () {
		console.log("activityView - init()");
		//	Defining variables.
		var DOM = [];
		
		//	Creating DOM-elements.
		DOM["container"] = $("<div>");
		
		DOM["button-container"] = $("<div>");
		DOM["button-container"].attr({
			"id" : "add-activity-button"

		});
		
		DOM["add-activity-button"] = $("<button>");
		DOM["add-activity-button"].html("Add Activity");
		DOM["add-activity-button"].click(function() {
			controller.addActivityButtonClicked();
			
		});
		
		//	Building view.
		DOM["button-container"].append(DOM["add-activity-button"]);
		DOM["container"].append(DOM["button-container"]);		
		
		//	Returning.
		console.log(DOM["container"]);
		return DOM["container"];		
	};
};