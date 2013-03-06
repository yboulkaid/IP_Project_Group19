/*
 *	My Agenda Planner
 *	This is the "general controller" of the application. It controlls
 *	which views are displayed, some generic statuses and so forth.
 *
 *	@Parameter 1	( model | object Model | ... )
 *	-------------------------------------------------
 */
function MyAgendaPlanner (model) {
	"use strict";
	/*
	 *	Views & view-object.
	 *	the views-array contains view-objects to be sent through the displayView-method.
	 *
	 * 	view-object:
	 * 	{
	 * 		type : "view-type",
	 * 		view : reference to view class,
	 * 		controller : reference to controller class
	 *	}
	 */
	this.views = [];
	
	/*
	 *	init ().
	 *	This method is used to 'start' the application.
	 *	--------------------------------------------------
	 */
	this.init = function () {
		console.log("myAgendaPlanner - init()");
		//	Initalizing views by pushing view-objects to the views-array.
		this.views["main-view"] = {
			type : "main-view",
			view : MainView,
			controller : MainViewController

		};
		//	Displaying default view.
		this.displayView({}, this.views["main-view"], "my-agenda-planner");
	};
	/*
	 *	displayView (viewParameters, viewObject, targetDOM).
	 *	This method is used to display a view somewhere in the HTML document.
	 *	Each view passed through the method must have a method called init which returns a DOM-element.
	 * 
	 *	@Parameter 1	(viewParameters | object {}	| This object should contain view-specific attributes.)
	 *	@Parameter 2	(viewObject 	| object {}	| view-object, read documentation above.)
	 *	@Parameter 3	(targetDOM		| string	| "DOM-id", without the #.)
	 *	--------------------------------------------------------------------------
	 */
	this.displayView = function (viewParameters, viewObject, targetDOM) {
		console.log("myAgendaPlanner - displayView()");
		//	Defining variables.
		var controller,
			view;
			
		//	Creating new view & controller.
		controller = new viewObject.controller(model);
		view = new viewObject.view(viewParameters, controller, model);
		
		//	Displaying view by pushing returned DOM-element to targetDOM.
		$("#" + targetDOM).append(view.init());
		
	};
};