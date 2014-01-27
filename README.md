##Ongoing

 - Heroku app created
 - Trying to use nanoc-heroku, use if works.

## Start the file server

Move in to the root directory of the new website and run:

    cd /path/to/my_site_name
    nanoc view

## Auto-compiling when you update files (BORKEN)

Move in to the root directory of the new website in a new shell window and run:

    cd /path/to/my_site_name
    guard start

Now visit `http://127.0.0.1:3000/` and there you go. This should display your website. Each time you update a file that changes the look of the web page, Guard will run the nanoc compiler to update the end result which you can directly view in the browser.

## Templating and Scripting with

* HAML
* SASS with the Compass framework
* CoffeeScript
* Markdown
* Builder

## Auto-compiling with

* Guard when files are changed

## Also contains Rake tasks for

* Optimizing JPG and PNG images (using jpegoptim/optipng OSX/Ubuntu packages)
* Compressing Stylesheet and JavaScript files (using YUI Compressor Gem)

## Heroku Deployment

Be sure your code has been committed on the "master" branch and that it is ready to be deployed. Once ready, run the following command:

    rake deploy

This will create a new branch called "deployment" and switch to it. It will then do all the dirty work such as setting the base_url, re-compiling the whole website (after removing the old ./output directory), optimizing all assets (css/js/images), add and commit it. Then it will push the "deployment" branch to "heroku:master". Your website should now be deployed. Once done it'll automatically switch back to the "master" branch and remove the "deployment" branch, so you're back where you were prior to the deployment procedure.
