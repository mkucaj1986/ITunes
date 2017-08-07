/*jshint esversion: 6 */

define('router/RouterMain', [
    'router/LinkHandler'
], function(LinkHandler) {

    class RouterMain {
        constructor() {
            this.router = 'router Init';
            this.Router = {
                routes: [],
                mode: null,
                root: '/'
            };
        }

        init() {
            var vm = this;
            LinkHandler.findLinks();
        }
    }

    return new RouterMain();

});
