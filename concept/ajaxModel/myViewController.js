function MyViewController (model) {
	"use strict";
	
	return {
		add : function (step) {
			model.setCounter(model.getCounter() + step);	
				
		},
		subtract : function (step) {
			model.setCounter(model.getCounter() - step);
			
		}
	}
};