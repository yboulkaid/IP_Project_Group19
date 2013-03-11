function AddActivityView (parameters, controller, model, app) {
	"use strict";
	/*
	 *	Observer implementation.
	 *	---------------------------
	 */
	model.addObserver(this);
	this.update = function (arg) {
		console.log("addActivityView - update()");
		
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
		console.log("addActivityView - init()");
		//	Defining variables.
		var DOM = [];
		
		//	Creating DOM-elements.
		DOM["container"] = $("<div>");
		DOM["container"].addClass("activity-view");
		
		//	... Name
		DOM["name"] = $("<input>");
		DOM["name"].attr({
			"type" : "text",
			"placeholder" : "name"
			
		});
		
		//	... Min
		DOM["minutes"] = $("<input>");
		DOM["minutes"].attr({
			"type" : "text",
			"placeholder" : "# minutes"
			
		});
		
		//	... Select
		DOM["type-select"] = $("<select>");
		DOM["type-option-presentation"] = $("<option>");
		DOM["type-option-presentation"].html("presentation");
		
		DOM["type-option-group-work"] = $("<option>");
		DOM["type-option-group-work"].html("group work");
		
		DOM["type-option-discussion"] = $("<option>");
		DOM["type-option-discussion"].html("discussion");
		
		DOM["type-option-break"] = $("<option>");
		DOM["type-option-break"].html("break");
		
		//	... Text
		DOM["text-area"] = $("<textarea>");
		DOM["text-area"].attr({
			"placeholder" : "description"
			
		});
		
		//	... Buttons
		DOM["cancel"] = $("<button>");
		DOM["cancel"].html("cancel");
		DOM["cancel"].click(function () {
			controller.cancelButtonClicked();
			
		});
		
		DOM["save"] = $("<button>");
		DOM["save"].html("save");
		DOM["save"].click(function () {
			//	Defining variables.
			var form = {};
			
			//	Adding values to form.
			form.name = DOM["name"].val();
			form.minutes = DOM["minutes"].val();
			form.select = DOM["type-select"].val();
			form.text = DOM["text-area"].val();
			
			controller.saveButtonClicked(form);
			
		});
		
		//	Appending
		DOM["type-select"].append(DOM["type-option-presentation"]);
		DOM["type-select"].append(DOM["type-option-group-work"]);
		DOM["type-select"].append(DOM["type-option-discussion"]);
		DOM["type-select"].append(DOM["type-option-break"]);
		DOM["container"].append(DOM["name"]);
		DOM["container"].append(DOM["minutes"]);
		DOM["container"].append(DOM["type-select"]);
		DOM["container"].append(DOM["text-area"]);
		DOM["container"].append(DOM["cancel"]);
		DOM["container"].append(DOM["save"]);		
		
		//	Returning.
		console.log(DOM["container"]);
		return DOM["container"];
	
	};
};