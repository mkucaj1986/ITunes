/*global define, require*/
define([
    'requireConfig'
], function(requireConfig) {
    'use strict';

    // Configure require.js paths and shims
    require.config(requireConfig);

    require(['router'], function(router) {

        router
            .registerRoutes({
                home: { path: /^\/(nex-js\/)?$/i, moduleId: 'js/app/views/home/homePage' }, // matches '/' or '/nex-js/'
                about: { path: '/about', moduleId: 'js/app/views/about/aboutPage' },
                contact: { path: '/contact', moduleId: 'js/app/views/contact/contactPage' }
            })
            .on('routeload', function onRouteLoad(Component, routeArguments) {
                new Component(routeArguments).attachTo('body');
                scroll(0, 0); // Scroll back to the top of the page
            })
            .init(); // Set up event handlers and trigger the initial page load
    });
});
