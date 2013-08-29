module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      build: {
        src: ['public/javascripts/*.js'],
        dest: 'public/build/app.js',
      },
    },

    watch: {
      scripts: {
        options: {
          interrupt: true,
          livereload: true,
        },
        files: ['Gruntfile.js', 'public/**/*.js', 'views/*.jade'],
        tasks: ['default'],
      },
    },

    jshint: {
      options: {
        globalstrict: true,
        globals: {
          $: true,
          angular: true
        }
      },
      all: ['public/javascripts/*.js']
    },

    uglify: {
      all: {
        files: {
          'public/build/app.min.js': ['public/build/app.js']
        }
      }
    }


  });

  grunt.loadNpmTasks('grunt-install-dependencies');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-manifest');

  grunt.registerTask('default', ['install-dependencies', 'jshint', 'concat', 'uglify', 'watch']);


};