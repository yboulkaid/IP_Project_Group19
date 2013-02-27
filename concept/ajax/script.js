function GeneralController (ajaxRequest) {
	"use strict";
	
	return {
		setView: function (view, target) {
			ajaxRequest.getView(view, target);
			
		}
	}
};

function Ajax () {
	"use strict";
	
	return {
		getView: function (view, target) {
			var str = view + ".html #" + view;
			$("#" + target).load(str);
			
		}
	};
};

$(document).ready(function() {
	"use strict";
	
	//	Execute
	var generalController = new GeneralController(new Ajax());
	
	//	Controller
	$("#option1").click(function () {
		generalController.setView("red-view", "target-container");
		
	});
	$("#option2").click(function () {
		generalController.setView("blue-view", "target-container");
		
	});
});