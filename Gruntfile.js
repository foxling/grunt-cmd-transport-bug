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
              src : 'v/sub.js',
              dest : 'build/'
          }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-cmd-transport');
  grunt.registerTask('test', ['transport']);
};
