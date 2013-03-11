function ActivityView (parameters, controller, model, app) {
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
	 *	@return (DOM["container"]	| DOM-elements	| 
	 * 			To be displayed by the displayViev-method from myAgendaPlanner.js).
	 *	------------------------------------------------------------------------------
	 */
	this.init = function () {
		console.log("activityView - init()");
		//	Defining variables.
		var DOM = [],
			dndController = new DragAndDropController(model);
		
		//	Creating DOM-elements.
		DOM["container"] = $("<div>");
		
		DOM["button-container"] = $("<div>");
		DOM["button-container"].attr({
			"id" : "add-activity-button-container"

		});
		
		DOM["add-activity-button"] = $("<button>");
		DOM["add-activity-button"].addClass("bigButton");
		DOM["add-activity-button"].html("Add Activity");
		DOM["add-activity-button"].click(function() {
			controller.addActivityButtonClicked();
			
		});
		
		DOM["activities-container"] = $("<div>");
		DOM["activities-container"].attr({
			"id" : "activities-container"
			
		});
		
		DOM["activities-header-container"] = $("<header>");
		DOM["activities-header-container"].addClass("marine boxHeader");
		DOM["activities-header"] = $("<h1>");
		DOM["activities-header"].html("Your Activities");
		
		DOM["activities-list"] = $("<ul>");
		DOM["activities-list"].addClass("sortable");
		DOM["activities-list"].attr({
			"id" : "activities-list"
			
		});
		DOM["activities-list"].sortable({
			connectWith : ".sortable",
			update : function (e, ui) {
				controller.update(e, ui, $(this));
				
			},
			stop : function (e, ui) {
				controller.activityDrop(ui, $(this));
			}
		}).disableSelection();
		this.addActivitiesToList(DOM["activities-list"]);
		
		//	Building view.
		DOM["activities-header-container"].append(DOM["activities-header"]);
		DOM["activities-container"].append(DOM["activities-header-container"]);
		DOM["activities-container"].append(DOM["activities-list"]);
		DOM["button-container"].append(DOM["add-activity-button"]);
		DOM["container"].append(DOM["button-container"]);	
		DOM["container"].append(DOM["activities-container"]);	
		
		//	Returning.
		console.log(DOM["container"]);
		return DOM["container"];
	
	};
	/*
	 *	addActivitiesToList
	 *	This method is used to add parked activites from the model to
	 *	the activities list (#activities-list).
	 *	------------------------------------------
	 */
	this.addActivitiesToList = function (list) {
		console.log("activityView - addActivitiesToList()");
		
		//	Defining variables.
		var activity,
			colorList = [],
			DOM = [],
			parkedActivities = model.getParkedActivities();
		
		//	Defining color list
		colorList["Break"] = "yellow";
		colorList["Discussion"] = "orange";
		colorList["Group Work"] = "green";
		colorList["Presentation"] = "brown";	
		
		//	Clearing list.
		list.html("");
		
		//	Appending activities to list.
		for (activity in parkedActivities) {
			//	Creating DOM-elements.
			DOM["activity"] = $("<li>");
			DOM["activity"].attr({
				"id" : "parked-" + activity
				
			});
			
			DOM["span-list-item"] = $("<span>");
			DOM["span-list-item"].addClass("listItem");
			
			DOM["span-time"] = $("<span>");
			DOM["span-time"].addClass("listTime");
			DOM["span-time"].html(parkedActivities[activity]._length + " min");
			
			DOM["span-type"] = $("<span>");
			DOM["span-type"].addClass(colorList[parkedActivities[activity].getType()] + " listItemType");
			
			DOM["span-text"] = $("<span>");
			DOM["span-text"].addClass("listItemText");
			DOM["span-text"].html(parkedActivities[activity]._name);
			
			DOM["clear-fix"] = $("<div>");
			DOM["clear-fix"].addClass("clear-fix");
			
			//	Appending to #activities-list.
			DOM["span-list-item"].append(DOM["span-type"]);
			DOM["span-list-item"].append(DOM["span-text"]);
			DOM["activity"].append(DOM["span-time"]);
			DOM["activity"].append(DOM["span-list-item"]);
			DOM["activity"].append(DOM["clear-fix"]);
			list.append(DOM["activity"]);

		};
	};
};