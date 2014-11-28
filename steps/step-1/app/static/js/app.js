/**
 * This is going to be the core of our desktop app.
 */

// Node-Webkit Stuff
var gui = require('nw.gui');
var app = gui.App;
var win = gui.Window.get();


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

  // Dev Tools!
  $('nav .tools').on('click', function(event){
    event.preventDefault();
    win.showDevTools();
  });

});