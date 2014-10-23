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

## How the build/runtime system works

Koodikirja uses `nanoc` for building the site content and `grunt` for building javascript and static resources.
In general, assets from `/app`, `/content`, `/layouts` will be transformed into assets in `/output`. Static assets
in `/static` directory will be served as-is. The node.js based `express` web server is used for serving content.
The server code can be found in `server.js`.

The whole build/runtime system can be run on the local developement machine without a database server or anything else; all content is included in this git repository.

### The `nanoc` build

- Build markdown pages from `/content` into HTML pages in `/output` directory
- Use HTML/ERB layouts in `/layouts` directory to include common templates, partials, scripts and styles

### The `grunt` build

- Build LESS stylesheets from `/app/less` into CSS in `/output/less`
- Concat/optimize javascripts from `/app/js` into `/output/koodikirja.js`
