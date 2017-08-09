/*jshint esversion: 6 */

define('js/app/config/RouterConfig', function() {

    class RouterConfig {
        constructor() {
            this.routes = [{
                path: '/',
                name: 'home',
                component: 'js/app/components/home'
            }, {
                path: '/about',
                name: 'about',
                component: 'js/app/components/about'
            }, {
                path: '/contact',
                name: 'contact',
                component: 'js/app/components/contact'
            }];
            this.componentsPath = 'js/app/components';
        }

    }

    return new RouterConfig();

});
