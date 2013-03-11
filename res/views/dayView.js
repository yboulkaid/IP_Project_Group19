function DayView (parameters, controller, model, app) {
	"use strict";
	
	var DOM = [],
	dndController = new DragAndDropController(model, parameters.position);
	/*
	 *	Observer implementation.
	 *	---------------------------
	 */
	model.addObserver(this);
	this.update = function (arg) {
		console.log("dayView - update()");
		
		var dayID = parameters.position;
		var CurrentDay = model.getDay(dayID);
		
		
		

		//	console.log("dayView - update()");
		this.addActivitiesToList(DOM["day-activity-list"], parameters.position);

		// Meta info update :
		var startTime = model.getDay(parameters.position).getStart();
		var endTime = model.getDay(parameters.position).getEnd();
		var totalLength = model.getDay(parameters.position).getTotalLength();
		
		DOM["start-time"].html('Start time : <input type="text" class="text-input" id="startInput' + dayID + '" value=' + startTime + '><br/>');
		DOM["end-time"].html("End time : <b> " +  endTime  + " </b><br/>");
		
		$("#startInput" + dayID).bind("propertychange input paste", function(e){
			var newText = $("#startInput" + dayID).val();
			
			if(controller.startChanged(dayID,newText)){
				$("#startInput" + dayID).addClass('valid-input');
				$("#startInput" + dayID).removeClass('invalid-input');
			}else{
				$("#startInput" + dayID).removeClass('valid-input');
				$("#startInput" + dayID).addClass('invalid-input');
			}
		});
		
		
		DOM["total-length"].html("Total Length : <b> " +  totalLength  + " min </b><br/>");
		
		// Time bar update
		var presentationTime 	= model.getDay(parameters.position).getLengthByType(0);
		var groupWorkTime 		= model.getDay(parameters.position).getLengthByType(1);
		var discussionTime 		= model.getDay(parameters.position).getLengthByType(2);
		var breakTime 			= model.getDay(parameters.position).getLengthByType(3);
		
		var totalTime = presentationTime + groupWorkTime + discussionTime + breakTime;
		

		
		if (totalTime == 0){
			$("#boxA" + dayID).css("width", 0);
			$("#boxB" + dayID).css("width", 0);
			$("#boxC" + dayID).css("width", 0);
			$("#boxD" + dayID).css("width", 0);
			$("#fullLineBar" + dayID).css("visibility", "hidden");
			$("#fullTimeBar" + dayID).css("visibility", "hidden");
		}
		else {
			$("#boxA" + dayID).css("width", (presentationTime/totalTime)*100 + "%");
			$("#boxB" + dayID).css("width", (groupWorkTime/totalTime)*100 + "%");
			$("#boxC" + dayID).css("width", (discussionTime/totalTime)*100 + "%");
			$("#boxD" + dayID).css("width", (breakTime/totalTime)*100 + "%");
			$("#fullTimeBar" + dayID).css("visibility", "visible");
			if (breakTime/totalTime*100 <= 30){
				$("#fullLineBar" + dayID).css("visibility", "visible");
			}
			else{
				$("#fullLineBar" + dayID).css("visibility", "hidden");
			};
		};
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
		
		//	Defining variables.
		var dayID = parameters.position;
		var CurrentDay = model.getDay(dayID);
		
		var startTime	 = CurrentDay.getStart();
		var endTime		 = CurrentDay.getEnd();
		var totalLength	 = CurrentDay.getTotalLength();
		
		var presentationTime 	= CurrentDay.getLengthByType(0);
		var groupWorkTime 		= CurrentDay.getLengthByType(1);
		var discussionTime 		= CurrentDay.getLengthByType(2);
		var breakTime 			= CurrentDay.getLengthByType(3);
		
		var totalTime = presentationTime + groupWorkTime + discussionTime + breakTime;
		
		//	Creating DOM-elements.
		DOM["container"] = $("<div>");
		DOM["container"].addClass("dayWrapper");
		
		DOM["meta-container"] = $("<div>");
		DOM["meta-container"].addClass("metaContainer");
		
		DOM["info-container"] = $("<div>");
		DOM["info-container"].addClass("infoContainer");
		
		DOM["start-time"] = $("<span>");
		DOM["start-time"].html('Start time : <input type="text" class="text-input" id="startInput' + dayID + '" value=' + startTime + '><br/>');
		
		DOM["end-time"] = $("<span>");
		DOM["end-time"].html("End time : <b> " +  endTime  + " </b><br/>");
		
		DOM["total-length"] = $("<span>");
		DOM["total-length"].html("Total Length : <b> " +  totalLength  + " min </b><br/>");
		
		DOM["day-header-container"] = $("<header>");
		DOM["day-header-container"].addClass("darkmarine boxHeader");
		DOM["day-header"] = $("<h1>");
		DOM["day-header"].html("Day  " + (parseInt(dayID) + 1));
		
		DOM["day-activity-list"] = $("<ul>");
		DOM["day-activity-list"].addClass("sortable dayActivityList");
		DOM["day-activity-list"].attr({
			"id" : "day-list-" + parameters.position
			
		});
		DOM["day-activity-list"].sortable({
			connectWith : ".sortable",
			update : function (e, ui) {
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
		this.addActivitiesToList(DOM["day-activity-list"], parameters.position);

		// Building time bar
		DOM["fullTimeBar"] = $("<div>");
		DOM["fullTimeBar"].addClass('fullTimeBar');
		DOM["fullTimeBar"].attr('id', 'fullTimeBar' + dayID);
		
		DOM["box-a"] = $("<div>");
		DOM["box-a"].addClass('boxA');
		DOM["box-a"].attr('id', 'boxA' + dayID);
		DOM["box-b"] = $("<div>");
		DOM["box-b"].addClass('boxB');
		DOM["box-b"].attr('id', 'boxB' + dayID);
		DOM["box-c"] = $("<div>");
		DOM["box-c"].addClass('boxC');
		DOM["box-c"].attr('id', 'boxC' + dayID);
		DOM["box-d"] = $("<div>");
		DOM["box-d"].addClass('boxD');
		DOM["box-d"].attr('id', 'boxD' + dayID);
		
		DOM["fullTimeBar"].append(DOM["box-c"]);
		DOM["fullTimeBar"].append(DOM["box-b"]);
		DOM["fullTimeBar"].append(DOM["box-a"]);
		DOM["fullTimeBar"].append(DOM["box-d"]);
		
		DOM["fullLineBar"] = $("<div>");
		DOM["fullLineBar"].addClass('fullLineBar');
		DOM["fullLineBar"].attr('id','fullLineBar' + dayID);
		
		DOM["lineLeft"] = $("<div>");
		DOM["lineLeft"].addClass('lineLeft');
		DOM["lineLeft"].attr('id','lineLeft' + dayID);
		DOM["lineRight"] = $("<div>");
		DOM["lineRight"].addClass('lineRight');
		DOM["lineRight"].attr('id','lineRight' + dayID);
		
		DOM["fullLineBar"].append(DOM["lineLeft"]);
		DOM["fullLineBar"].append(DOM["lineRight"]);

		//	Building view.
		DOM["info-container"].append(DOM['start-time']);
		DOM["info-container"].append(DOM['end-time']);
		DOM["info-container"].append(DOM['total-length']);
		DOM["info-container"].append(DOM["fullTimeBar"]);
		DOM["info-container"].append(DOM["fullLineBar"]);
		
		DOM["meta-container"].append(DOM['info-container']);
		
		DOM["day-header-container"].append(DOM["day-header"]);
		DOM["container"].append(DOM["meta-container"]);
		DOM["container"].append(DOM["day-header-container"]);
		DOM["container"].append(DOM["day-activity-list"]);
		
		$(document).ready(function() {
			// Bars initialization
			if (totalTime == 0){
				$("#boxA" + dayID).css("width", 0);
				$("#boxB" + dayID).css("width", 0);
				$("#boxC" + dayID).css("width", 0);
				$("#boxD" + dayID).css("width", 0);
				$("#fullLineBar" + dayID).css("visibility", "hidden");
				$("#fullTimeBar" + dayID).css("visibility", "hidden");
			}
			else {
				$("#boxA" + dayID).css("width", (presentationTime/totalTime)*100 + "%");
				$("#boxB" + dayID).css("width", (groupWorkTime/totalTime)*100 + "%");
				$("#boxC" + dayID).css("width", (discussionTime/totalTime)*100 + "%");
				$("#boxD" + dayID).css("width", (breakTime/totalTime)*100 + "%");
				$("#fullTimeBar" + dayID).css("visibility", "visible");
				if (breakTime/totalTime*100 <= 30){
					$("#fullLineBar" + dayID).css("visibility", "visible");
				}
				else{
					$("#fullLineBar" + dayID).css("visibility", "hidden");
				};
			};
			
			
			$("#startInput" + dayID).bind("propertychange keyup input paste", function(e){
			var newText = $("#startInput" + dayID).val();
				
			if(controller.startChanged(dayID,newText)){
				$("#startInput" + dayID).addClass('valid-input');
				$("#startInput" + dayID).removeClass('invalid-input');
			}else{
				$("#startInput" + dayID).removeClass('valid-input');
				$("#startInput" + dayID).addClass('invalid-input');
			}
			});
		});
		
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
			activities = model.getDay(position).getActivities();
		
		//	Defining color list
		colorList["Break"] = "yellow";
		colorList["Discussion"] = "orange";
		colorList["Group Work"] = "green";
		colorList["Presentation"] = "brown";	
		
		//	Clearing list.
		list.html("");
		
		//	Appending activities to list.
		for (activity in activities) {
			//	This is a scope-hack to create a new controller for each activity item.
			this.attachActivityItemViewController(colorList, activity, activities, list);

		};
	};
	this.attachActivityItemViewController = function (colorList, activity, activities, list) {
		//	Defining variables.
		var controller = new ActivityItemController(model),
			DOM = [];
			
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
			controller.activityItemClicked(DOM["span-description"], activities[activity]);
			
		});
		list.append(DOM["activity"]);
		
	};
};