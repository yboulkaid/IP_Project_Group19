function ActivityView (parameters, controller, model, app) {
	"use strict";
	/*
	 *	Observer implementation.
	 *	---------------------------
	 */
	model.addObserver(this);
	this.update = function (arg) {
		//console.log("activityView - update()");
		this.addActivitiesToList($("#activities-list"));
		
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
		//console.log("activityView - init()");
		//	Defining variables.
		var DOM = [],
			dndController = new DragAndDropController(model, parameters.position);
		
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
		DOM["add-activity-view-container"] = $("<div>");
		DOM["add-activity-view-container"].attr({
			"id" : "add-activity-view-container"
			
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
				//	Updating.
				dndController.update(e, ui, $(this), app.activityPrevPos);
				
			},
			start : function (e, ui) {
				dndController.setStart(e, ui);
				app.activityPrevPos = ui.item.index();

			},
			over : function (e, ui) {
				dndController.onOver(e, ui);
				
			},
			out : function (e, ui) {
				dndController.onOut(e, ui);
				
			}
		}).disableSelection();
		this.addActivitiesToList(DOM["activities-list"]);
		
		//	Building view.
		DOM["activities-header-container"].append(DOM["activities-header"]);
		DOM["activities-container"].append(DOM["activities-header-container"]);
		DOM["activities-container"].append(DOM["add-activity-view-container"]);
		DOM["activities-container"].append(DOM["activities-list"]);
		DOM["button-container"].append(DOM["add-activity-button"]);
		DOM["container"].append(DOM["button-container"]);	
		DOM["container"].append(DOM["activities-container"]);	
		
		//	Returning.
		//console.log(DOM["container"]);
		return DOM["container"];
	
	};
	/*
	 *	addActivitiesToList
	 *	This method is used to add parked activites from the model to
	 *	the activities list (#activities-list).
	 *	------------------------------------------
	 */
	this.addActivitiesToList = function (list) {
		//console.log("activityView - addActivitiesToList()");
		
		//	Defining variables.
		var activity,
			colorList = [],
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
			//	This is a scope-hack to create a new controller for each activity item.
			this.attachActivityItemViewController(colorList, activity, parkedActivities, list);
			
		};
	};
	this.attachActivityItemViewController = function (colorList, activity, parkedActivities, list) {
		//	Defining
		var controller = new ActivityItemController(model),
			DOM = [];
					
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
		
		DOM["span-description"] = $("<div>");
		DOM["span-description"].addClass("list-item-description");
		
		//	Appending to #activities-list.
		DOM["span-list-item"].append(DOM["span-type"]);
		DOM["span-list-item"].append(DOM["span-text"]);
		DOM["activity"].append(DOM["span-time"]);
		DOM["activity"].append(DOM["span-list-item"]);
		DOM["activity"].append(DOM["clear-fix"]);
		DOM["activity"].append(DOM["span-description"]);
		DOM["activity"].click(function() {
			controller.activityItemClicked(DOM["span-description"], parkedActivities[activity]);
			
		});
		list.append(DOM["activity"]);
	};
};