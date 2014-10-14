## Koodikirja

Koodikirja is an online book for learning programming. The site is published at http://www.koodikirja.fi/.

The book is available only in Finnish for now, so here you have yet another reason to learn this unique language.

Development instructions below.

## Install

Run

    bundle install
    npm install

Npm install will also run the Grunt build (compiles the less stylesheets) and Bower install
(downloads client-side javascripts).

## Start the server

Run

    ./server

This runs `nanoc` compilation and then starts the server.

Now visit `http://127.0.0.1:3000/` and there you go.

## Auto-compiling when you update files

Just

    grunt

Will auto-compile all content.

## Heroku Deployment

    git push heroku master
