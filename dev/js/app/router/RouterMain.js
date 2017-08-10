/*jshint esversion: 6 */

define('js/app/router/RouterMain', [
    'js/app/router/LinkHandler',
    'js/app/router/TestRoute',
    'js/app/router/LoadRoute',
    'js/app/router/RegisterRoutes',
    'js/app/common/Navigation',
    'js/app/common/GetHTML'
], function(LinkHandler, TestRoute, LoadRoute, RegisterRoutes, Navigation, GetPartials) {

    class RouterMain {
        constructor() {
            this.Router = {
                routes: [],
                mode: null,
                root: '/',
                registerRoute: RegisterRoutes.registerRoute,
                loadRoute: LoadRoute.loadRoute,
                testRoute: TestRoute.testRoute,
            };
        }

        init(config) {
            const routes = config.routes;

            LinkHandler.findLinks();
            this.Router.routes = this.Router.registerRoute(routes);

            if (this.Router.routes.length > 0) {
                for (let i in this.Router.routes) {
                    if (this.Router.routes.hasOwnProperty(i)) {
                        const route = this.Router.routes[i];
                        const routePath = route.path;
                        const path = this.Router.testRoute(route);
                        const routeReady = this.Router.loadRoute(routePath, path);
                        if (routeReady) {
                            const url = route.component + '/' + route.name + '.html';
                            GetPartials.fetchHtml(url, route);
                        }
                    }
                }
            }

        }

    }

    return new RouterMain();

});
