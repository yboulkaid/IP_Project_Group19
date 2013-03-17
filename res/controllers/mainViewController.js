/*
 *	MainViewController (model).
 *	This is a controller class for the main view.
 *	-------------------------------------------------
 */
function MainViewController (model, app) {
	"use strict";
	
	/*
	 *	addDayButtonClicked ().
	 *	This method is triggered when "add day"-button is clicked.
	 *	--------------------------------------------------------------
	 */
	this.addDayButtonClicked = function () {
		model.addDay();
	};
};