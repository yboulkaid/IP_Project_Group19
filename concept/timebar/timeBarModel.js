function timeBarModel () {
	
		
		
		
		
		
	}
	
		
		
	
	
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
};

var t = new timeBarModel();

