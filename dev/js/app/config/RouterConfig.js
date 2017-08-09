/*jshint esversion: 6 */

define('js/app/config/RouterConfig', function() {

    class RouterConfig {
        constructor() {
            this.routes = [{
                path: '/',
                name: 'home',
                moduleName: 'homePage',
                component: 'js/app/components/home'
            }, {
                path: '/about',
                name: 'about',
                moduleName: 'aboutPage',
                component: 'js/app/components/about'
            }, {
                path: '/contact',
                name: 'contact',
                moduleName: 'contactPage',
                component: 'js/app/components/contact'
            }];
            this.componentsPath = 'js/app/components';
        }

    }

    return new RouterConfig();

});
