// Generated on 2014-03-28 using generator-phaser-official 0.0.8-rc-2
'use strict';
var config = require('./config.json');
var LIVERELOAD_PORT = 35729;

module.exports = function (grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'dist'
        }
      }
    },
    copy: {
      dist: {
        files: [
          // includes files within path and its sub-directories
          { expand: true, src: ['assets/**'], dest: 'dist/' },
          { expand: true, flatten: true, src: ['game/plugins/*.js'], dest: 'dist/js/plugins/' },
          { expand: true, flatten: true, src: ['bower_components/**/build/*.js'], dest: 'dist/js/' },
          { expand: true, flatten: true, src: ['node_modules/phaser/build/*.js'], dest: 'dist/js/' },
          { expand: true, src: ['css/**'], dest: 'dist/' },
          { expand: true, src: ['index.html'], dest: 'dist/' }
        ]
      }
    },
    watch: {
      src: {
        files: '**/*.js',
        tasks: ['build'],
        options: { livereload: true }
      },
    },
    browserify: {
      build: {
        src: ['game/main.js'],
        dest: 'dist/js/game.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('build', ['browserify','copy']);
  grunt.registerTask('start-server', ['connect:server', 'watch']);
  grunt.registerTask('serve', ['build', 'start-server']);
  grunt.registerTask('default', ['serve']);
  grunt.registerTask('prod', ['build', 'copy']);
};
