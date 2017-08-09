/*jshint esversion: 6 */

define('js/app/router/RegisterRoutes', [], function(Router) {

    class RegisterRoutes {
        constructor() {
            this.registerRoute = this.init;
            this.routes = [];
        }

        init(routes) {
            for (const route in routes) {
                if (routes.hasOwnProperty(route)) {
                    this.routes[route] = routes[route];
                }
            }
            return this.routes;
        }
    }

    return new RegisterRoutes();


});
