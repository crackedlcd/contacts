module.exports = function(grunt) {
  grunt.initConfig({

    jshint: {
      all: ['public/src/js/**/*.js']
    },

    uglify: {
      build: {
        files: {
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

    'bower-install-simple': {
      options: {
        color: true,
      },
      "prod": {
        options: {
          production: true
        }
      },
      "dev": {
        options: {
          production: false
        }
      }
    },

    concat: {
      angular: {
        files: {
          'public/dist/vendor/angular.js': ['public/src/vendor/angular/angular.js']
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
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-bower-install-simple');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['sass', 'cssmin', 'jshint', 'uglify', 'concurrent']);
  grunt.registerTask('bower', ['bower-install-simple', 'concat']);
}