Boxes = function () {
	"use strict";
	//	Defining variables
	var boxes = [];
	
	return {
		init : function () {
			//	Creating boxes
			boxes["a"] = new BoxModel("a");
			boxes["b"] = new BoxModel("b");
			boxes["c"] = new BoxModel("c");
			
			//	Creating an item and placing it
			//	in one of the boxes.
			boxes["a"].addItem(new ItemModel("item-a"));
			boxes["a"].getItemFromBox();
		}
	};
};
