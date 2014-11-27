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

We are mainly using Express, Socket.io, Grunt and Grunt Node-Webkit Builder.
