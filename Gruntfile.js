module.exports = function(grunt) {
  grunt.initConfig({
    
    jshint: {
      all: ['public/src/js/**/*.js']
    },

    uglify: {
      build: {
        files {
          'public/dist/js/app.min.js': ['public/src/js/**/*.js']
        }
      }
    },

    sass: {
      dist: {
        files: {
          'public/dist/css/main.css': 'public/src/css/main.css'
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'public/dist/css/main.min.css': 'public/dist/css/main.css'
        }
      }
    },

    watch: {
      css: {
        files: ['public/src/css/**/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      js: {
        files: ['public/src/js/**/*.js'],
        tasks: ['jshint', 'uglify']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    }
  });
}