/*jshint esversion: 6 */

define('router/LinkHandler', function() {

    class LinkHandler {
        constructor() {
            this.link = 'link';
        }

        findLinks() {
            var vm = this;
            const links = document.querySelectorAll('router');

            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    console.log('click');
                });
            });
            console.log(links);
        }
    }

    return new LinkHandler();


});
