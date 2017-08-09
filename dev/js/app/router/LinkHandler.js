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
            this.link = 'link';
            this.navigatePath = this.navigatePath;
        }

        findLinks() {
            const vm = this;
            const links = document.querySelectorAll('[iTune-router]');

            if (links.length) {
                links.forEach(link => {
                    link.addEventListener('click', function(e) {
                        const location = e.target.getAttribute("path");
                        vm.navigatePath(location, config);
                        e.preventDefault();
                    });
                });
            }
        }

        navigatePath(location, config) {
            window.location.href = '#/' + location;
            if (config.routes.length > 0) {
                for (let i in config.routes) {
                    if (config.routes.hasOwnProperty(i)) {
                        if (config.routes[i].name === location) {
                            const route = config.routes[i];
                            const routePath = route.path;
                            const path = TestRoute.testRoute(route);
                            const routeReady = LoadRoute.loadRoute(routePath, path);
                            if (routeReady) {
                                const url = config.componentsPath + '/' + location + '/' + location + '.html';
                                GetPartials.fetchHtml(url);
                                GetPartials.initModule(route);
                            }
                        }
                    }
                }
            }

            if (window.history.replaceState) {
                //prevents browser from storing history with each change:
                if (Navigation.navItems[0].name === location) {
                    window.history.pushState({}, location, '/');
                } else {
                    window.history.pushState({}, location, '#/' + location);
                }
            }

        }
    }

    return new LinkHandler();


});
