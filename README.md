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

## Googla bibliotek du vill lägga in, t ex grunt concat:

      $ npm install grunt-contrib-concat --save-dev

Lägg in task i Gruntfile.js


      grunt.initConfig({

        concat: {
          build: {
            src: ['public/javascript/*.js'],
            dest: 'public/build/app.js',
          },
        }

      });

      grunt.loadNpmTasks('grunt-contrib-concat');

Testa genoom att skriva `grunt concat`


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

## Användningsområden

Minifiera kod, använda LESS och SASS. Automatiskt köra tester i bakgrunden. Byggscript och deployment. Skapa manifest, komprimera bilder, skapa sprites. 

För att automatisera flöden kan man gruppera uppgifter på detta sätt

``` javascript
   grunt.registerTask('default', ['copy', 'useminPrepare', 'usemin', 'concat', 'uglify', 'cssmin', 'jshint', 'mocha', 'regarde']);
    grunt.registerTask('build', ['copy', 'useminPrepare', 'usemin', 'concat', 'uglify', 'cssmin', 's3']);
```

## Bra exempelbibliotek


### JSHint
Testar syntax i javascript.

[grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)


### Usemin
Byter ut inkluderade filer i index.html mot ihopslagna filer. Fördelen är att man kan bestämma ordning på inkluderade filer och att man i utvecklingsmiljön inte behöver debugga ihopslagen kod.

[grunt-usemin](https://github.com/yeoman/grunt-usemin)

``` html
    <!-- build:css build/style.css -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/font-awesome.css">
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
    <!-- endbuild -->
```

``` html
    <!-- build:js build/assets.js -->
    <script src="scripts/libs/jquery-1.7.1.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="scripts/libs/angular.js" type="text/javascript"></script>
    <!-- endbuild -->
```

``` javascript
    copy: {
        main: {
            files: [
                { src: ['index.html'], dest: 'build.html' }
            ] // we don't want to replace our index file so we make a copy of it before minifying it
        }
    },

    // identify build blocks
    'useminPrepare': {
        html: 'build.html'
    },

    usemin: {
        html: 'build.html'
    },
```


### Uglify
Minifierar och optimerar all källkod. Körs lämpligtvis efter usemin.
[uglify-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)

### S3
Automatiskt publicerar filer till S3 för snabb leverans. Alla filer kan även gzippas innan de laddas upp till s3.
[grunt-s3](https://github.com/pifantastic/grunt-s3)



### Grunt-manifest
Genererar manifestfil automatiskt. Alla filer som definieras i manifestet kommer cachas till att manifestet ändras. Dvs till nästa release.
[grunt-manifest](https://github.com/gunta/grunt-manifest)

``` javascript
    manifest: {
      generate: {
        options: {
          fallback: ['/ /offline.html'],
          timestamp: true
        },
        src: [
            'build/*',
        ],
        dest: 'application.appcache'
      }
    },
``

### Grunt-install-dependencies
Kör `npm install` som ett jobb i grunt. Fördelen är att man då bara behöver uppdatera packages.json när man har nya bibliotek och att `grunt deploy` kan köras själv i deploymentscript. Obs - lite catch22 innan man kört `npm install -g grunt-instal-depencies` på byggservern.

[grunt-install-dependencies](https://github.com/ahutchings/grunt-install-dependencies)
