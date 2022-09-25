FROM starefossen/ruby-node:2-10
WORKDIR /app

# Ruby deps
COPY Gemfile Gemfile.lock ./
RUN bundle install

# NPM deps
COPY package.json ./
RUN npm install --ignore-scripts

# Grunt build
COPY . .
RUN node_modules/grunt-cli/bin/grunt build

# Nanoc build
RUN ./nanoc
COPY static/images output/images