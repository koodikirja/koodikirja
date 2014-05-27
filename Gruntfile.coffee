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
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "app/js",
          mainConfigFile: "main.js",
          name: "main",
          out: "output/koodikirja.js"
        }
      }
    },
    shell: {
      content: {
        command: "./nanoc"
      }
    }
    watch: {
      js: {
        files: ['app/js/**'],
        tasks: 'requirejs'
      },
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

  grunt.registerTask 'build', ['less', 'requirejs'] # [ 'browserify', 'less', 'copy']
  grunt.registerTask 'default', [ 'build', 'watch' ]
