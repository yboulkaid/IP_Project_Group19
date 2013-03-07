/*
 *	MainViewController (model).
 *	This is a controller class for the main view.
 * 
 *	@Parameter 1	(model | object Model | ... ).
 *	-------------------------------------------------
 */
function MainViewController (model, app) {
	"use strict";
	
	/*
	 *	init ().
	 * 	This method is triggered on creation to initialize the controller.
	 *	(it can be removed if not used).
	 *	------------------------------------
	 */
	this.init = (function() {
		console.log("mainViewController - init()");
		
	}());
	
	/*
	 *	addDayButtonClicked ().
	 *	This method is triggered when "add day"-button is clicked.
	 *	--------------------------------------------------------------
	 */
	this.addDayButtonClicked = function () {
		console.log("addDayButtonClicked()");
		
	};
};