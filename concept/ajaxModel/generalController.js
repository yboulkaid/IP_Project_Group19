function GeneralController (model) {
	"use strict";
	//	Defining variables
	var views = [];
	
	return {
		init : function() {
			//	Adding view-objects to views-array.
			views["myView"] = {
				type : "myView",
				view : MyView,
				controller : MyViewController
				
			};
			
			//	Default
			this.displayView({id : "myViewID", step : 1}, views["myView"], "target-container");
			this.displayView({id : "myViewID-another-instance", step : 2}, views["myView"], "target-container");
		},
		displayView : function(viewArg, viewObject, targetDOM) {
			//	Defining variables
			var controller,
				view;
				
			//	Creating new view and controller
			controller = new viewObject.controller(model);
			view = new viewObject.view(viewArg, controller, model);
			
			//	Displaying Object
			$("#" + targetDOM).append(view.init());
		}
	};
};
