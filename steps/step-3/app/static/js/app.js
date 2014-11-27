/**
 * This is going to be the core of our desktop app.
 */

// Node-Webkit Stuff
var gui = require('nw.gui');
var app = gui.App;
var win = gui.Window.get();

// Show Dev Tools on start
win.showDevTools();

// Fullscreen Menu Item
var gui = require('nw.gui');
var win = gui.Window.get();

var menuBar = new gui.Menu({type:'menubar'});
var fullscreenMenuItem = new gui.MenuItem({
  label: 'Fullscreen', 
  click: function(){ 
    win.enterFullscreen(); 
  }
});
menuBar.append(fullscreenMenuItem);
win.menu = menuBar;

// win.leaveFullscreen();

// Custom Title bar
$(document).ready(function(){

  // Quit!
  $('nav .close').on('click', function(event){
    event.preventDefault();
    app.quit();
  });

});



// Express is a web server, will will allow us to create a small web app with which to control the player
var express = require('express');
var expressApp = express();
var server = require('http').Server(expressApp);

// We'll be opening up our web server on Port 8000 (which doesn't require root privileges)
// You can access this server at http://127.0.0.1:8000
var serverPort = 8000;
server.listen(serverPort);

// The web server will serve the assets needed for our remote control.
// These assets are in the remote folder
expressApp.use('/', express.static('app/remote'));



// Socket.io for WebSockets
var io = require('socket.io')(server);


// Socket.io handles the communication between the remote and our app in real time, 
// so we can instantly send commands from a computer to our remote and back
io.on('connection', function (socket) {

  // When a remote connects to the app, let it know immediately the current status of the video (play/pause)
  socket.emit('statusChange', Youtube.status);

  // This is what happens when we receive the watchVideo command (picking a video from the list)
  socket.on('watchVideo', function (video) {
		// add video to local nosql database
		Database.add(video);
    // video contains a bit of info about our video (id, title, thumbnail)
    // Order our Youtube Player to watch that video
    Youtube.watch(video.id);
  });

  // These are playback controls. They receive the “play” and “pause” events from the remote
  socket.on('play', function () {
    Youtube.play();
  });
  socket.on('pause', function () {
    Youtube.pause();
  });

	socket.on('get history', function(){
		Database.getAll(function(all){
			socket.emit("history", all);
		});
	});

	socket.on("search history", function(q){
		Database.search(q.q, function(all){
			socket.emit("history", all);
		});
	});

});


// Notify all the remotes when the playback status changes (play/pause)
// This is done with io.emit, which sends a message to all the remotes
Youtube.onStatusChange = function(status) {
  io.emit('statusChange', status);
};

