/*global define*/
define([], function() {
  'use strict';

  // Require.js configuration
  return {
    baseUrl: '', // main.js is in `/js` but we want the baseUrl to be `/`
    paths: {
      'text': 'js/lib/requirejs-text/text',
      'router': 'js/lib/requirejs-router/router',
      'nex': 'js/lib/nex-js/nex',
      'handlebars': 'js/lib/handlebars/handlebars'
    },
    shim: {
      'handlebars': {
        exports: 'Handlebars'
      },
      'html5shiv': {
        exports: 'html5'
      }
    }
  };
});
