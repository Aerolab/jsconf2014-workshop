
var Database = new (function(){
	
	// Local nosql database path
	var nosql = require('nosql').load(process.cwd()+'/app/db/db.nosql');
	
	// Connects to the local nosql database
	this.init = function(){
		var custom = nosql.custom();
		if(custom == undefined) {
			nosql.description('Youtubetv workshop');
			nosql.custom({ key: '123456' });
		}
		nosql.on('load', function(){
			console.log('nosql ready');
		});
	};
	
	// Add video to local nosql database
	this.add = function(obj, cb) {
		// Checks if the video is already in our database 
		this.exists(obj.id, function(exists){
			if(!exists) {
				// Addd the video if it isnt in the local nosql database
				nosql.insert(obj, cb);
			}
		});
	}
	
	// Search for a video in the local nosql database
	this.exists = function(id, cb) {
		var find = function(obj) {
			if(obj.id == id) return obj;
		}
		nosql.all(find, function(r){
			cb(r.length ? true : false);
		});
	}

	// Return all the videos in the local nosql database
	this.getAll = function(cb) {
		nosql.all(function(r) {
			cb(r.reverse());
		});
	}
	
	// Search for a video in the local nosql database
	this.search = function(q, cb) {
		var find = function(obj){
			if(obj.title.toLowerCase().indexOf(q) !== -1) { 
				return obj;
			}
		}
		nosql.all(find, function(r){
			cb(r.reverse());
		});
	}

});
Database.init();
