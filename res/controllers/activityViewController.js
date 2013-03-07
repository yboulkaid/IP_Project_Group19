/*
 *	activityViewController (model).
 *	This is a controller class for the activity view.
 * 
 *	@Parameter 1	(model | object Model | ... ).
 *	-------------------------------------------------
 */
function ActivityViewController (model) {
	"use strict";
	
	/*
	 *	init ().
	 * 	This method is triggered on creation to initialize the controller.
	 *	(it can be removed if not used).
	 *	------------------------------------
	 */
	this.init = (function() {
		console.log("activityViewController - init()");
		
	}());
	
	/*
	 *	addActivityButtonClicked ().
	 *	...
	 */
	this.addActivityButtonClicked = function () {
		console.log("addActivityButtonClicked()");
		
	};
};