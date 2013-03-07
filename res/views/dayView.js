function DayView (parameters, controller, model, app) {
	"use strict";
	/*
	 *	Observer implementation.
	 *	---------------------------
	 */
	model.addObserver(this);
	this.update = function (arg) {
		console.log("dayView - update()");
		
	};
	
	/*
	 *	init ()
	 *	This method is used to initialize the view by building the DOM-elements,
	 *	adding listeners and so forth.
	 *
	 *	@return (DOM["container"]	| DOM-elements	| 
	 * 			To be displayed by the displayViev-method from myAgendaPlanner.js).
	 *	------------------------------------------------------------------------------
	 */
	this.init = function () {
		console.log("DayView - init()");
		console.log(parameters);
		//	Defining variables.
		var DOM = [];
		
		//	Creating DOM-elements.
		DOM["container"] = $("<div>");
		DOM["container"].addClass("dayWrapper");
		
		DOM["meta-container"] = $("<div>");
		DOM["meta-container"].addClass("metaContainer");
		
		DOM["day-header-container"] = $("<header>");
		DOM["day-header-container"].addClass("darkmarine boxHeader");
		DOM["day-header"] = $("<h1>");
		DOM["day-header"].html("Your Day");
		
		DOM["day-activity-list"] = $("<ul>");
		DOM["day-activity-list"].addClass("sortable dayActivityList");
		DOM["day-activity-list"].attr({
			"id" : "day-list-" + parameters.position
			
		});
		DOM["day-activity-list"].sortable({
			connectWith : ".sortable"
			
		}).disableSelection();

		//	Building view.
		DOM["day-header-container"].append(DOM["day-header"]);
		DOM["container"].append(DOM["meta-container"]);
		DOM["container"].append(DOM["day-header-container"]);
		DOM["container"].append(DOM["day-activity-list"]);
		
		//	Returning.
		console.log(DOM["container"]);
		return DOM["container"];
		
	};
};