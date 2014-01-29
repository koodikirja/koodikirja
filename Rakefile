# encoding: utf-8

require 'yaml'

##
# Load Nanoc3 tasks for additional validators
#
# require 'nanoc3/tasks'

##
# Configurable Constants
#
BASE_URL = 'http://koodikirja.herokuapp.com'

##
# Heroku-based Deployment
#
# Requires a Heroku Application (a heroku remote) that runs on Celadon Cedar
#
desc 'Deploy the website to Heroku using Git.'
task :deploy do
  prepare!
  compile!
  deploy!
  revert!
end

##
# Use this method to change the base url in the configuration file
# so you can automate that instead of manually changing it everytime
# when you want to deploy the website
#
def change_base_url_to(url)
  puts "Changing Base URL to #{url}.."
  config = YAML.load_file('./nanoc.yaml')
  config['base_url'] = url
  File.open('./config.yaml', 'w') do |file|
    file.write(config.to_yaml)
  end
end

##
# Re-compile by removing the output directory and re-compiling
#
def compile!
  puts "Compiling website.."
  puts %x[rm -rf output]
  puts %x[nanoc compile]
end

##
# Prepares the deployment environment
#
def prepare!
  %x[git checkout master]
  unless %x[git status --porcelain] == ""
    puts "Please commit your changes on the master branch before deploying!"
    exit 1
  end

  puts "Creating and moving in to \"deployment\" branch.."
  puts %x[git checkout -b deployment]

  puts "Removing \"output\" directory from .gitignore.."
  gitignore = File.read(".gitignore")
  File.open(".gitignore", "w") do |file|
    file.write(gitignore.gsub("output", ""))
  end

  change_base_url_to(BASE_URL)
end

##
# Moves back to the "master" branch and removes the "deployment" branch
#
def revert!
  %x[git checkout master]
  %x[git branch -D deployment]
end

##
# Deploys the application via git to Heroku
#
def deploy!
  puts "Adding and committing compiled output for deployment.."
  puts %x[git add .]
  puts %x[git commit -a -m "temporary commit for deployment"]
  puts 'Deploying to Heroku..'
  puts %x[git push heroku HEAD:master --force]
end
