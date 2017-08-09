/*jshint esversion: 6 */

define('js/app/router/LoadRoute', [], function() {

    class LoadRoute {
        constructor() {
            this.loadRoute = this.loadRoute;
        }

        loadRoute(routePath, path) {
            if(routePath === path){
                return true;
            }
        }

    }

    return new LoadRoute();


});
