# encoding: utf-8
source 'http://rubygems.org'

ruby "1.9.3"

# Thin to serve content from Heroku
gem 'thin'
gem 'rack'
gem 'rack-rewrite', :require => 'rack-rewrite'
gem 'rack-contrib', :require => 'rack/contrib'

# Mime-types for handling mime types
gem 'mime-types', :require => 'mime/types'

group :development do
  # Nanoc for compiling dynamic code
  gem 'nanoc'
  gem 'less'
  gem 'therubyracer'

  # For spawning a file server in any directory and deploying to Heroku
  gem 'adsf'

  # HAML, Compass, Markdown and Builder for handling all important formats
  gem 'kramdown'

  # YUI Compressor to compress JS and CSS
  gem 'yui-compressor'

  # Guard and Guard::Nanoc to auto-compile + notifications
  gem 'guard'
  gem 'guard-shell'
end
