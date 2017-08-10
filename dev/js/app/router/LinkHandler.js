/*jshint esversion: 6 */

define('js/app/router/LinkHandler', [
    'js/app/router/TestRoute',
    'js/app/router/LoadRoute',
    'js/app/common/Navigation',
    'js/app/common/GetHTML',
    'js/app/config/RouterConfig'
], function(TestRoute, LoadRoute, Navigation, GetPartials, config) {

    class LinkHandler {
        constructor() {
            this.navigatePath = this.navigatePath;
            this.findLinks = this.findLinks;
        }

        findLinks() {
            const vm = this;
            const links = document.querySelectorAll('[iTune-router]');

            if (links.length) {
                links.forEach(link => {
                    link.addEventListener('click', function(e) {
                        const location = e.target.getAttribute("path");
                        e.preventDefault();
                        vm.navigatePath(location, config);
                    });
                });
            }
        }

        navigatePath(location, config) {
            // use 
            // window.history.pushState({}, location, location);
            // with server configuration to force serve all with index.html
            
            if (window.history.replaceState) {
                window.history.pushState({}, location, '#' + location);
            }

            if (config.routes.length > 0) {
                for (let i in config.routes) {
                    if (config.routes.hasOwnProperty(i)) {
                        if (config.routes[i].path === location) {
                            const route = config.routes[i];
                            const routePath = route.path;
                            const path = TestRoute.testRoute(route);
                            const routeReady = LoadRoute.loadRoute(routePath, path);
                            if (routeReady) {
                                const url = config.componentsPath + '/' + config.routes[i].name + '/' + config.routes[i].name + '.html';
                                GetPartials.fetchHtml(url, route);
                            }
                        }
                    }
                }
            }



        }
    }

    return new LinkHandler();


});
