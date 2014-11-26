/**
 * Node-Webkit-Builder Manifest Docs are available at
 * https://github.com/mllrsohn/node-webkit-builder#manifest-options
 *
 * Run "grunt build" to download the Node-Webkit binaries and package the app
 */

module.exports = function(grunt) {

  grunt.initConfig({

    // Node-Webkit Builder
    nodewebkit: {
      options: {

        version: "0.10.5", // Node-webkit version
        build_dir: "./build",
        cache_dir: "./build/cache",

        platforms: ['osx', 'win'], // You can add linux32 and linux64 as well

        // Don't use zips on Mac (it impacts load times)
        macZip: false

      },
      src: ["./package.json", "./assets/**", "./app/**", "./node_modules/**", "!./node_modules/grunt*/**"]
    },

    // We need to copy FFMPEG libraries to add support for videos and mp3s
    copy: {
      main: {
        files: [
          {
            src: 'libraries/win/ffmpegsumo.dll',
            dest: 'build/cache/0.10.5/win/ffmpegsumo.dll',
            flatten: true
          },
          {
            src: 'libraries/osx/ffmpegsumo.so',
            dest: 'build/cache/0.10.5/osx/node-webkit.app/Contents/Frameworks/node-webkit Framework.framework/Libraries/ffmpegsumo.so',
            flatten: true
          }
        ]
      }
    }

  });


  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-node-webkit-builder");

  grunt.registerTask("build", ["nodewebkit", "copy"]);

 };