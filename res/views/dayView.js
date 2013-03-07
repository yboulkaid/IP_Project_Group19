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
		//	Defining variables.
		var DOM = [];
		
		//	Creating DOM-elements.
		DOM["container"] = $("<div>");

		//	Building view.
		
		//	Returning.
		console.log(DOM["container"]);
		return DOM["container"];
		
	};
};