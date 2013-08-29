Hur sätter man upp Grunt?
====

En liten instruktion för att sätta upp Grunt med vanligaste uppgifterna.


## Installera nodejs och express?


      npm install express
      express .



      npm install
      npm install -g grunt-cli
      npm install 

Skapa Gruntfile.js

      module.exports = function(grunt) {


      };

## Googla grunt concat

npm install grunt-contrib-concat --save-dev


      grunt.initConfig({

        concat: {
          build: {
            src: ['public/javascript/*.js'],
            dest: 'public/build/app.js',
          },
        }

      });

      grunt.loadNpmTasks('grunt-contrib-concat');


## Installera grunt-contrib-watch

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

Lägg in denna i layout.jade
    
    <script src="http://localhost:35729/livereload.js"></script>

Jade:

    script(src="http://localhost:35729/livereload.js")


## Bra exempel


