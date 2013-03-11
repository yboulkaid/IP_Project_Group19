/*
 *	DragAndDropController (model).
 *	This is a controller class for drag and drop functions.
 * 
 *	@Parameter 1	(model | object Model | ... ).
 *	-------------------------------------------------
 */
function DragAndDropController (model) {
	"use strict";
	
	/*
	 *	init ().
	 * 	This method is triggered on creation to initialize the controller.
	 *	(it can be removed if not used).
	 *	------------------------------------
	 */
	this.init = (function() {
		console.log("DragAndDropController - init()");
		
	}());
	
	/*
	 *	update(e, ui, target).
	 *	...
	 */
	this.update = function (e, ui, target) {
		console.log("---");
		console.log(ui.item);
		console.log(ui.item.index())
		console.log(target);
		if (ui.sender) {
			console.log(ui.sender);
				
		}		
	};
};