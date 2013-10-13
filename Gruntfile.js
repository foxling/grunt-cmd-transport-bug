module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    transport: {
      options: {
        debug: false
      },
      test: {
        files : [
          {
              src : 'app/**/*',
              dest : 'build/'
          }
        ]
      }
    },

    concat: {
      main: {
        options : {
          include : 'relative'
        },
        files: [
          {
            'dist/app/app.js': ['build/app/app.js']
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-cmd-transport');
  grunt.loadNpmTasks('grunt-cmd-concat');
  grunt.registerTask('test', ['transport', 'concat']);
};
