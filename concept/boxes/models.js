BoxModel = function (id) {
	"use strict";
	//	Defining variables
	var itemsInBox = [];
	
	return {
		addItem : function (item) {
			item.setParent(this);
			itemsInBox.push(item);
			
			//	Logging.
			console.log("item with id ' " + item.getId() + " ' added to box.")
			
		},
		removeItem : function (itemId) {
			var items;
			for (items in itemsInBox) {
				if (itemsInBox[items].getId() === itemId) {
					delete itemsInBox[items];
					
					//	Logging.
					console.log("item with id ' " + itemId + " ' removed from box.")
					
				}
			}
		},
		getId : function () {
			return id;
			
		},
		getItemFromBox : function () {
			//	Defining variables
			var item;
			
			if (itemsInBox.length >= 1) {
				item = itemsInBox[0];
				//	Logging
				console.log("getting item with id ' " + itemsInBox[0].getId() + " ' from box.")
				
				//	Removing item from box.
				this.removeItem(item.getId());
				
				return item;
			}
		}
	};
};

ItemModel = function (id) {
	"use strict";
	//	Defining variables
	var parent;
	
	return {
		setParent : function (newParent) {
			parent = newParent;
			
		},
		getParent : function () {
			return parent;
			
		},
		getId : function () {
			return id;
			
		}
	};
};
