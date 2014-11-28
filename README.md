Node-Webkit Workshop
====================

# Setup

First of all, make sure you have [Node.js](http://nodejs.org/) installed (including npm).
We'll need a few global dependencies (sudo is not required if you are using Windows):

```
sudo npm install node-gyp -g
sudo npm install grunt-cli -g
```

And then install the dependencies for the project:

```
npm install
grunt build
```

Alternatively, you can download [the source with all the binaries](https://s3.amazonaws.com/jsconf-workshop/node-webkit-workshop.zip) if you are having trouble with npm/grunt.

We are mainly using Express, Socket.io, Grunt and Grunt Node-Webkit Builder.


## Platforms

The workshop has been tested on *Windows 7 / 8* and *MacOS Mavericks / Yosemite*.

Node-Webkit is a bit temperamental under Linux, but you can give it a shot if you want.


# The Docs

[Node-Webkit](https://github.com/rogerwang/node-webkit/wiki)

[Express](http://expressjs.com/starter/hello-world.html)

[Socket.io](http://socket.io/docs/)
