console.log "Building with Grunt"
module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)

  grunt.initConfig {
    copy: {
      requirejs: {
        files: [
          {expand: true, cwd: 'app', src: 'components/requirejs/**',  dest: 'output'}
        ]
      }
    },
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
          mainConfigFile: "app/js/main.js",
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

  grunt.registerTask 'build', ['copy', 'less', 'requirejs'] # [ 'browserify', 'less', 'copy']
  grunt.registerTask 'default', [ 'build', 'watch' ]
