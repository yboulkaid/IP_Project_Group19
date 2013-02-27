function MyView (viewArg, controller, model) {
	"use strict";
	//	Defining variables
	var DOM = [];
		
	//	Observer implementation.
	//	---------------------------
	model.addObserver(this);
	
	this.update = function (arg) {
		DOM["p"].html(model.getCounter());
		
	};
	
	return {
		init : function () {
			//	Building view.
			//	-----------------		
			DOM["view-container"] = $("<div>");
			DOM["view-container"].attr("id", viewArg.id);
			
			DOM["button-plus"] = $("<button>");
			DOM["button-plus"].html("+" + viewArg.step);
			DOM["button-plus"].click(function(){controller.add(viewArg.step)});
			
			DOM["button-minus"] = $("<button>");
			DOM["button-minus"].html("-" + viewArg.step);
			DOM["button-minus"].click(function(){controller.subtract(viewArg.step)});
			
			DOM["p"] = $("<p>");
			DOM["p"].html(model.getCounter());
			
			DOM["view-container"].append(DOM["p"]);
			DOM["view-container"].append(DOM["button-plus"]);
			DOM["view-container"].append(DOM["button-minus"]);
			
			//	Returning View
			return DOM["view-container"];
		}
	};
};
