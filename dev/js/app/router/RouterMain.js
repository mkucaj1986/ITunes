/*jshint esversion: 6 */

define('js/app/router/RouterMain', [
    'js/app/router/LinkHandler',
    'js/app/common/Navigation',
    'js/app/common/GetHTML'
], function(LinkHandler, Navigation, GetPartials) {

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
            const vm = this;
            const url = '/views/' + Navigation.navItems[0].name + '.html';
            LinkHandler.findLinks();
            GetPartials.fetchHtml(url);
        }
    }

    return new RouterMain();

});
