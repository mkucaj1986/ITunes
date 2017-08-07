/*jshint esversion: 6 */

define('router/RouterMain', [
    'router/LinkHandler',
    'common/Navigation'
], function(LinkHandler, Navigation) {

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
            LinkHandler.findLinks();

            const xhr = new XMLHttpRequest();
            const url = '/views/' + Navigation.navItems[0].name + '.html';
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    //do something with xhr.responseText
                    document.querySelector('#App').innerHTML = xhr.response;
                }
            };
            xhr.open('GET', url, false);
            xhr.setRequestHeader('Content-Only', 1);
            xhr.send();
        }
    }

    return new RouterMain();

});
