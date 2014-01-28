## TODO

- Tsekkaa syntax highlight http://clarkdave.net/2013/03/syntax-highlighting-in-nanoc/

## Install

    bundle install
    bower install

## Start the file server

    nanoc view

Now visit `http://127.0.0.1:3000/` and there you go. This should display your website.

## Auto-compiling when you update files (BORKEN)

    guard start

## Crazy busyloop compile

    ./compile-forever

## Heroku Deployment

Be sure your code has been committed on the "master" branch and that it is ready to be deployed. 

    rake deploy

This will create a new branch called "deployment" and switch to it. 
It will then do all the dirty work such as setting the base_url, re-compiling the 
whole website (after removing the old ./output directory), add and commit it. 
Then it will push the "deployment" branch to "heroku:master". 
Your website should now be deployed. Once done it'll automatically switch back to the 
"master" branch and remove the "deployment" branch, so you're back where you were prior to the deployment 
procedure.
