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
      "dev": {
        dist: {
          files: {
            'public/src/css/main.css': 'public/src/css/main.scss'
          }
        }
      },
      "prod": {
        dist: {
          files: {
            'public/dist/css/main.css': 'public/src/css/main.scss'
          }
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
      'dev': {
        angular: {
          files: {
            'public/dist/vendor/angular.js': ['public/src/vendor/angular/angular.js']
          }
        }
      },
      'prod': {
        angular: {
          files: {
            'public/dist/vendor/angular.min.js': ['public/src/vendor/angular/angular.min.js']
          }
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

  grunt.registerTask('default', ['sass:prod', 'cssmin', 'jshint', 'uglify', 'concurrent']);
  grunt.registerTask('production', ['sass:prod', 'cssmin', 'jshint', 'uglify', 'bower-install-simple:prod', 'concat:prod', 'concurrent'])
  grunt.registerTask('bower', ['bower-install-simple:dev', 'concat:dev']);
  grunt.registerTask('dev', ['sass:dev', 'jshint', 'concurrent']);
}