/*
 *	DragAndDropController (model).
 *	This is a controller class for drag and drop functions.
 *	----------------------------------------------------------
 */
function DragAndDropController (model, id) {
	"use strict";
	//	Defining variables.
	this.allowedToUpdate = true;
	this.started = false;
	
	/*
	 *	update(e, ui, target).
	 *	...
	 */
	this.update = function (e, ui, target, prevPos) {
		//	Defining variables
		var arg = [];
		if (this.allowedToUpdate) {
			//	//console.log("---"); //console.log(ui.item);
			//	//console.log(ui.item.index()); //console.log(target);
			//	Updating model (sorting inside).
			//	-----------------------------------
			arg["old-day"] = id;
			arg["old-position"] = prevPos;
			arg["new-day"] = id;
			arg["new-position"] = ui.item.index();

			if (ui.sender) {
				//console.log(ui);
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
	 *	When dragging an item in to the sortable container, updating is allowed
	 *	again.
	 */
	this.onOver = function (e, ui) {
		if (this.started) {
			this.allowedToUpdate = true;
			
		};
	};
	
	/*
	 *	onOut(e, ui)
	 *	When dragging an item out of the sortable container, that container
	 *	is no longer allowed to update the model.
	 */
	this.onOut = function (e, ui) {
		if (this.started) {
			//console.log("onOut");
			this.allowedToUpdate = false;
		};
	};
	
	/*
	 *	setStart(e, ui)
	 *	When sorting is started from this container this.started
	 *	is set to true. This allowes onOver and onOut method to operate.
	 */	
	this.setStart = function (e, ui) {
		//console.log("setStart");
		this.started = true;

	};
};