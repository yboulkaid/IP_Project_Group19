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
			"placeholder" : "Name"
			
		});
		
		// Name validation CSS change
		DOM["name"].bind("propertychange input paste", function(e){
			var name = $(DOM["name"]).val();
			if(name != ""){
				DOM["name"].addClass('valid-input');
				DOM["name"].removeClass('invalid-input');
			}else{
				DOM["name"].removeClass('valid-input');
				DOM["name"].addClass('invalid-input');
			}
		});
		
		//	... Min
		DOM["minutes"] = $("<input>");
		DOM["minutes"].attr({
			"type" : "text",
			"placeholder" : "Duration (minutes)"
			
		});
		
		// Minutes validation CSS change
		DOM["minutes"].bind("propertychange input paste", function(e){
			var minutes = $(DOM["minutes"]).val();
			if(controller.isTimeValid(minutes)){
				console.log("Valid ");
				DOM["minutes"].addClass('valid-input');
				DOM["minutes"].removeClass('invalid-input');
			}else{
				console.log("Not Valid ");
				DOM["minutes"].removeClass('valid-input');
				DOM["minutes"].addClass('invalid-input');
			}
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
			"placeholder" : "Description"
			
		});
		
		//	... Buttons
		DOM["cancel"] = $("<button>");
		DOM["cancel"].html("Cancel");
		DOM["cancel"].click(function () {
			controller.cancelButtonClicked();
			
		});
		
		DOM["save"] = $("<button>");
		DOM["save"].html("Save");
		DOM["save"].click(function () {
			//	Defining variables.
			var form = {};
			
			//	Adding values to form.
			form.name = DOM["name"].val();
			form.minutes = DOM["minutes"].val();
			form.select = DOM["type-select"].val();
			form.text = DOM["text-area"].val();
			
			// Changing CSS in case of non filled fields
			if (form.minutes == ""){
				DOM["minutes"].addClass('invalid-input');
			}
			if (form.name == ""){
				DOM["name"].addClass('invalid-input');
			}
			
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