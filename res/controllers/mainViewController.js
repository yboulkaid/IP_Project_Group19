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
		model.addDay();
		
	};
	
	/*
	 *	windowScroll ().
	 *	This method is triggered when the window is scrolled.
	 *	--------------------------------------------------------
	 */
	this.windowScroll = function () {
		//	Defining variables.
		var addDayPaddingDefault = 41,
			addDayPadding,
			dayOffset;
			
		//	Calculating new padding.
		if (window.pageYOffset == 0) {
			addDayPadding = addDayPaddingDefault;
			
		} else {
			dayOffset = Math.floor(model.getDays().length/3) * 8;
			//console.log(dayOffset);
			addDayPadding = addDayPaddingDefault + (window.pageYOffset/16) + dayOffset;
			
		};
		$("#add-day-button-container").css({
			"padding-top" : addDayPadding + "em"
			
		});
	};
};