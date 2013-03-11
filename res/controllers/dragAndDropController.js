/*
 *	DragAndDropController (model).
 *	This is a controller class for drag and drop functions.
 * 
 *	@Parameter 1	(model | object Model | ... ).
 *	-------------------------------------------------
 */
function DragAndDropController (model, id) {
	"use strict";
	//	Defining variables.
	this.allowedToUpdate = true;
	this.started = false;
	this.startPos;
	
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
		//	Defining variables
		var arg = [];
		if (this.allowedToUpdate) {
			console.log("---"); console.log(ui.item);
			console.log(ui.item.index()); console.log(target);
			//	Updating model (sorting inside).
			//	-----------------------------------
			arg["old-day"] = id;
			arg["old-position"] = this.startPos;
			arg["new-day"] = id;
			arg["new-position"] = ui.item.index();
			
			if (ui.sender) {
				console.log(ui.sender.context.id);
				//	Updating model (between lists).
				//	----------------------------------
				if (ui.sender.context.id == "activities-list") {
					arg["old-day"] = null;
					
				} else {
					arg["old-day"] = (ui.sender.context.id).slice(9);
					
				}
			}
			//	Updating.
			model.moveActivity(arg["old-day"], arg["old-position"], arg["new-day"], arg["new-position"]);
			
			//	Resetting started and allowedToUpdate
			this.started = false;
			this.allowedToUpdate = true;
		};
	};
	
	/*
	 *	onOver(e, ui)
	 *	...
	 */
	this.onOver = function (e, ui) {
		if (this.started) {
			this.allowedToUpdate = true;
			
		};
	};
	
	/*
	 *	onOut(e, ui)
	 *	...
	 */
	this.onOut = function (e, ui) {
		if (this.started) {
			console.log("onOut");
			this.allowedToUpdate = false;
			
		};
	};
	
	/*
	 *	setStart(e, ui)
	 *	When sorting is started from this container this.started
	 *	is set to true. This allowes onOver and onOut method to operate.
	 */	
	this.setStart = function (e, ui) {
		console.log("setStart");		
		this.startPos =  ui.item.index();		
		this.started = true;
		
	};
};