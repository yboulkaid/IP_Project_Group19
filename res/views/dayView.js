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
		var DOM = [],
			dndController = new DragAndDropController(model);
		
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
			connectWith : ".sortable",
			update : function (e, ui) {
				dndController.update(e, ui, $(this));
				
			}
		}).disableSelection();
		this.addActivitiesToList(DOM["day-activity-list"], parameters.position);

		//	Building view.
		DOM["day-header-container"].append(DOM["day-header"]);
		DOM["container"].append(DOM["meta-container"]);
		DOM["container"].append(DOM["day-header-container"]);
		DOM["container"].append(DOM["day-activity-list"]);
		
		//	Returning.
		console.log(DOM["container"]);
		return DOM["container"];
		
	};
	/*
	 *	addActivitiesToList
	 *	This method is used to add parked activites from the model to
	 *	the activities list (day-list).
	 *	------------------------------------------
	 */
	this.addActivitiesToList = function (list, position) {
		console.log("dayView - addActivitiesToList()");
		
		//	Defining variables.
		var activity,
			colorList = [],
			DOM = [],
			activities = model.getDay(position).getActivities();
			console.log(activities);
		
		//	Defining color list
		colorList["Break"] = "yellow";
		colorList["Discussion"] = "orange";
		colorList["Group Work"] = "green";
		colorList["Presentation"] = "brown";	
		
		//	Clearing list.
		list.html("");
		
		//	Appending activities to list.
		for (activity in activities) {
			//	Creating DOM-elements.
			DOM["activity"] = $("<li>");
			DOM["activity"].attr({
				"id" : "parked-" + activity
				
			});
			
			DOM["span-list-item"] = $("<span>");
			DOM["span-list-item"].addClass("listItem");
			
			DOM["span-time"] = $("<span>");
			DOM["span-time"].addClass("listTime");
			DOM["span-time"].html(activities[activity]._length + " min");
			
			DOM["span-type"] = $("<span>");
			DOM["span-type"].addClass(colorList[activities[activity].getType()] + " listItemType");
			
			DOM["span-text"] = $("<span>");
			DOM["span-text"].addClass("listItemText");
			DOM["span-text"].html(activities[activity]._name);
			
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