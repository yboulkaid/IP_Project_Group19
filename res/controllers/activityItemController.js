/*
 *	ActivityItemController (model).
 *	This is a controller class for drag and drop functions.
 * 
 *	@Parameter 1	(model | object Model | ... ).
 *	-------------------------------------------------
 */
function ActivityItemController (model) {
	"use strict";
	this.clicked = false;
	
	this.activityItemClicked = function (DOM, activity) {
		if (this.clicked) {
			//	To close description.
			this.clicked = false;
			DOM.html("");
			DOM.css({
				"display" : "none"
				
			});
			
		} else {
			//	To open description.
			this.clicked = true;
			DOM.append(activity.getDescription());
			DOM.css({
				"display" : "block"
				
			});
			
		};
	};
};