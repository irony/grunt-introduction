module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      build: {
        src: ['public/javascript/*.js'],
        dest: 'public/build/app.js',
      },
    },

    watch: {
      scripts: {
        files: 'public/**/*.js',
        tasks: ['concat'],
        options: {
          interrupt: true,
          livereload: true,
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

};