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
    shell: {
      content: {
        command: "./nanoc"
      }
    }
    watch: {
      less: {
        files: ['app/less/**'],
        tasks: 'less'
      },
      content: {
        files: ['content/**', 'layouts/**'],
        tasks: 'shell:content'
      }
    }
  }

  grunt.registerTask 'build', ['less'] # [ 'browserify', 'less', 'copy']
  grunt.registerTask 'default', [ 'build', 'watch' ]
