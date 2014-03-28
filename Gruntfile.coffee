console.log "Building with Grunt"
module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)

  grunt.initConfig {
    less: {
      all: {
        files: {
          'output/koodikirja.css': ['app/less/koodikirja.less']
        }
      }
    }
    copy: {
      html: {
        files: [
          {expand: true, cwd: 'app/', src: '**/*.html', dest: 'public/'}
        ]
      }
    }
    watch: {
      scripts: {
        files: ['app/script/**'],
        tasks: 'browserify'
      },
      less: {
        files: ['app/less/**'],
        tasks: 'less'
      },
      html: {
        files: ['app/**/*.html'],
        tasks: 'copy'
      }
    }
  }

  grunt.registerTask 'build', ['less'] # [ 'browserify', 'less', 'copy']
  grunt.registerTask 'default', [ 'build', 'watch' ]
