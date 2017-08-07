/*jshint esversion: 6 */

define('router/LinkHandler', function() {

    class LinkHandler {
        constructor() {
            this.link = 'link';
        }

        findLinks() {
            var vm = this;
            console.log('looking Links');
        }
    }

    return new LinkHandler();


});
