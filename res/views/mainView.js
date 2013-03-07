function MainView (parameters, controller, model, app) {
	"use strict";
	/*
	 *	Observer implementation.
	 *	---------------------------
	 */
	model.addObserver(this);
	this.update = function (arg) {
		console.log("mainView - update()");
		
	};
	
	/*
	 *	init ()
	 *	This method is used to initialize the view by building the DOM-elements,
	 *	adding listeners and so forth.
	 *
	 *	@return (DOM["main-view-container"]	| DOM-elements	| 
	 * 			To be displayed by the displayViev-method from myAgendaPlanner.js).
	 *	------------------------------------------------------------------------------
	 */
	this.init = function () {
		console.log("mainView - init()");
		//	Defining variables.
		var DOM = [];
		
		//	Creating DOM-elements.
		DOM["main-view-container"] = $("<div>");
		DOM["main-view-container"].attr({
			"id" : "main-view-container"
			
		});
		DOM["app-header-container"] = $("<header>");
		DOM["app-header-container"].attr({
			"id" : "app-header-container"
			
		});
		DOM["app-header"] = $("<h1>");
		DOM["app-header"].html("My Agenda Planner");
		
		DOM["app-content-container"] = $("<div>");
		DOM["app-content-container"].attr({
			"id" : "app-content-container"
			
		});		
		
		DOM["activity-view-container"] = $("<div>");
		DOM["activity-view-container"].attr({
			"id" : "activity-view-container"
			
		});
		
		DOM["day-container"] = $("<div>");
		DOM["day-container"].attr({
			"id" : "day-container"
			
		});
		
		DOM["add-day-button-container"] = $("<div>");
		DOM["add-day-button-container"].attr({
			"id" : "add-day-button-container"
			
		});
		DOM["add-day-button"] = $("<button>");
		DOM["add-day-button"].addClass("bigButton");
		DOM["add-day-button"].html("Add Day");
		DOM["add-day-button"].click(function() {
			controller.addDayButtonClicked();
			
		});
		
		DOM["clear-fix"] = $("<div>");
		DOM["clear-fix"].attr({
			"class" : "clear-fix"
			
		});
		
		//	Building view.
		DOM["app-header-container"].append(DOM["app-header"]);	
		DOM["add-day-button-container"].append(DOM["add-day-button"]);
		DOM["app-content-container"].append(DOM["activity-view-container"]);
		DOM["app-content-container"].append(DOM["day-container"]);
		DOM["app-content-container"].append(DOM["add-day-button-container"]);
		DOM["app-content-container"].append(DOM["clear-fix"]);		
		DOM["main-view-container"].append(DOM["app-header-container"]);
		DOM["main-view-container"].append(DOM["app-content-container"]);
		
		//	Returning.
		console.log(DOM["main-view-container"]);
		return DOM["main-view-container"];
		
	};
};