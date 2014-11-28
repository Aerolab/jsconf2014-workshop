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
```

Before you continue, we recommend you open Gruntfile.js, and where it says

```
platforms: ['osx', 'win'], // You can add linux32 and linux64 as well
```

Leave *only the platform you are currently using* ('win' if you are on Windows, 'mac' if you are on Mac). This is so you'll download fewer assets.

After that, run

```
grunt build
```

Which will download all node-webkit binaries for the specified platforms (and build the app, which you don't actually need right now).

Alternatively, you can download [the source with all the binaries](https://s3.amazonaws.com/jsconf-workshop/node-webkit-workshop.zip) if you are having trouble with npm/grunt.

We are mainly using Express, Socket.io, Grunt and Grunt Node-Webkit Builder.


## Platforms

The workshop has been tested on *Windows 7 / 8* and *MacOS Mavericks / Yosemite*.

Node-Webkit is a bit temperamental under Linux, but you can give it a shot if you want.


# The Docs

[The Slides](https://github.com/Aerolab/jsconf2014-workshop/blob/master/Node-Webkit-Workshop.pdf?raw=true)

[Node-Webkit](https://github.com/rogerwang/node-webkit/wiki)

[Express](http://expressjs.com/starter/hello-world.html)

[Socket.io](http://socket.io/docs/)
