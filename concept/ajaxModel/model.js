/*function Model () {
	this.counter = 0;
	
	this.setCounter = function (value) {
		this.counter = value;
		this.notifyObservers();
		
	};
	this.getCounter = function () {
		return this.counter;
		
	};
	
	//*** OBSERVABLE PATTERN ***
	this._listeners = [];
	
	this.notifyObservers = function (args) {
			for (var i = 0; i < this._listeners.length; i++){
				this._listeners[i].update(args);
			}
	};
	
	this.addObserver = function (listener) {
			this._listeners.push(listener);
	};
	//*** END OBSERVABLE PATTERN ***
};*/

function Model () {
	"use strict";
	//	Defining private variables
	var counter = 0,		//	Just a random counter.
		listeners = [];		//	Used for observable pattern implementation.
	
	return {
		//	Setters & Getters
		getCounter : function () {
			return counter;
			
		},
		setCounter : function (val) {
			counter = val;
			this.notifyObservers();
			
		},
		//	Observable pattern implementation.
		//	-------------------------------------
		notifyObservers : function (args) {
			var i;		
			for (i = 0; i < listeners.length; i++) {
				listeners[i].update(args);
				
			};
		},
		addObserver : function (listener) {
			listeners.push(listener);
			
		}
	};
};
