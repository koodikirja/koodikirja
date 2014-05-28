require.config({
  baseUrl: "/js",
  paths: {
    jquery: "../components/jquery/dist/jquery",
    "jquery-ui": "jquery-ui-1.10.4.custom.min",
    bacon: "../components/bacon/dist/Bacon",
    "bacon.jquery": "../components/bacon.jquery/dist/bacon.jquery",
    "bacon.model": "../components/bacon.model/dist/bacon.model",
    "lodash": "../components/lodash/dist/lodash",
    "raphael": "../components/raphael/raphael-min"
  }
})

require(['book'])

