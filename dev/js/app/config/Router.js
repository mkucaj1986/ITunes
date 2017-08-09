/*jshint esversion: 6 */

define('config/Router', function() {

    class Router {
        constructor() {
            this.router = [{
                path: '/',
                name: 'home'
            }, {
                path: '/about',
                name: 'about'
            }, {
                path: '/contact',
                name: 'contact'
            }];
        }

    }

    return new Router();

});
