/*jshint esversion: 6 */

define('js/app/router/TestRoute', [], function() {

    class LoadRoute {
        constructor() {
            this.testRoute = this.testRoute;
        }

        testRoute(route) {
            const url = window.location.href;
            const splitUrl = url.split('/');
            const relativeUri = '/' + splitUrl.splice(3, splitUrl.length - 3).join('/');
            let path = relativeUri.split(/[\?#]/)[0];

            const hashIndex = relativeUri.indexOf('#');
            if (hashIndex !== -1) {
                let hash = relativeUri.substring(hashIndex).split('?')[0];
                if (hash.substring(0, 2) === '#/') {
                    // Hash path
                    path = hash.substring(1);
                } else if (hash.substring(0, 3) === '#!/') {
                    // Hashbang path
                    path = hash.substring(2);
                }
            }

            return path;
        }

    }

    return new LoadRoute();


});
